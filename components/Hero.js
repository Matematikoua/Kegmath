function Hero() {
  try {
    return (
      <section id="inicio" className="relative bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] text-white py-20" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Esmeral García, Kevin Ph.D.
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                <p>Profesor Asociado del Departamento de Matemáticas,</p>
                <p>Líder del Grupo de Investigación en Estadística y Matemáticas.</p>
                <p>Facultad de Ciencias Exactas y Naturales,</p>
                <p>Universidad de Caldas, Manizales, Colombia.</p>
                <p>Par evaluador de MinCiencias.</p>
                <p>Investigador senior, según convocatoria MinCiencias 2024.</p>
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="research.html" className="btn-primary bg-white text-[var(--primary-color)] hover:bg-gray-100">
                  Ver Investigaciones
                </a>
                <a href="#contacto" className="btn-secondary border-white text-[var(--primary-color)] hover:bg-white-10">
                  Solicitar Tutoría
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-64 h-64 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-[105px] text-white"><div className="image-container">
            <img src= 'foto-tomada-por-dany-en-mex.jpg' alt="Foto en mex al fondo indios verdes" className="w-150 h-110 object-cover"/>
        </div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}