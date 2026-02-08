function Footer() {
  try {
    return (
      <footer className="bg-[var(--primary-color)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-40 h-10 bg-white rounded-lg flex items-center justify-center">
                  <div className=" text-xl text-[var(--primary-color)]"><math display="block"><mn> &#8750;&kappa;egmath</mn><mi></mi></math></div>
                </div>
                <span className="ml-3 text-xl font-bold">Esmeral García, kevin Ph.D.</span>
              </div>
              <p className="text-blue-100">
                Investigación matemática de excelencia y educación personalizada
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Navegación</h4>
              <ul className="space-y-2">
                <li><a href="index.html" className="text-blue-100 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="research.html" className="text-blue-100 hover:text-white transition-colors">Investigaciones</a></li>
                <li><a href="courses.html" className="text-blue-100 hover:text-white transition-colors">Cursos</a></li>
                <li><a href="index.html#contacto" className="text-blue-100 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="https://www.scopus.com/authid/detail.uri?authorId=56458921800" className="text-blue-100 hover:text-white transition-colors">Publicaciones</a></li>
                <li><a href="Material.html" className="text-blue-100 hover:text-white transition-colors">Material Didáctico</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Blog</a></li>
                <li><a href="index.html#contacto" className="text-blue-100 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Sígueme en mis redes sociales académicas</h4>
              <div className="flex space-x-4">
                <a href="https://www.scopus.com/authid/detail.uri?authorId=56458921800" className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all">
                  <div className="text-xl"><div className="image-container">
                <img src= 'imagenes/logo-scopus.png' alt="Imagen logo scopus" />
                </div></div>
                </a>
                <a href="https://orcid.org/0000-0003-1147-4730" className="w-10 h-8 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all">
                  <div className="text-xl"><div className="image-container">
                  <img src= 'imagenes/logo-orcid.png' alt="Imagen logo orcid" />
                  </div></div>
                </a>
                <a href="https://www.researchgate.net/profile/Kevin-Esmeral-Garcia" className="w-9 h-9 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all">
                  <div className="text-xl"><div className="image-container">
            <img src= 'imagenes/logo-researchgate.png' alt="Imagen logo researchgate" />
        </div></div>
                </a>
                <a href="https://arxiv.org/search/math?searchtype=author&query=Esmeral,+K" className="w-12 h-6 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all">
                  <div className="text-xl"><div className="image-container">
            <img src= 'imagenes/logo-arxiv.png' alt="Imagen logo arxiv" />
        </div></div>
                </a>
              </div>
              
              <div className="flex space-x-4"> 
                <a href="https://scholar.google.com.mx/citations?user=04o6GMcAAAAJ&hl=es" className="w-12 h-6 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all">
                  <div className="text-xl"><div className="image-container">
            <img src= 'imagenes/logo-google-acad.png' alt="Imagen logo google acad" />
        </div></div>
                </a>
                <a href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001279297" className="w-12 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all">
                  <div className="text-xl"><div className="image-container">
            <img src= 'imagenes/logo-cvlac.png' alt="Imagen logo cvlac" />
        </div></div>
                </a>
                <a href="https://www.mendeley.com/search/?page=1&query=kevin%20esmeral&sortBy=relevance" className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all">
                  <div className="text-xl"><div className="image-container">
            <img src= 'imagenes/logo-mendeley.png' alt="Imagen logo mendeley" />
        </div></div>
                </a>
                <a href="https://www.genealogy.math.ndsu.nodak.edu/id.php?id=207176" className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all">
                  <div className="text-xl"><div className="image-container">
            <img src= 'imagenes/tree-small.gif' alt="Imagen logo tree" />
        </div></div>
                </a>
                </div>
            </div>
          </div>

          <div className="border-t border-blue-400 border-opacity-30 pt-8 text-center text-blue-100">
            <p>&copy; 2025 matematikoua. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}