//Kevin Parra Lopez

//1) Definir Las Variables Correspondintes

var opt_Amazonas = new Array("El Encanto", 'La Chorrera', 'La Pedrera', 'La Victoria', 'Leticia', "Mirití-Paraná", "Puerto Alegría", "Puerto Arica", "Puerto Nariño", "Puerto Santander", "Tarapacá");

var opt_Antioquia = new Array("Abejorral", "Abriaquí", "Alejandría", "Amagá", "Amalfi", "Andes", "Angelópolis", "Angostura", "Anorí", "Anzá", "Apartadó", "Arboletes", 'Argelia de María', '‎Armenia', "Barbosa", "Bello", "Belmira", "Betania‎", "Betulia", "Briceño", "Buriticá", "Cáceres", "Caicedo‎", "Caldas", "Campamento", "Cañasgordas‎", "Caracolí", "Caramanta‎", "Carepa‎", "Carolina del Príncipe", "Caucasia‎", "Chigorodó", "Cisneros", "Ciudad Bolívar", "Cocorná", "Concepción", "Concordia", "Copacabana", "Dabeiba‎", "Donmatías‎", "Ebéjico", "El Bagre", "El Carmen de Viboral‎", "El Peñol", "El Retiro", "El Santuario", "Entrerríos", "Envigado‎ ", "Fredonia", "Frontino‎", "Giraldo", "Girardota‎", "Gómez Plata‎", "Granada", "Guadalupe", "Guarne‎", "Guatapé‎", "Heliconia", "Hispania", "Itagüí‎", "Ituango‎", "Jardín‎", "Jericó", "La Ceja", "La Estrella", "La Pintada", "La Unión", "Liborina", "Maceo", "Marinilla‎", "Medellín‎", "Montebello‎", "Murindó", "Mutatá", "Nariño", "Nechí", "Necoclí", "Olaya‎", "Peque", "Pueblorrico", "Puerto Berrío", "Puerto Nare", "Puerto Triunfo", "Remedios", "Rionegro", "Sabanalarga", "Sabaneta‎", "Salgar‎", "San Andrés de Cuerquia", "San Carlos", "San Francisco", "San Jerónimo", "San José de la Montaña", "San Juan de Urabá", "San Luis", "San Pedro de los Milagros", "San Pedro de Urabá", "San Rafael", "San Rafael", "San Roque", "San Vicente", "Santa Bárbara", "Santa Fe de Antioquia", "Santa Rosa de Osos", "Santo Domingo", "Segovia", 'Sonsón', "Sopetrán", "Támesis", "Tarazá", "Tarso", "Titiribí", "Toledo", "Turbo", "Uramita", "Urrao‎", "Valdivia", "Valparaíso", "Vegachí", "Venecia", "Vigía del Fuerte", "Yalí", "Yarumal‎", "Yolombó‎", "Yondó‎", "Zaragoza");

var opt_Arauca = new Array("Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondón", "Saravena", "Tame");

var opt_Atlántico = new Array("Barranquilla", "Baranoa", "Campo de la Cruz", "Candelaria", "Galapa", "Juan de Acosta", "Luruaco", "Malambo", "Manatí", "Palmar de Varela", "Piojó", "Polonuevo", "Ponedera", "Puerto Colombia", "Repelón", "Sabanagrande", "Sabanalarga", "Santa Lucía", "Santo Tomás", "Soledad", "Suan", "Tubará", "Usiacurí");

var opt_Bolívar = new Array("Achí", "Altos del Rosario", "Arenal", "Arjona", "Arroyohondo", "Barranco de Loba", "Calamar", "Cantagallo", "Cartagena", "Cicuco", "Clemencia", "Córdoba", "El Carmen de Bolívar", "El Guamo", "El Peñon", "Hatillo de Loba", "Magangué", "Mahates", "Margarita", "María la Baja", "Mompós", "Montecristo", "Morales", "Norosí", "Pinillos", "San Cristobal", "San Estanislao", "San Fernando", "San Jacinto", "San Jacinto del Cauca", "San Martín de Loba", "San Pablo", "Santa Catalina", "Santa Rosa ", "Santa Rosa del Sur", "Simití", "Soplaviento", "Talaigua Nuevo", "Tiquisio (Puerto Rico)", "Turbaco", "Turbaná", "Villanueva", "Zambrano", );

var opt_Boyacá = new Array("Almedia", "Aquitania", "Arcabuco", "Belén", "Berbeo", "Betéitiva", "Boavita", "Boyacá", "Briceño", "Buenavista", "Busbanzá", "Caldas", "Campohermoso", "Cerinza", "Chinavita", "Chiquinquirá", "Chíquiza", "Chiscas", "Chita", "Chitaraque", "Chivatá", "Chivor", "Ciénega", "Cómbita", "Coper", "Corrales", "Covarachía", "Cubará", "Cucaita", "Cuítiva", "Duitama", "El Cocuy", "El Espino", "Firavitoba", "Floresta", "Gachantivá", "Gámeza", "Garagoa", "Guacamayas", "Guateque", "Guayatá", "Güicán", "Iza", "Jenesano", "Jericó", "Capilla", "Uvita", "Victoria", "Labranzagrande", "Macanal", "Maripí", "Miraflores", "Mongua", "Monguí", "Moniquirá", "Motavita", "Muzo", "Nobsa", "Nuevo Colón", "Oicatá", "Otanche", "Pachavita", "Páez", "Paipa", "Pajarito", "Panqueba", "Pauna", "Paya", "Paz de Río", "Pesca", "Pisba", "Puerto Boyacá", "Quípama", "Ramiriquí", "Ráquira", "Rondón", "Saboyá", "Sáchica", "Samacá", "San Eduardo", "San José de Pare", "San Luis de Gaceno", "San Mateo", "San Miguel de Sema", "San Pablo de Borbur", "Santa María", "Santa Sofía", "Santana", "Sativanorte", "Sativasur", "Siachoque", "Soatá", "Socha", "Socotá", "Sogamoso", "Somondoco", "Sora", "Soracá", "Susacón", "Sutamarchán", "Sutatenza", "Tasco", "Tenza", "Tunja", "Tibaná", "Tibasosa", "Tinjacá", "Tipacoque", "Toca", "Togüí", "Tópaga", "Tota", "Tununguá", "Turmequé", "Tuta", "Tutazá", "Umbita", "Ventaquemada", "Villa de Leyva", "Viracachá", "Zetaquira");

var opt_Caldas = new Array("Manizales", "Aguadas", "Anserma", "Aranzazu", "Belalcázar", "Chinchiná", "Filadelfia", "La Dorada", "La Merced", "Manzanares", "Marmato", "Marquetalia", "Marulanda", "Neira", "Norcasia", "Pácora", "Palestina", "Pensilvania", "Riosucio", "Risaralda", "Salamina", "Samaná", "San José", "Supía", "Victoria", "Villamaría", "Viterbo");

var opt_Caquetá = new Array("Florencia", "Albania", "Belén de los Andaquíes", "Cartagena del Chairá", "Curillo", "El Doncello", "El Paujil", "La Montañita", "Milán", "Morelia", "Puerto Rico", "San José del Fragua", "San Vicente del Caguán", "Solano", "Solita", "Valparaíso");

var opt_Casanare = new Array("Yopal", "Aguazul", "Chameza", "Hato Corozal", "La Salina", "Maní", "Monterrey", "Nunchía", "Orocué", "Paz de Ariporo", "Pore", "Recetor", "Sabanalarga", "Sácama", "San Luis de Palenque", "Támara", "Tauramena", "Trinidad", "Villanueva", );

var opt_Cauca = new Array("Popayán", "Almaguer", "Argelia", "Balboa", "Bolívar", "Buenos Aires", "Cajibío", "Caldono", "Caloto", "Corinto", "El Tambo", "Florencia", "Guachené", "Guapi", "Inzá", "Jambaló", "La Sierra", "La Vega", "López de Micay", "Mercaderes", "Miranda", "Morales", "Padilla", "Páez", "Patía", "Piamonte", "Piendamó", "Puerto Tejada", "Puracé", "Rosas", "San Sebastián", "Santa Rosa", "Santander de Quilichao", "Silvia", "Sotará", "Suárez", "Sucre", "Timbío", "Timbiquí", "Toribio", "Totoró", "Villa Rica");

var opt_Cesar = new Array("Valledupar", "Agustín Codazzi", "Astrea", "Becerril", "Bosconia", "Chimichagua", "Chiriguaná", "Curumaní", "El Copey", "El Paso", "Gamarra", "González", "La Gloria", "La Jagua de Ibirico", "La Paz Robles", "Manaure Balcón del Cesar", "Pailitas", "Pelaya", "Pueblo Bello", "Río de Oro", "San Alberto", "San Diego", "San Martín", "Tamalameque");

var opt_Chocó = new Array("Quibdó", "Acandí", "Alto Baudó", "Atrato", "Bagadó", " Bahía Solano", "Bajo Baudó", "Bojayá", "Cantón de San Pablo", "Carmen del Darién", "Cértegui", "Condoto", "El Carmen de Atrato", "Istmina", "Juradó", "Litoral del San Juan", "Lloró", "Medio Atrato", "Medio Baudó", "Medio San Juan", "Nóvita", "Nuquí", "Río Iró", "Río Quito", "Riosucio", "San José del Palmar", "Sipí", "Tadó", "Unguía", "Unión Panamericana");

var opt_Córdoba = new Array("Montería", "Ayapel", "Buenavista", "Canalete", "Cereté", "Chimá", "Chinú", "Ciénaga de Oro", "Cotorra", "La Apartada", "Los Córdobas", "Momil", "Montelíbano", "Moñitos", "Planeta Rica", "Pueblo Nuevo", "Puerto Escondido", "Puerto Libertador", "Purísima de la Concepción", "Sahagún", "San Andrés de Sotavento", "San Antero", "San Bernardo del Viento", "San Carlos", "San José de Uré", "San Pelayo", "Santa Cruz de Lorica", "Tierralta", "Tuchín", "Valencia");

var opt_Cundinamarca = new Array("Bogotá", "Agua de Dios", "Albán", "Anapoima", "Anolaima", "Apulo", "Arbeláez", "Beltrán", "Bituima", "Bojacá", "Cabrera", "Cachipay", "Cajicá", "Caparrapí", "Cáqueza", "Carmen de Carupa", "Chaguaní", "Chía", "Chipaque", "Choachí", "Chocontá", "Cogua", "Cota", "Cucunubá", "El Colegio", "El Peñón", "El Rosal", "Facatativá", "Fómeque", "Fosca", "Funza", "Fúquene", "Fusagasugá", "Gachalá", "Gachancipá", "Gachetá", "Gama", "Girardot", "Granada", "Guachetá", "Guaduas", "Guataquí", "Guatavita", "Guayabal de Síquima", "Guayabetal", "Gutiérrez", "Jerusalén", "Junín", "Calera", "Mesa", "Palma", "Vega", "Lenguazaque", "Machetá", "Madrid", "Manta", "Medina", "Mosquera", "Nariño", "Nemocón", "Nilo", "Nimaima", "Nocaima", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Pulí", "Quebradanegra", "Quetame", "Quipile", "Ricaurte,", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco de Sales", "San Juan de Rioseco", "Sasaima", "Sesquilé", "Sibaté", "Silvania", "Simijaca", "Soacha", "Sopó", "Subachoque", "Suesca", "Supatá", "Susa", "Sutatausa", "Tabio", "Tausa", "Tena", "Tenjo", "Tibacuy", "Tibirita", "Tocaima", "Tocancipá", "Topaipí", "Ubalá", "Ubaque", "Ubaté", "Une", "Útica", "Venecia", "Vergara", "Vianí", "Villagómez", "Villapinzón", "Villeta", "Viotá", "Yacopí", "Zipacón", "Zipaquirá", );

var opt_Güainia = new Array("Inírida", "Barrancominas");

var opt_Guaviare = new Array("San José del Guaviare", "Calamar", "El Retorno", "Miraflores");

var opt_Huila = new Array("Neiva", "Acevedo", "Aipe", "Algeciras", "Altamira", "Baraya", "Campoalegre", "Colombia", "El Agrado", "El Pital", "Elías", "Garzón", "Gigante", "Guadalupe", "Hobo", "Iquira", "Isnos", "La Argentina", "La Plata", "Nátaga", "Oporapa", "Paicol", "Palermo", "Palestina", "Pitalito", "Rivera", "Saladoblanco", "San Agustín", "Santa María", "Suaza", "Tarqui", "Tello", "Teruel", "Tesalia", "Timaná", "Villavieja", "Yaguará");

var opt_La_Guajira = new Array("Riohacha", "Albania", "Barrancas", "Dibulla", "Distracción", "Molino", "Fonseca", "Hatonuevo", "La Jagua del Pilar", "de Maicao", "Manaure", "San Juan del Cesar", "Uribia", "Urumita", "Villanueva", );

var opt_Magdalena = new Array("Santa Marta", "Algarrobo", "Aracataca", "Ariguaní", "Cerro de San Antonio", "Chibolo", "Ciénaga", "Concordia", "El Banco", "El Piñón", "El Retén", "Fundación", "Nueva Granada", "Pedraza", "Pijiño de,Carmen", "Pivijay", "Plato", "Puebloviejo", "Remolino", "Sabanas de San Ángel", "Salamina", "San Sebastián de Buenavista", "San Zenón", "Santa Ana", "Santa Bárbara de Pinto", "Sitionuevo", "Tenerife", "Zapayán", "Zona", "Bananera");


var opt_Meta = new Array("Villavicencio", "Acacías", "Barranca de Upía", "Cabuyaro", "Castilla La Nueva", "Cubarral", "Cumaral", "El Calvario", "El Castillo", "El Dorado", "Fuentedeoro", "Granada", "Guamal", "La Macarena", "La Uribe", "Lejanías", "Mapiripán", "Mesetas", "Puerto Concordia", "Puerto Gaitán", "Puerto López", "Puerto Lleras", "Puerto Rico", "Restrepo", "San Carlos de Guaroa", "San Juan de Arama", "San Juanito", "San Martín", "Vista Hermosa");

var opt_Nariño = new Array("Pasto", "Albán", "Aldana", "Ancuyá", "Arboleda", "Barbacoas", "Belén", "Buesaco", "Chachagüí", "Colón Génova", "Consacá", "Córdoba", "Cuaspud Carlosama", "Cumbal", "Cumbitara", "El Charco", "El Contadero", "El Peñol", "El Rosario", "El Tablón de Gómez", "El Tambo", "Francisco Pizarro", "Funes", "Guachucal", "Guaitarilla", "Gualmatán", "Iles", "Imués", "Ipiales", "La Cruz", "La Florida", "La Llanada", "La Tola", "La Unión", "Leiva", "Linares", "Los Andes Sotomayor", "Magüi Payán", "Mallama", "Mosquera", "Nariño", "Olaya Herrera", "Ospina", "Policarpa", "Potosí", "Providencia", "Puerres", "Pupiales", "Ricaurte", "Roberto Payán", "Samaniego", "San Bernardo", "San Lorenzo", "San Pablo", "San Pedro de Cartago", "Sandoná", "Santa Bárbara", "Santacruz", "Sapuyes", "Taminango", "Tangua", "Tumaco", "Túquerres", "Yacuanquer", );

var opt_Norte_de_Santander = new Array(" San José de Cúcuta", "Abrego", "Arboledas", "Bochalema", "Bucarasica", "Cáchira", "Cácota", "Chinácota", "Chitagá", "Convención", "Cucutilla", "Durania", "El Carmen", "El Tarra", "El Zulia", "Gramalote", "Hacarí", "Herrán", "La Esperanza", "La Playa de Belén", "Labateca", "Los Patios", "Lourdes", "Mutiscua", "Ocaña", "Pamplona", "Pamplonita", "Puerto Santander", "Ragonvalia", "Salazar de las Palmas", "San Calixto", "San Cayetano", "Santiago", "Sardinata", "Silos", "Teorama", "Tibú", "Toledo", "Villa Caro", "Villa del Rosario");

var opt_Putumayo = new Array("Mocoa", "Colón", "Orito", "Puerto Asís", "Puerto Caicedo", "Puerto Guzmán", "Puerto Leguízamo", "San Francisco", "San Miguel", "Santiago", "Sibundoy", "Valle del Guamuez", "Villagarzón", );

var opt_Quindo = new Array("Armenia", "Buenavista", "Calarcá", "Circasia", "Córdoba", "Filandia", "Génova", "La Tebaida", "Montenegro", "Pijao", "Quimbaya", "Salento");

var opt_San_Andrés_y_Providencia = new Array("Providencia y Santa Catalina");

var opt_Santander = new Array("Bucaramanga", "Aguada", "Albania", "Aratoca", "Barbosa", "Barichara", "Barrancabermeja", "Betulia", "Bolívar", "Cabrera", "California", "Capitanejo", "Carcasí", "Cepitá", "Cerrito", "Charalá", "Charta", "Chima", "Chipatá", "Cimitarra", "Concepción", "Confines", "Contratación", "Coromoro", "Curití", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "El Playón", "Encino", "Enciso", "Florián", "Floridablanca", "Galán", "Gámbita", "Girón", "Guaca", "Guadalupe", "Guapotá", "Guavatá", "Güepsa", "Hato", "Jesús María", "Jordán", "La Belleza", "La Paz", "Landázuri", "Lebrija", "Los Santos", "Macaravita", "Málaga", "Matanza", "Mogotes", "Molagavita", "Ocamonte", "Oiba", "Onzaga", "Palmar", "Socorro", "Páramo", "Piedecuesta", "Pinchote", "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "Sabana de Torres", "San Andrés", "San Benito", " San Gil", "San Joaquín", "San José de Miranda", "San Miguel", "San Vicente de Chucurí", "Santa Bárbara", "Santa Helena del Opón", "Simacota", "Socorro", "Suaita", "Sucre", "Suratá", "Tona", "Valle de San José", "Vélez", "Vetas", "Villanueva", "Zapatoca");

var opt_Sucre = new Array("Sincelejo", "Buenavista", "Caimito", "Chalán", "Colosó", "Corozal", "Coveñas", "El Roble", "Galeras", "Guaranda", "La Unión", "Los Palmitos", "Majagual", "Morroa", "Ovejas", "Sampués", "San Antonio de Palmito", "San Benito Abad", "San Juan de Betulia", "San Marcos", "San Onofre", "San Pedro", "Santiago de Tolú", "Sincé", "Sucre", "Toluviejo");

var opt_Tolima = new Array("Ibagué", "Alpujarra", "Alvarado", "Ambalema", "Anzoátegui", "Armero Guayabal", "Ataco", "Cajamarca", "Carmen de Apicalá", "Casabianca", "Chaparral", "Coello", "Coyaima", "Cunday", "Dolores", "El Espinal", "El Guamo", "Falan", "Flandes", "Fresno", "Herveo", "Honda", "Icononzo", "Lérida", "Líbano", "Melgar", "Murillo", "Natagaima", "Ortega", "Palocabildo", "Piedras", "Planadas", "Prado", "Purificación", "Rioblanco", "Roncesvalles", "Rovira", "Saldaña", "San Antonio", "San Luis", "San Sebastián de Mariquita", "Santa Isabel", "Suárez", "Valle de San Juan", "Venadillo", "Villahermosa", "Villarrica", );

var opt_Valle_del_Cauca = new Array("Cali", "Alcalá", "Andalucía", "Ansermanuevo", "Argelia", "Bolívar", "Buenaventura", "Bugalagrande", "Caicedonia", "Calima El Darién", "Candelaria", "Cartago", "Dagua", "El Águila", "El Cairo", "El Cerrito", "El Dovio", "Florida", "Ginebra", "Guadalajara de Buga", "Jamundí", "La Cumbre", "La Unión", "La Victoria", "Obando", "Palmira", "Pradera", "Restrepo", "Riofrío", "Riofríoldanillo", "San Juan Bautista de Guacarí", "San Pedro", "Sevilla", "Toro", "Trujillo", "Tuluá", "Ulloa", "Versalles", "Vijes", "Yotoco", "Yumbo", "Zarzal");

var opt_Vaupés = new Array("Mitú", "Carurú", "Taraira");

var opt_Vichada = new Array("Puerto Carreño", "Cumaribo", "Primavera", "Santa Rosalía");


// 2) crear una funcion que permita ejecutar el cambio dinamico

function cambia1() {
    var cosa;
    var formulario2 = document.getElementById('formulario2')
        //Se toma el vamor de la "cosa seleccionada"
    cosa = formulario2.departamento[formulario2.departamento.selectedIndex].value;
    //se chequea si la "cosa" esta definida
    if (cosa != 0) {
        //selecionamos las cosas Correctas
        mis_opts = eval("opt_" + cosa);
        //se calcula el numero de cosas
        num_opts = mis_opts.length;
        //marco el numero de opt en el select
        formulario2.opt.length = num_opts;
        //para cada opt del array, la pongo en el select
        for (i = 0; i < num_opts; i++) {
            formulario2.opt.options[i].value = mis_opts[i];
            formulario2.opt.options[i].text = mis_opts[i];
        }
    } else {
        //si no habia ninguna opt seleccionada, elimino las cosas del select
        formulario2.opt.length = 1;
        //ponemos un guion en la unica opt que he dejado
        formulario2.opt.options[0].value = "#";
        formulario2.opt.options[0].text = "Seleccione departamento";
    }
    //hacer un reset de las opts
    formulario2.opt.options[0].selected = true;

}