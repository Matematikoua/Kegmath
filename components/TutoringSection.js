function TutoringSection() {
  try {
    const services = [
      {
        id: 1,
        title: "Tutoría Individual",
        price: "Consultar",
        features: [
          "Sesiones personalizadas",
          "Horarios flexibles",
          "Seguimiento continuo",
          "Material de apoyo"
        ],
        icon: "user"
      },
      {
        id: 2,
        title: "Clases Grupales",
        price: "Consultar",
        features: [
          "Grupos pequeños (máx. 5)",
          "Ambiente colaborativo",
          "Resolución de problemas",
          "Recursos compartidos"
        ],
        icon: "users"
      },
      {
        id: 3,
        title: "Asesoría de Tesis",
        price: "Consultar",
        features: [
          "Dirección de proyectos",
          "Revisión de manuscritos",
          "Metodología de investigación",
          "Preparación de defensa"
        ],
        icon: "file-text"
      }
    ];

    return (
      <section id="tutorias" className="py-20 bg-white" data-name="tutoring-section" data-file="components/TutoringSection.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-4">Servicios de Tutoría</h2>
            <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto mb-4"></div>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Explora el fascinante mundo de las matemáticas avanzadas, accede a cursos especializados y mejora tu aprendizaje con clases personalizadas adaptadas a tus necesidades académicas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="card border-2 border-gray-100 hover:border-[var(--secondary-color)]">
                <div className="w-16 h-16 bg-[var(--secondary-color)] rounded-xl flex items-center justify-center mb-4">
                  <div className={`icon-${service.icon} text-3xl text-white`}></div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[var(--primary-color)]">{service.title}</h3>
                <p className="text-3xl font-bold text-[var(--accent-color)] mb-6">{service.price}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="icon-check text-base text-green-500 mr-2 mt-1"></div>
                      <span className="text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="index.html#contacto" className="block text-center btn-secondary w-full">
                  Solicitar Información
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('TutoringSection component error:', error);
    return null;
  }
}