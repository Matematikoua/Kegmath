function ResearchHero() {
  try {
    return (
      <section className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] text-white py-16" data-name="research-hero" data-file="components/ResearchHero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investigaciones</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explora los trabajos de investigación que he realizado en el transcurso de mi carrera académica, incluyendo publicaciones científicas, 
              dirección de tesis de maestría y participación en congresos nacionales e internacionales.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ResearchHero component error:', error);
    return null;
  }
}