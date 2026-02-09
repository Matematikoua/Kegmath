function GruposInves() {
  try {
    const grupos = {
      international: [
         {
          id: 1,
          name: "Investigaciones en operadores de Toeplitz y C*-álgebras CINVESTAV-IPN",
          location: "Ciudad de México, México",
          year: "desde 2012",
          participation: "Participante"
        }        
      ],
      national: [
        {
          id: 1,
          name: "Grupo de Investigación en Estadística y Matemáticas",
          location: "Universidad de Caldas, Colombia",
          year: "desde 2019",
          participation: "Líder del grupo"
        },
        {
          id: 2,
          name: "Grupo de Investigación de Ecuaciones Diferenciales, Modelación y Simulación-GEDMyS",
          location: "Universidad Pedagógica y Tecnológica de Colombia, Colombia",
          year: "desde 2018",
          participation: "Participante activo"
        }
      ]
    };

    return (
      <section className="py-20 bg-white" data-name="grupos-investigacion" data-file="components/GruposInves.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-4">Participación en Grupos de Investigación</h2>
            <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-6 flex items-center">
                <div className="icon-globe text-2xl mr-2"></div>
                Internacionales
              </h3>
              <div className="space-y-4">
                {grupos.international.map(grupo => (
                  <div key={grupo.id} className="card border-l-4 border-[var(--accent-color)]">
                    <h4 className="font-bold text-lg mb-2 text-[var(--primary-color)]">{grupo.name}</h4>
                    <p className="text-[var(--text-secondary)] mb-1">{grupo.location}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[var(--text-secondary)]">{grupo.year}</span>
                      <span className="px-3 py-1 bg-[var(--secondary-color)] bg-opacity-10 text-white rounded-full font-semibold">
                        {grupo.participation}
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
                {grupos.national.map(grupo => (
                  <div key={grupo.id} className="card border-l-4 border-[var(--secondary-color)]">
                    <h4 className="font-bold text-lg mb-2 text-[var(--primary-color)]">{grupo.name}</h4>
                    <p className="text-[var(--text-secondary)] mb-1">{grupo.location}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[var(--text-secondary)]">{grupo.year}</span>
                      <span className="px-3 py-1 bg-[var(--secondary-color)] bg-opacity-10 text-white rounded-full font-semibold">
                        {grupo.participation}
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
    console.error('GruposInves component error:', error);
    return null;
  }
}