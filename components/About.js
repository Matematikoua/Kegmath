function About() {
  try {
    return (
      <section id="sobre-mi" className="py-20 bg-[var(--surface)]" data-name="about" data-file="components/About.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-4">Sobre Mí</h2>
            <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src="imagenes/foto-web-2.jpg" 
                   alt="Investigador matemático" 
                   className="rounded-xl shadow-2xl w-full max-w-md" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--primary-color)]">Bienvenidos!</h3>
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                Mi nombre es Kevin Esmeral García, colombiano de nacimiento y Matemático de profesión. 
Actualmente soy docente tiempo completo y el líder del Grupo de Investigación en Estadística y Matemáticas de la Universidad de Caldas, además soy miembro activo del   Grupo de Investigación de Ecuaciones Diferenciales, Modelación y Simulación-GEDMyS, de la Universidad Pedagógica y Tecnológica de Colombia.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-graduation-cap text-xl text-white"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">Formación Académica</h4>
                    <p className="text-[var(--text-secondary)]">Egresado del programa de Matemáticas de la Universidad del Atlántico en Barranquilla, Colombia.  He realizado mis estudios de posgrado en México. Soy Magister en Ciencias Matemáticas del Instituto de Física y Matemáticas (IFM) de la Universidad Michoacana de San Nicolás de Hidalgo y del Centro de Ciencias Matemáticas (CCM) de la Universidad Nacional Autónoma de México (UNAM),    Doctor en Ciencias  en  la especialidad de Matemáticas del Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV-IPN).	</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-award text-xl text-white"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">Experiencia Investigativa</h4>
                    <p className="text-[var(--text-secondary)]">Debido a mi formación matemática las áreas de mi interés son las C*-álgebras, álgebra y teoría de operadores de Toeplitz, Frames y Wavelets. Las investigaciones que he realizado se han enfocado en la descripción explicita de ciertas C*-álgebras conmutativas generadas por  operadores de  Toeplitz y en la descripción del comportamiento de los Frames (marcos)  en espacios con métrica indefinida. 
</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-users text-xl text-white"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">Experiencia docente</h4>
                    <p className="text-[var(--text-secondary)]">He trabajado como docente en diferentes instituciones de educación superior, impartiendo cursos de matemáticas a nivel de pregrado y posgrado. Mi enfoque pedagógico se centra en la claridad conceptual y el desarrollo del pensamiento crítico en mis estudiantes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}