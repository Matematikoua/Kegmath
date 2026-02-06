function CoursesHero() {
  try {
    return (
      <section className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] text-white py-16" data-name="courses-hero" data-file="components/CoursesHero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cursos Disponibles</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Programas académicos diseñados para fortalecer tu formación matemática desde lo fundamental 
              hasta temas especializados en análisis funcional y teoría de operadores.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CoursesHero component error:', error);
    return null;
  }
}