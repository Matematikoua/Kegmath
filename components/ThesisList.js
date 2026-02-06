function ThesisList() {
  try {
    const theses = [
      {
        id: 1,
        title: "Frames en espacios de Hilbert con kernel reproductor",
        student: "Jesus Alberto Castro Escalante, Posgrado en Ciencias Matemáticas, Universidad del Atlántico, Colombia",
        year: "2025",
        status: "Concluida"
      },
      {
        id: 2,
        title: "Teoremas de Gelfand-Naimark: Caracterización de Krein C*-álgebras con identidad",
        student: "Jair Herazo, Posgrado en Ciencias Matemáticas, Universidad del Atlántico, Colombia",
        year: "2021",
        status: "Concluida"
      },
      {
        id: 3,
        title: "Frames en C*-módulos de Krein",
        student: "Danilo Polo Ojito, Posgrado en Ciencias Matemáticas, Universidad del Atlántico, Colombia",
        year: "2020",
        status: "Concluida"
      },
      {
        id: 4,
        title: "C*-álgebras y C*-módulos de Krein",
        student: "John Flórez Pacheco, Posgrado en Ciencias Matemáticas, Universidad del Atlántico, Colombia",
        year: "2019",
        status: "Concluida"
      },
      {
        id: 5,
        title: "Álgebras con involución inducidas por productos internos no-degenerados",
        student: "Eduin Rodriguez, Posgrado en Ciencias Matemáticas, Universidad del Atlántico, Colombia",
        year: "2018",
        status: "Concluida"
      },
      {
        id: 6,
        title: "Descomposición de Wold-Kolmogórov y Extensión unitaria de operadores isométricos fundamentalmente reducibles en espacios de Krein",
        student: "Juan Carlos De avila Tapia, Posgrado en Ciencias Matemáticas, Universidad del Atlántico, Colombia",
        year: "2017",
        status: "Concluida"
      },
      {
        id: 7,
        title: "Operadores hiponormales en espacios de Krein",
        student: "Jorge Jalk, Posgrado en Ciencias Matemáticas, Universidad del Atlántico, Colombia",
        year: "2017",
        status: "Concluida"
      }
    ];

    return (
      <section className="py-20 bg-[var(--surface)]" data-name="thesis-list" data-file="components/ThesisList.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-4">Tesis de Maestría Dirigidas</h2>
            <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {theses.map(thesis => (
              <div key={thesis.id} className="card">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-graduation-cap text-xl text-white"></div>
                  </div>
                  <div className="ml-4 flex-1">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      thesis.status === 'Concluida' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {thesis.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[var(--primary-color)] mb-3">{thesis.title}</h3>
                <p className="text-[var(--text-secondary)] mb-2">Tesista: {thesis.student}</p>
                <p className="text-sm text-[var(--text-secondary)]">Año: {thesis.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ThesisList component error:', error);
    return null;
  }
}