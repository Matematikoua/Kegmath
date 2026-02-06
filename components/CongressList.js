function CongressList() {
  try {
    const congresses = {
      international: [
         {
          id: 1,
          name: "International Workshop Toeplitz operators, Wiener-Hopf method, and Applications",
          location: "Cartagena, Colombia",
          year: "2024",
          participation: "Ponencia"
        },
        {
          id: 2,
          name: "XIX  Encuentro Internacional de Matemáticas-EIMAT",
          location: "Barranquilla, Colombia",
          year: "2023",
          participation: "Ponencia"
        },
        {
          id: 3,
          name: "International Workshop on Operator Theory on Function Space (OTFS)",
          location: "Xalapa, Veracruz, México",
          year: "2022",
          participation: "Ponencia"
        },
        {
          id: 4,
          name: "XVII Encuentro Internacional de Matemáticas-EIMAT",
          location: "Barranquilla, Colombia",
          year: "2022",
          participation: "Ponencia"
        },
        {
          id: 5,
          name: "XV CONGRESS GAFEVOL",
          location: "Manizales, Colombia",
          year: "2022",
          participation: "Ponencia"
        },
        {
          id: 6,
          name: "International Workshop Operator Algebras, Toeplitz Operators, and Related Topics",
          location: "Veracruz, México",
          year: "2018",
          participation: "Ponencia"
        },
        {
          id: 7,
          name: "Coloquio de profesores del Departamento de Matemáticas  CINVESTAV-IPN",
          location: "México D.F., México",
          year: "2016",
          participation: "Ponencia"
        },
        {
          id: 8,
          name: "V Latin American Congress of Mathematicians (CLAM)",
          location: "Barranquilla, Colombia",
          year: "2016",
          participation: "Poster"
        },
        {
          id: 9,
          name: "International workshop Wiener-Hopf method, Toeplitz operators, and their applications",
          location: "Boca del Río, México",
          year: "2015",
          participation: "Ponencia"
        },
        {
          id: 10,
          name: "Workshop Analysis, Operator Theory, and Mathematical Physics",
          location: "Ixtapa, México.",
          year: "2014",
          participation: "Ponencia"
        }
      ],
      national: [
        {
          id: 1,
          name: "XIII Simposio Nororiental De Matemáticas",
          location: "Bucaramanga, Colombia",
          year: "2025",
          participation: "Ponencia"
        },
        {
          id: 2,
          name: "XII Jornada Académica, Cultural y Deportiva",
          location: "Duitama, Colombia",
          year: "2025",
          participation: "Ponencia"
        },
        {
          id: 3,
          name: "XXIX Jornada de Investigación y Extensión “Conocimiento que Impacta, Trasciende Innova",
          location: "Duitama, Colombia",
          year: "2025",
          participation: "Ponente"
        },
        {
          id: 4,
          name: "Encuentro Regional de Matemáticas: EJE CAFETERO 2024",
          location: "Manizales, Colombia",
          year: "2024",
          participation: "Ponente"
        },
        {
          id: 5,
          name: "XXIII Congreso Colombiano de Matemáticas",
          location: "Tunja, Colombia",
          year: "2023",
          participation: "Ponente"
        },
        {
          id: 6,
          name: "XXII Congreso Colombiano de Matemáticas",
          location: "Popayán, Colombia",
          year: "2019",
          participation: "Ponente"
        },
        {
          id: 7,
          name: "VI Encuentro Nacional de Matemáticas y Estadística",
          location: "Ibague, Colombia",
          year: "2016",
          participation: "Ponente"
        }
      ]
    };

    return (
      <section className="py-20 bg-white" data-name="congress-list" data-file="components/CongressList.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-4">Participación en Congresos</h2>
            <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-6 flex items-center">
                <div className="icon-globe text-2xl mr-2"></div>
                Internacionales
              </h3>
              <div className="space-y-4">
                {congresses.international.map(congress => (
                  <div key={congress.id} className="card border-l-4 border-[var(--accent-color)]">
                    <h4 className="font-bold text-lg mb-2 text-[var(--primary-color)]">{congress.name}</h4>
                    <p className="text-[var(--text-secondary)] mb-1">{congress.location}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[var(--text-secondary)]">{congress.year}</span>
                      <span className="px-3 py-1 bg-[var(--secondary-color)] bg-opacity-10 text-[var(--secondary-color)] rounded-full font-semibold">
                        {congress.participation}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-6 flex items-center">
                <div className="icon-map-pin text-2xl mr-2"></div>
                Nacionales
              </h3>
              <div className="space-y-4">
                {congresses.national.map(congress => (
                  <div key={congress.id} className="card border-l-4 border-[var(--secondary-color)]">
                    <h4 className="font-bold text-lg mb-2 text-[var(--primary-color)]">{congress.name}</h4>
                    <p className="text-[var(--text-secondary)] mb-1">{congress.location}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[var(--text-secondary)]">{congress.year}</span>
                      <span className="px-3 py-1 bg-[var(--secondary-color)] bg-opacity-10 text-[var(--secondary-color)] rounded-full font-semibold">
                        {congress.participation}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CongressList component error:', error);
    return null;
  }
}