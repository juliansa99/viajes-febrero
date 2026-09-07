// ============================================================
// Storage helpers (per-destination, kept in this browser only)
// ============================================================
const STORE_PREFIX = "viajesFebrero:";

function loadStore(destId){
  try{
    const raw = localStorage.getItem(STORE_PREFIX + destId);
    if(!raw) return { tickets: [], stays: [], cover: null };
    const parsed = JSON.parse(raw);
    return {
      tickets: parsed.tickets || [],
      stays: parsed.stays || [],
      cover: parsed.cover || null
    };
  }catch(e){
    console.error("No se pudo leer el almacenamiento local", e);
    return { tickets: [], stays: [], cover: null };
  }
}

function saveStore(destId, store){
  try{
    localStorage.setItem(STORE_PREFIX + destId, JSON.stringify(store));
  }catch(e){
    alert("No se pudo guardar. Es posible que el almacenamiento del navegador esté lleno (esto pasa sobre todo con muchas imágenes de pasajes).");
  }
}

// ============================================================
// State
// ============================================================
let currentDest = null;
let currentMap = null;

// ============================================================
// Map
// ============================================================
function renderMap(dest){
  const container = document.getElementById("map-container");

  if(currentMap){
    currentMap.remove();
    currentMap = null;
  }

  const puntos = dest.puntos || [];
  if(puntos.length === 0){
    container.style.display = "none";
    return;
  }
  container.style.display = "block";

  currentMap = L.map(container, { scrollWheelZoom:false });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(currentMap);

  const latlngs = puntos.map(p => [p.lat, p.lng]);

  const polyline = L.polyline(latlngs, {
    color: "#14283d",
    weight: 3,
    dashArray: "7,7"
  }).addTo(currentMap);

  puntos.forEach((p, idx) => {
    const icon = L.divIcon({
      className: "map-marker",
      html: `<span>${idx + 1}</span>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13]
    });
    L.marker([p.lat, p.lng], { icon })
      .addTo(currentMap)
      .bindPopup(`<strong>${idx + 1}. ${p.nombre}</strong>`);
  });

  currentMap.fitBounds(polyline.getBounds(), { padding: [30, 30] });

  // Leaflet needs a nudge when its container size settles after render.
  setTimeout(() => currentMap && currentMap.invalidateSize(), 150);
}

// ============================================================
// Home view
// ============================================================
function fmtMoney(n){
  if(n === null || n === undefined) return "—";
  return "$" + Number(n).toLocaleString("es-AR");
}

function renderHome(){
  const grid = document.getElementById("pass-grid");
  grid.innerHTML = "";

  DESTINATIONS.forEach(dest => {
    const store = loadStore(dest.id);
    const card = document.createElement("button");
    card.type = "button";
    card.className = "pass-card";
    card.setAttribute("aria-label", "Ver itinerario de " + dest.nombre);

    const coverStyle = store.cover
      ? `background-image:url('${store.cover}')`
      : dest.foto
        ? `background-image:url('${encodeURI(dest.foto)}')`
        : `background-image:linear-gradient(135deg, ${dest.gradient[0]}, ${dest.gradient[1]})`;

    card.innerHTML = `
      <div class="pass-cover" style="${coverStyle}">
        <span class="pass-cover-icon">Buenos Aires → ${dest.nombre.split(" ")[0]}</span>
        <label class="pass-cover-upload" title="Cambiar foto de portada">
          Foto
          <input type="file" accept="image/*" class="js-cover-input" data-dest="${dest.id}">
        </label>
      </div>
      <div class="pass-main">
        <div class="pass-name">${dest.nombre}</div>
        <div class="pass-sub">${dest.subtitulo}</div>
        <div class="pass-meta">
          <div class="pass-meta-item">
            <span class="pass-meta-label">Fechas</span>
            <span class="pass-meta-value">${dest.fechaInicio} – ${dest.fechaFin}</span>
          </div>
          <div class="pass-meta-item">
            <span class="pass-meta-label">Noches</span>
            <span class="pass-meta-value">${dest.noches}</span>
          </div>
        </div>
        <div class="pass-footer">
          <div>
            <span class="pass-total-label">Gasto total</span>
            <span class="pass-total">${fmtMoney(dest.gastoTotal)}</span>
          </div>
          <span class="pass-stub-go">Ver itinerario</span>
        </div>
      </div>
    `;

    // Clicking anywhere on the card opens the trip, except the photo-upload control.
    card.addEventListener("click", (e) => {
      if(e.target.closest(".pass-cover-upload")) return;
      openDetail(dest.id);
    });

    grid.appendChild(card);
  });

  // Wire cover-photo uploads (delegated per input since cards re-render each visit)
  grid.querySelectorAll(".js-cover-input").forEach(input => {
    input.addEventListener("click", (e) => e.stopPropagation());
    input.addEventListener("change", async (e) => {
      e.stopPropagation();
      const file = e.target.files[0];
      const destId = e.target.dataset.dest;
      if(!file || !destId) return;
      const dataUrl = await fileToDataUrl(file);
      const store = loadStore(destId);
      store.cover = dataUrl;
      saveStore(destId, store);
      renderHome();
    });
  });
}

// ============================================================
// Detail view
// ============================================================
function openDetail(destId){
  currentDest = DESTINATIONS.find(d => d.id === destId);
  if(!currentDest) return;

  document.getElementById("view-home").hidden = true;
  document.getElementById("view-detail").hidden = false;
  window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});

  renderDossierHead();
  renderMap(currentDest);
  renderTimeline();
  renderReceipt();
  renderDocuments();
  switchTab("itinerario");
}

function closeDetail(){
  document.getElementById("view-detail").hidden = true;
  document.getElementById("view-home").hidden = false;
  currentDest = null;
  renderHome(); // refresh covers in case one was just set
}

function renderDossierHead(){
  const el = document.getElementById("dossier-head");
  el.innerHTML = `
    <div>
      <div class="dossier-title-row">
        <h2>${currentDest.nombre}</h2>
      </div>
      <div class="dossier-sub">${currentDest.subtitulo}</div>
    </div>
    <div class="dossier-dates">
      <div class="dossier-stat">
        <div class="dossier-stat-label">Salida</div>
        <div class="dossier-stat-value">${currentDest.fechaInicio}</div>
      </div>
      <div class="dossier-stat">
        <div class="dossier-stat-label">Regreso</div>
        <div class="dossier-stat-value">${currentDest.fechaFin}</div>
      </div>
      <div class="dossier-stat">
        <div class="dossier-stat-label">Gasto total</div>
        <div class="dossier-stat-value">${fmtMoney(currentDest.gastoTotal)}</div>
      </div>
    </div>
  `;
}

function renderTimeline(){
  const list = document.getElementById("timeline-list");
  list.innerHTML = "";
  currentDest.dias.forEach(day => {
    const li = document.createElement("li");
    li.className = "timeline-item";
    li.innerHTML = `
      <div class="timeline-date">${day.date}</div>
      <div class="timeline-desc">${day.desc}</div>
    `;
    list.appendChild(li);
  });
}

function renderReceipt(){
  const el = document.getElementById("receipt");
  el.innerHTML = "";
  currentDest.costos.forEach(c => {
    const row = document.createElement("div");
    row.className = "receipt-row";
    row.innerHTML = `
      <span class="receipt-label">${c.label}${c.note ? `<span class="receipt-note">${c.note}</span>` : ""}</span>
      <span class="receipt-amount">${fmtMoney(c.amount)} ${c.currency || ""}</span>
    `;
    el.appendChild(row);
  });
  const totalRow = document.createElement("div");
  totalRow.className = "receipt-total";
  totalRow.innerHTML = `
    <span class="receipt-total-label">Gasto total del viaje</span>
    <span class="receipt-total-amount">${fmtMoney(currentDest.gastoTotal)} USD</span>
  `;
  el.appendChild(totalRow);
}

// ---- Documents: tickets + stays ------------------------------

function renderDocuments(){
  renderTickets();
  renderStays();
}

function renderTickets(){
  const grid = document.getElementById("ticket-grid");
  const empty = document.getElementById("ticket-empty");
  grid.innerHTML = "";

  const pasajes = currentDest.pasajes || [];
  if(pasajes.length === 0){
    empty.classList.add("is-visible");
  }else{
    empty.classList.remove("is-visible");
    pasajes.forEach((src, idx) => {
      const card = document.createElement("div");
      card.className = "ticket-card";
card.innerHTML = `<a href="${encodeURI(src)}" target="_blank" rel="noopener noreferrer"><img src="${encodeURI(src)}" alt="Pasaje ${idx+1}"></a>`;      grid.appendChild(card);
    });
  }
}

function renderStays(){
  const list = document.getElementById("stay-list");
  const empty = document.getElementById("stay-empty");
  list.innerHTML = "";

  const stays = currentDest.alojamientos || [];
  if(stays.length === 0){
    empty.classList.add("is-visible");
  }else{
    empty.classList.remove("is-visible");
    stays.forEach((stay) => {
      const li = document.createElement("li");
      li.className = "stay-item";
      li.innerHTML = `
        <div class="stay-item-main">
          <a href="${stay.url}" target="_blank" rel="noopener noreferrer">${stay.nombre}</a>
          ${stay.nota ? `<span class="stay-item-note">${stay.nota}</span>` : ""}
        </div>
      `;
      list.appendChild(li);
    });
  }
}

function fileToDataUrl(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ============================================================
// Tabs
// ============================================================
function switchTab(tabName){
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("is-active", panel.id === "panel-" + tabName);
  });
  if(tabName === "itinerario" && currentMap){
    setTimeout(() => currentMap.invalidateSize(), 50);
  }
}

// ============================================================
// Wire up events
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderHome();

  document.getElementById("btn-back").addEventListener("click", closeDetail);

  document.getElementById("tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if(btn) switchTab(btn.dataset.tab);
  });
});
