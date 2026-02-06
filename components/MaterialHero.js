function MaterialHero() {
  try {
    return (
      <section className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] text-white py-16" data-name="materialeshero" data-file="components/MaterialHero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Material Didáctico</h1>
            <p className="text-justify text-xl text-blue-100 max-w-3xl mx-auto">
              Soy una persona comprometida con mi trabajo, convencido de que el desarrollo de las ciencias esta en el trabajo
               en equipo y en el  equilibrio de ser un buen investigador que sabe transmitir su conocimiento. 
               Me gustan los desafíos y mi misión es  cumplir los objetivos propuestos. 
               Por tal motivo, a continuación puede encontrar el  material de apoyo para el estudio de las diferentes 
               asignaturas que he podido enseñar a lo largo de mi carrera desde lo fundamental 
              hasta temas especializados en análisis funcional y teoría de operadores.  Algunas han sido creadas 
              junto a mis compañeros y colegas, son borradores, no están es su estado final, no han sido arbitrados, 
              y seguirán siendo actualizados.  Si encuentra errores, le pido por favor comunicármelo al 
              email kevin.esmeral@ucaldas.edu.co, para corregirlos y mejorar el material.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('MaterialHero component error:', error);
    return null;
  }
} 