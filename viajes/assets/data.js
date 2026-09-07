const DESTINATIONS = [
  {
    "id": "espana",
    "nombre": "Norte de España en Motorhome",
    "subtitulo": "Madrid · San Sebastián · Bilbao · Santander · Picos de Europa",
    "icon": "plane-road",
    "gradient": [
      "#16324a",
      "#1f5c55"
    ],
    "foto": "images/españa.jpg",
    "sheet": "ESPAÑA",
    "fechaInicio": "Mié 04/feb",
    "fechaFin": "Sáb 28/feb",
    "noches": 24,
    "gastoTotal": 4500,
    "dias": [
      { "date": "Mié 04/feb", "raw": "2026-02-04", "desc": "BUENOS AIRES A MADRID " },
      { "date": "Jue 05/feb", "raw": "2026-02-05", "desc": "Llegada a Madrid 14:00 (+1 día). Tarde de descanso, paseo suave por el centro (Puerta del Sol, Plaza Mayor). Hotel en Madrid." },
      { "date": "Vie 06/feb", "raw": "2026-02-06", "desc": "Madrid: Palacio Real, Retiro." },
      { "date": "Sáb 07/feb", "raw": "2026-02-07", "desc": "Madrid: Museo del Prado o Reina Sofía, barrio de Malasaña/Chueca." },
      { "date": "Dom 08/feb", "raw": "2026-02-08", "desc": "Tren AVE a o Micro ALSA a San Sebastián (~5h15). Llegada a la tarde, check-in hotel." },
      { "date": "Lun 09/feb", "raw": "2026-02-09", "desc": "Retiro del motorhome en San Sebastián. Tarde tranquila: Playa de la Concha (para caminar, no para meterse al agua)." },
      { "date": "Mar 10/feb", "raw": "2026-02-10", "desc": "San Sebastián: Monte Igueldo, Parte Vieja, pintxos." },
      { "date": "Mié 11/feb", "raw": "2026-02-11", "desc": "Excursión a Hondarribia (30 min), pueblo fronterizo con Francia." },
      { "date": "Jue 12/feb", "raw": "2026-02-12", "desc": "Manejo a Zarautz (~30 min), paseo marítimo largo, buena gastronomía." },
      { "date": "Vie 13/feb", "raw": "2026-02-13", "desc": "Getaria (10 min), pueblo pesquero, museo Balenciaga." },
      { "date": "Sáb 14/feb", "raw": "2026-02-14", "desc": "Manejo a Bilbao (~1h)." },
      { "date": "Dom 15/feb", "raw": "2026-02-15", "desc": "Bilbao: Museo Guggenheim." },
      { "date": "Lun 16/feb", "raw": "2026-02-16", "desc": "Bilbao: Casco Viejo, Mercado de la Ribera." },
      { "date": "Mar 17/feb", "raw": "2026-02-17", "desc": "Excursión a San Juan de Gaztelugatxe y Bermeo (~45 min), vuelta a Bilbao." },
      { "date": "Mié 18/feb", "raw": "2026-02-18", "desc": "Manejo a Santander (~1h30)." },
      { "date": "Jue 19/feb", "raw": "2026-02-19", "desc": "Santander: El Sardinero, Palacio de la Magdalena." },
      { "date": "Vie 20/feb", "raw": "2026-02-20", "desc": "Manejo a Santillana del Mar (~30 min), pueblo medieval." },
      { "date": "Sáb 21/feb", "raw": "2026-02-21", "desc": "Excursión a Comillas (15 min desde Santillana), Capricho de Gaudí." },
      { "date": "Dom 22/feb", "raw": "2026-02-22", "desc": "Manejo a la zona de Picos de Europa (Potes/Fuente Dé) — con nieve puede estar espectacular, pero chequear accesos para el motorhome antes de ir." },
      { "date": "Lun 23/feb", "raw": "2026-02-23", "desc": "Día libre en Picos de Europa o vuelta hacia la costa, sin agenda fija." },
      { "date": "Mar 24/feb", "raw": "2026-02-24", "desc": "Manejo de regreso a San Sebastián (~3h)." },
      { "date": "Mié 25/feb", "raw": "2026-02-25", "desc": "Día colchón en San Sebastián (imprevistos, descanso, o algo pendiente)." },
      { "date": "Jue 26/feb", "raw": "2026-02-26", "desc": "Devolución del motorhome. Tren o Micro a Madrid." },
      { "date": "Vie 27/feb", "raw": "2026-02-27", "desc": "Día libre en Madrid, últimas compras/paseo." },
      { "date": "Sáb 28/feb", "raw": "2026-02-28", "desc": "Vuelo de vuelta MAD → EZE 08:45." }
    ],
    "costos": [
      { "label": "AEREO Ida y Vuelta", "amount": 1200, "currency": "USD", "note": null, "imagen": "images/pasaje_españa.png" },
{
  "label": "Hotel Madrid (3 noches)",
  "amount": 200,
  "currency": "USD",
  "note": null,
  "opciones": [
    {
      "nombre": "Airbnb - depto Madrid",
      "url": "https://www.airbnb.com.ar/rooms/8422607?adults=2&check_in=2027-02-05&check_out=2027-02-08&search_mode=regular_search&source_impression_id=p3_41f3fb76-6174-48e7-99c0-037f9ec85bbc_716900ba-a383-4396-8160-ed6a6da91e31_0_8422607_14&previous_page_section_name=1000&federated_search_id=41f3fb76-6174-48e7-99c0-037f9ec85bbc",
      "nota": "5 al 8 feb, 2 adultos"
    },
    {
      "nombre": "Aparthotel Tribunal (Booking)",
      "url": "https://www.booking.com/hotel/es/aparthoteltribunal.es.html?label=es-ar-booking-desktop-MRRNwpxuLSY8eNXQ7griKwS652829001343%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9070458%3Ali%3Adec%3Adm&aid=2311236&ucfs=1&checkin=2027-02-05&checkout=2027-02-08&dest_id=-390625&dest_type=city&group_adults=2&no_rooms=1&group_children=0&nflt=price%3DUSD-min-130-1%3Bht_id%3D204&srpvid=bb2785532c1c175b&srepoch=1788807551&all_sr_blocks=0_0_2_0_0&highlighted_blocks=0_0_2_0_0&matching_block_id=0_0_2_0_0&atlas_src=sr_iw_title",
      "nota": "5 al 8 feb, desde USD 130"
    },
    {
      "nombre": "Bob W Atocha (Booking)",
      "url": "https://www.booking.com/hotel/es/bob-w-atocha.es.html?label=es-ar-booking-desktop-MRRNwpxuLSY8eNXQ7griKwS652829001343%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9070458%3Ali%3Adec%3Adm&aid=2311236&ucfs=1&checkin=2027-02-05&checkout=2027-02-08&dest_id=-390625&dest_type=city&group_adults=2&no_rooms=1&group_children=0&nflt=price%3DUSD-min-150-1%3Bht_id%3D204&srpvid=bb2785532c1c175b&srepoch=1788807510&all_sr_blocks=890900304_367709931_2_0_0_709400&highlighted_blocks=890900304_367709931_2_0_0_709400&matching_block_id=890900304_367709931_2_0_0_709400&atlas_src=sr_iw_title",
      "nota": "5 al 8 feb, desde USD 150"
    }
  ]
},      
      { "label": "Micro Madrid - San Sebastian (5/6hs)", "amount": 35, "currency": "USD", "note": null },
      { "label": "Hotel San Sebastian (1 noche)", "amount": 50, "currency": "USD", "note": null, "opciones": [] },
      { "label": "MotorHome (8 al 26)", "amount": 1000, "currency": "USD", "note": null },
      { "label": "Micro San Sebastian - Madrid", "amount": 35, "currency": "USD", "note": null },
      { "label": "Hotel Madrid (2 noches)", "amount": 130, "currency": "USD", "note": null, "opciones": [] },
      { "label": "Nafta Motorhome", "amount": 100, "currency": "USD", "note": null },
      { "label": "Pernocte Motorhome", "amount": 200, "currency": "USD", "note": null },
      { "label": "Seguro Motorhome", "amount": 75, "currency": "USD", "note": null },
      { "label": "Comida y gastos diarios (24 días)", "amount": 1475, "currency": "USD", "note": "61usd promedio x dia comidas, etc" }
    ],
    "puntos": [
      { "nombre": "Madrid", "lat": 40.4168, "lng": -3.7038 },
      { "nombre": "San Sebastián", "lat": 43.3183, "lng": -1.9812 },
      { "nombre": "Hondarribia", "lat": 43.3625, "lng": -1.7909 },
      { "nombre": "Zarautz", "lat": 43.2833, "lng": -2.1667 },
      { "nombre": "Getaria", "lat": 43.3049, "lng": -2.2019 },
      { "nombre": "Bilbao", "lat": 43.263, "lng": -2.935 },
      { "nombre": "Bermeo / Gaztelugatxe", "lat": 43.42, "lng": -2.7217 },
      { "nombre": "Santander", "lat": 43.4623, "lng": -3.8099 },
      { "nombre": "Santillana del Mar", "lat": 43.3897, "lng": -4.108 },
      { "nombre": "Comillas", "lat": 43.3859, "lng": -4.2905 },
      { "nombre": "Picos de Europa (Potes)", "lat": 43.1587, "lng": -4.6229 },
      { "nombre": "San Sebastián (regreso)", "lat": 43.3183, "lng": -1.9812 },
      { "nombre": "Madrid (regreso)", "lat": 40.4168, "lng": -3.7038 }
    ]
  },
  {
    "id": "bariloche",
    "nombre": "Sur Argentino en Motorhome",
    "subtitulo": "Bariloche · Villa La Angostura · San Martín de los Andes · El Bolsón · Esquel",
    "icon": "mountain",
    "gradient": [
      "#0f3d3a",
      "#3c7a63"
    ],
    "foto": "images/bariloche.jpg",
    "sheet": "ARGENTINA",
    "fechaInicio": "Dom 08/feb",
    "fechaFin": "Jue 26/feb",
    "noches": 18,
    "gastoTotal": 3550,
    "dias": [
      { "date": "Dom 08/feb", "raw": "2026-02-08", "desc": "Vuelo AEP → BRC 19:05, llegada 21:30. Hotel en Bariloche." },
      { "date": "Lun 09/feb", "raw": "2026-02-09", "desc": "Retiro del motorhome en Bariloche. Día tranquilo: Circuito Chico, Cerro Campanario." },
      { "date": "Mar 10/feb", "raw": "2026-02-10", "desc": "Bariloche: playa de lago, centro cívico, sin agenda fija." },
      { "date": "Mié 11/feb", "raw": "2026-02-11", "desc": "Manejo a Villa La Angostura (~1h15). Instalarse, tarde libre." },
      { "date": "Jue 12/feb", "raw": "2026-02-12", "desc": "Villa La Angostura: Parque Nacional Los Arrayanes." },
      { "date": "Vie 13/feb", "raw": "2026-02-13", "desc": "Manejo a San Martín de los Andes (~1h30) por el camino de los Siete Lagos." },
      { "date": "Sáb 14/feb", "raw": "2026-02-14", "desc": "San Martín de los Andes: día tranquilo, lago Lácar." },
      { "date": "Dom 15/feb", "raw": "2026-02-15", "desc": "Excursión a Villa Traful o Lago Lolog, vuelta a dormir en San Martín." },
      { "date": "Lun 16/feb", "raw": "2026-02-16", "desc": "Manejo a Junín de los Andes (~40 min), zona tranquila." },
      { "date": "Mar 17/feb", "raw": "2026-02-17", "desc": "Regreso a Bariloche (~2h30)." },
      { "date": "Mié 18/feb", "raw": "2026-02-18", "desc": "Manejo a El Bolsón (~2h), feria artesanal." },
      { "date": "Jue 19/feb", "raw": "2026-02-19", "desc": "Día libre en El Bolsón." },
      { "date": "Vie 20/feb", "raw": "2026-02-20", "desc": "Manejo a Esquel (~2h30)." },
      { "date": "Sáb 21/feb", "raw": "2026-02-21", "desc": "Excursión al Parque Nacional Los Alerces (~1h desde Esquel)." },
      { "date": "Dom 22/feb", "raw": "2026-02-22", "desc": "Día libre en Esquel o Los Alerces." },
      { "date": "Lun 23/feb", "raw": "2026-02-23", "desc": "Regreso hacia Bariloche (~4h), con parada intermedia si quieren cortar el viaje." },
      { "date": "Mar 24/feb", "raw": "2026-02-24", "desc": "Llegada a Bariloche, devolución del motorhome. Hotel." },
      { "date": "Mié 25/feb", "raw": "2026-02-25", "desc": "Día libre en Bariloche, últimos paseos/compras." },
      { "date": "Jue 26/feb", "raw": "2026-02-26", "desc": "Vuelo de vuelta BRC → AEP 13:20, llegada 15:25." }
    ],
    "costos": [
      { "label": "Aereo Ida y Vuelta", "amount": 250, "currency": "USD", "note": null, "imagen": "images/pasaje_bariloche.png" },
      { "label": "Hotel Bariloche (una noche)", "amount": 75, "currency": "USD", "note": null, "opciones": [] },
      { "label": "Alquiler Motorhome (9 al 24)", "amount": 1700, "currency": "USD", "note": null },
      { "label": "Nafta Motorhome", "amount": 125, "currency": "USD", "note": null },
      { "label": "Pernocte Motorhome", "amount": 200, "currency": "USD", "note": null },
      { "label": "Entradas Parques", "amount": 50, "currency": "USD", "note": null },
      { "label": "Hotel Bariloche (dos noches)", "amount": 150, "currency": "USD", "note": null, "opciones": [] },
      { "label": "Comida y gastos diarios (19 días)", "amount": 1000, "currency": "USD", "note": "52usd promedio por dia comidas, etc" }
    ],
    "puntos": [
      { "nombre": "Bariloche", "lat": -41.1335, "lng": -71.3103 },
      { "nombre": "Villa La Angostura", "lat": -40.761, "lng": -71.648 },
      { "nombre": "San Martín de los Andes", "lat": -40.1576, "lng": -71.3538 },
      { "nombre": "Junín de los Andes", "lat": -39.95, "lng": -71.0667 },
      { "nombre": "Bariloche (regreso)", "lat": -41.1335, "lng": -71.3103 },
      { "nombre": "El Bolsón", "lat": -41.9667, "lng": -71.5333 },
      { "nombre": "Esquel", "lat": -42.911, "lng": -71.322 },
      { "nombre": "Bariloche (regreso final)", "lat": -41.1335, "lng": -71.3103 }
    ]
  },
  {
    "id": "brasil",
    "nombre": "Nordeste de Brasil + Fernando de Noronha",
    "subtitulo": "Recife · Fernando de Noronha · Porto de Galinhas · Natal · Pipa",
    "icon": "island",
    "gradient": [
      "#0b4d6b",
      "#1c8a8a"
    ],
    "foto": "images/noronha.jpg",
    "sheet": "BRASIL",
    "fechaInicio": "Mar 03/feb",
    "fechaFin": "Vie 20/feb",
    "noches": 17,
    "gastoTotal": 3415,
    "dias": [
      { "date": "Mar 03/feb", "raw": "2026-02-03", "desc": "Llegada a Recife 10:55. Descanso, tarde en Recife Antigo." },
      { "date": "Mié 04/feb", "raw": "2026-02-04", "desc": "Recife: Marco Zero, Boa Viagem." },
      { "date": "Jue 05/feb", "raw": "2026-02-05", "desc": "Excursión a Olinda (~20 min), centro histórico." },
      { "date": "Vie 06/feb", "raw": "2026-02-06", "desc": "Vuelo Recife → Fernando de Noronha (~1h30). Check-in, tarde en Praia da Conceição." },
      { "date": "Sáb 07/feb", "raw": "2026-02-07", "desc": "Noronha: Baía dos Golfinhos, Praia do Sancho." },
      { "date": "Dom 08/feb", "raw": "2026-02-08", "desc": "Noronha: Baía dos Porcos, Piscinas Naturais (marea baja)." },
      { "date": "Lun 09/feb", "raw": "2026-02-09", "desc": "Noronha: buceo/snorkel, día libre." },
      { "date": "Mar 10/feb", "raw": "2026-02-10", "desc": "Noronha: trilha Parque Nacional Marinho, Forte dos Remédios." },
      { "date": "Mié 11/feb", "raw": "2026-02-11", "desc": "Noronha: día libre, playas." },
      { "date": "Jue 12/feb", "raw": "2026-02-12", "desc": "Noronha: último día completo, sin agenda." },
      { "date": "Vie 13/feb", "raw": "2026-02-13", "desc": "Vuelo Noronha → Recife. Traslado a Porto de Galinhas (~1h30)." },
      { "date": "Sáb 14/feb", "raw": "2026-02-14", "desc": "Día libre en Porto de Galinhas, piscinas naturales. Noche 2." },
      { "date": "Dom 15/feb", "raw": "2026-02-15", "desc": "Traslado a Natal.  Instalarse, tarde en Praia de Ponta Negra." },
      { "date": "Lun 16/feb", "raw": "2026-02-16", "desc": "Excursión a las Dunas de Genipabu (buggy, lagunas). Noche 2 en Natal." },
      { "date": "Mar 17/feb", "raw": "2026-02-17", "desc": "Traslado a Pipa. Instalarse, playa, atardecer." },
      { "date": "Mié 18/feb", "raw": "2026-02-18", "desc": "Día libre en Pipa, falésias, delfines." },
      { "date": "Jue 19/feb", "raw": "2026-02-19", "desc": "Regreso a Recife, noche cerca del aeropuerto para el vuelo temprano." },
      { "date": "Vie 20/feb", "raw": "2026-02-20", "desc": "Vuelo Recife → Buenos Aires 12:05, llegada 17:41." }
    ],
    "costos": [
      { "label": "Aereo Ida y Vuelta (Recife)", "amount": 1000, "currency": "USD", "note": null, "imagen": "images/pasaje_brasil.png" },
      { "label": "Aereo Ida y Vuelta (Recife-Noronha)", "amount": 500, "currency": "USD", "note": null },
      { "label": "TPA y Taxa ICMBio", "amount": 200, "currency": "USD", "note": null },
      { "label": "Hotel Recife (3 al 6)", "amount": 100, "currency": "USD", "note": null, "opciones": [] },
      { "label": "Hotel Noronha (6 al 13)", "amount": 350, "currency": "USD", "note": null, "opciones": [] },
      { "label": "Recife - Porto Galhinas (UBER - 1hs)", "amount": 15, "currency": "USD", "note": null },
      { "label": "Hotel Porto de Galinhas (13 al 15)", "amount": 50, "currency": "USD", "note": null, "opciones": [] },
      { "label": "Porto de Galhinas - Recife - Natal", "amount": 35, "currency": "USD", "note": null },
      { "label": "Hotel Natal (15 al 17)", "amount": 50, "currency": "USD", "note": null, "opciones": [] },
      { "label": "Natal - Pipa (UBER)", "amount": 25, "currency": "USD", "note": null },
      { "label": "Hotel Pipa (17 al 19)", "amount": 70, "currency": "USD", "note": null, "opciones": [] },
      { "label": "Pipa - Recife", "amount": 50, "currency": "USD", "note": null },
      { "label": "Excursión Genipabu (buggy)", "amount": 50, "currency": "USD", "note": null },
      { "label": "Snorkel/passeio de barco en Noronha", "amount": 100, "currency": "USD", "note": null },
      { "label": "Comida y gastos diarios (17 días)", "amount": 800, "currency": "USD", "note": "47 usd por dia promedio comidas, etc" }
    ],
    "puntos": [
      { "nombre": "Recife", "lat": -8.0476, "lng": -34.877 },
      { "nombre": "Olinda", "lat": -8.0089, "lng": -34.8553 },
      { "nombre": "Fernando de Noronha", "lat": -3.8536, "lng": -32.4297 },
      { "nombre": "Recife (regreso)", "lat": -8.0476, "lng": -34.877 },
      { "nombre": "Porto de Galinhas", "lat": -8.5083, "lng": -35.0 },
      { "nombre": "Natal", "lat": -5.7945, "lng": -35.211 },
      { "nombre": "Pipa", "lat": -6.2306, "lng": -35.0442 },
      { "nombre": "Recife (regreso final)", "lat": -8.0476, "lng": -34.877 }
    ]
  },
  {
    "id": "miami-orlando",
    "nombre": "Miami + Orlando",
    "subtitulo": "South Beach · Everglades · Disney · Universal",
    "icon": "sun",
    "gradient": [
      "#5c1f3a",
      "#b33f3f"
    ],
    "foto": "images/orlando.jpg",
    "sheet": "MIAMI - ORLANDO",
    "fechaInicio": "Vie 13/feb",
    "fechaFin": "Sáb 28/feb",
    "noches": 15,
    "gastoTotal": 4000,
    "dias": [
      { "date": "Vie 13/feb", "raw": "2026-02-13", "desc": "Llegada a Miami 16:55. Retiro del auto de alquiler. Check-in hotel zona South Beach." },
      { "date": "Sáb 14/feb", "raw": "2026-02-14", "desc": "Miami: South Beach, Ocean Drive, Art Deco District." },
      { "date": "Dom 15/feb", "raw": "2026-02-15", "desc": "Miami: Wynwood Walls (murales), Little Havana." },
      { "date": "Lun 16/feb", "raw": "2026-02-16", "desc": "Excursión a Everglades National Park (~45 min), paseo en airboat." },
      { "date": "Mar 17/feb", "raw": "2026-02-17", "desc": "Día libre en Miami: playa, Bal Harbour (compras) o Key Biscayne." },
      { "date": "Mié 18/feb", "raw": "2026-02-18", "desc": "Miami: Brickell, Coconut Grove, paseo por la bahía." },
      { "date": "Jue 19/feb", "raw": "2026-02-19", "desc": "Día libre en Miami, descanso en la playa." },
      { "date": "Vie 20/feb", "raw": "2026-02-20", "desc": "Manejo a Orlando (~3h30). " },
      { "date": "Sáb 21/feb", "raw": "2026-02-21", "desc": "Magic Kingdom (Disney), día completo." },
      { "date": "Dom 22/feb", "raw": "2026-02-22", "desc": "Dia orlando" },
      { "date": "Lun 23/feb", "raw": "2026-02-23", "desc": "Universal Studios, día completo." },
      { "date": "Mar 24/feb", "raw": "2026-02-24", "desc": "Día libre en Orlando: outlet o  descanso en la pileta del hotel." },
      { "date": "Mié 25/feb", "raw": "2026-02-25", "desc": "Islands of Adventure (Universal), día completo." },
      { "date": "Jue 26/feb", "raw": "2026-02-26", "desc": "Hollywood Studios (Disney), día completo." },
      { "date": "Vie 27/feb", "raw": "2026-02-27", "desc": "Manejo de regreso a Miami (~3h30). Devolución del auto, última tarde libre." },
      { "date": "Sáb 28/feb", "raw": "2026-02-28", "desc": "Vuelo de regreso MIA → EZE 15:02." }
    ],
    "costos": [
      { "label": "Aereo Ida y Vuelta", "amount": 760, "currency": "USD", "note": null, "imagen": "images/pasaje_miami.png" },
      { "label": "Alquiler Auto (13 al 27)", "amount": 500, "currency": "USD", "note": null },
      { "label": "Hotel Miami (13 al 20)", "amount": 600, "currency": "USD", "note": null, "opciones": [] },
      { "label": "Hotel Orlando (20 al 27)", "amount": 400, "currency": "USD", "note": null, "opciones": [] },
      { "label": "Ticket Magic y Hollywood", "amount": 400, "currency": "USD", "note": null },
      { "label": "Universal 2 parques", "amount": 400, "currency": "USD", "note": null },
      { "label": "Nafta + peajes", "amount": 80, "currency": "USD", "note": null },
      { "label": "Parking parque", "amount": 60, "currency": "USD", "note": null },
      { "label": "50usd aprox por dia comidas", "amount": 800, "currency": "USD", "note": null }
    ],
    "puntos": [
      { "nombre": "Miami", "lat": 25.7617, "lng": -80.1918 },
      { "nombre": "Everglades National Park", "lat": 25.2866, "lng": -80.8987 },
      { "nombre": "Orlando", "lat": 28.5383, "lng": -81.3792 },
      { "nombre": "Miami (regreso)", "lat": 25.7617, "lng": -80.1918 }
    ]
  }
];