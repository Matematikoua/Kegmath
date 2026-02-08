function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navigateToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      } else {
        window.location.href = `index.html#${sectionId}`;
      }
    };

    return (
      <header className="bg-white shadow-md sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-40 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="text-[25px] text-white"><math display="block"><mn> &#8750;&kappa;egmath</mn><mi></mi></math></div>
              </div>
              <span className="ml-3 text-xl font-bold text-[var(--primary-color)]">Bienvenidos!</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => navigateToSection('inicio')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Inicio</button>
              <button onClick={() => navigateToSection('sobre-mi')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Sobre Mí</button>
              <a href="research.html" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Investigaciones</a>
              <a href="courses.html" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Cursos</a>
              <a href="Material.html" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Material Didáctico</a>
              <button onClick={() => navigateToSection('tutorias')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Tutorías</button>
              <button onClick={() => navigateToSection('contacto')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Contacto</button>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl text-[var(--primary-color)]`}></div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => navigateToSection('inicio')} className="block w-full text-left py-2 text-[var(--text-primary)] hover:text-[var(--primary-color)]">Inicio</button>
              <button onClick={() => navigateToSection('sobre-mi')} className="block w-full text-left py-2 text-[var(--text-primary)] hover:text-[var(--primary-color)]">Sobre Mí</button>
              <a href="research.html" className="block py-2 text-[var(--text-primary)] hover:text-[var(--primary-color)]">Investigaciones</a>
              <a href="courses.html" className="block py-2 text-[var(--text-primary)] hover:text-[var(--primary-color)]">Cursos</a>
              <button onClick={() => navigateToSection('tutorias')} className="block w-full text-left py-2 text-[var(--text-primary)] hover:text-[var(--primary-color)]">Tutorías</button>
              <button onClick={() => navigateToSection('contacto')} className="block w-full text-left py-2 text-[var(--text-primary)] hover:text-[var(--primary-color)]">Contacto</button>
            </div>
          </div>
        )}
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}