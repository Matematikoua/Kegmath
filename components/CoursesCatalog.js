function CoursesCatalog() {
  try {
    const courses = [
     {
        id: 1,
        title: "Matemáticas Básicas",
        level: "Básico",
        duration: "16 semanas",
        icon: <div className="text-[9px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi>
    <mo>=</mo>
    <mfrac>
        <mrow>
            <mo form="prefix">−</mo> <mi>b</mi> <mo>±</mo>
            <msqrt>
                <msup> <mi>b</mi> <mn>2</mn> </msup>
                <mo>−</mo>
                <mn>4</mn> <mo>&#8290;</mo> <mi>a</mi> <mo>&#8290;</mo> <mi>c</mi>
            </msqrt>
        </mrow>
        <mrow>
            <mn>2</mn> <mo>&#8290;</mo> <mi>a</mi>
        </mrow>
    </mfrac></math></div>,
        url: "https://classroom.google.com/c/MzU5NjU0MjA1NzA1?cjc=xyz123",
        description: "Aritmética, álgebra básica, geometría elemental y Funciones"
      },
      {
        id: 2,
        title: "Cálculo Diferencial",
        level: "Intermedio",
        duration: "16 semanas",
        icon: <div className="text-[14px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
        <mi>f</mi>
        <mo>′</mo>
        <mi>(x)</mi>
        <mo>=</mo>
        <mfrac>
            <mrow>
                <mi>d</mi>
                <mi>f</mi>
            </mrow>
            <mrow>
                <mi>d</mi>
                <mi>x</mi>
            </mrow>
        </mfrac>
    </mrow>
</math></div>,
        url: "https://drive.google.com/file/d/1MWjGveuiS_9damw26ypHAPk1c3sfS3kV/view?usp=sharing",
        description: "Límites, derivadas, aplicaciones de la derivada y optimización"
      },
      {
        id: 3,
        title: "Cálculo Integral",
        level: "Intermedio",
        duration: "12 semanas",
        icon: <div className="text-[18px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi> &#8747;</mi><mi>f(</mi><mi>x</mi><mi>)d</mi><mi>x</mi></math></div>,
        url: "calculointegral.html",
        description: "Integrales definidas e indefinidas, técnicas de integración y aplicaciones"
      },
      {
        id: 4,
        title: "Cálculo en varias variables",
        level: "Intermedio",
        duration: "16 semanas",
        icon: <div className="text-[20px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
        
        <mfrac>
            <mrow>
                <mi>&#8706;</mi>
                <mi>f</mi>
            </mrow>
            <mrow>
                <mi>&#8706;</mi>
                <mi>x&#8706;y</mi>
            </mrow>
        </mfrac>
    </mrow>
</math></div>,
        url: "https://drive.google.com/file/d/1fV27MztINkgmRIzYaqPj0kvU_7gUKXMv/view?usp=sharing",
        description: "Límites, derivadas, aplicaciones de la derivada y optimización para funciones de varias variables"
      },
      {
        id: 5,
        title: "Ecuaciones Diferenciales Ordinarias",
        level: "Intermedio",
        duration: "16 semanas",
        icon: <div className="text-[20px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
        
        <mfrac>
            <mrow>
                <mi>d</mi>
                <mi>y</mi>
            </mrow>
            <mrow>
                <mi>d</mi>
                <mi>x</mi>
            </mrow>
        </mfrac>
        <mo>=</mo>
        <mfrac>
            <mrow>
                <mi>y</mi>
            </mrow>
            <mrow>
                <mi>x</mi>
            </mrow>
        </mfrac>
    </mrow>
</math></div>,
        url: "https://drive.google.com/file/d/19MjB1JuCSVMzYbF3bo2Dprc9TFrCUtND/view?usp=sharing",
        description: "EDOs de primer y segundo orden, transformada de Laplace, sistemas lineales y métodos numéricos"
      },
      {
        id: 6,
        title: "Álgebra Lineal",
        level: "Intermedio",
        duration: "16 semanas",
        icon: <div className="text-[10px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML">
   <mfenced open="(" close=")">
    <mtable>
      <mtr>
        <mtd>a</mtd>
        <mtd>b</mtd>
        <mtd>c</mtd>
      </mtr>
      <mtr>
        <mtd>e</mtd>
        <mtd>a</mtd>
        <mtd>b</mtd>
      </mtr>
      <mtr>
        <mtd>t</mtd>
        <mtd>e</mtd>
        <mtd>a</mtd>
      </mtr>
    </mtable>
  </mfenced>
</math></div>,
        url: "https://drive.google.com/file/d/1AglcgMnKJqdwKeRQ6-duoZGKcy3azbjZ/view?usp=sharing",
        description: "Espacios vectoriales, matrices, determinantes y transformaciones lineales"
      },
      {
        id: 7,
        title: "Variable Compleja",
        level: "Avanzado",
        duration: "14 semanas",
        icon: <div className="text-[20px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>x</mi><mo>+</mo><mi>i</mi><mi>y</mi></mrow></math></div>,
        url: "https://classroom.google.com/c/MzU5NjU0MjA1NzA1?cjc=xyz123",
        description: "Funciones complejas, series de Taylor, residuos y teorema de Cauchy"
      },
      {
        id: 8,
        title: "Teoría de Integración de Riemann-Stieltjes",
        level: "Avanzado",
        duration: "16 semanas",
        icon: <div className="text-[20px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn> &#8747;&kappa;d&#945;</mn></math></div>,
        url: "https://drive.google.com/file/d/1V4FhQkZYn9eQlV6mQOrGA6ndYEz8Apyc/view",
        description: "Integral de Riemann-Stieltjes, propiedades y aplicaciones en análisis"
      },
      {
        id: 9,
        title: "Análisis Funcional y Teoría de Operadores",
        level: "Avanzado",
        duration: "16 semanas",
        icon: <div className="text-[20px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>&#8721;</mi><mi>&#8739;&#8739;</mi><msub><mi>x</mi><mn>n</mn></msub><mi>&#8739;&#8739;</mi></mrow></math></div>,
        url: "Courses.html",
        description: "Espacios de Banach y Hilbert, operadores lineales y teoría espectral"
      },
      {
        id: 10,
        title: "Teoría de la Medida",
        level: "Avanzado",
        duration: "16 semanas",
        icon: <div className="text-[22px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn> &#8747;&kappa;d&#956;</mn></math></div>,
        url: "https://editorial.uptc.edu.co/gpd-notas-de-clase-9789586608435-664d06a5e6af2.html",
        description: "Espacios de medida, integración de Lebesgue y teoremas de convergencia"
      },
      {
        id: 11,
        title: "Teoría de Operadores en Espacios de Funciones Analíticas",
        level: "Especialización",
        duration: "16 semanas",
        icon: <div className="text-[20px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#8750;</mi><mi>f(z)dz</mi></math></div>,
        url: "https://drive.google.com/file/d/1PqvxyjBFd6EL0GmaBmHRzgNPJGjE99BN/view?usp=sharing",
        description: "Operadores de composición, multiplicación en espacios de Hardy y Bergman"
      },
      {
        id: 12,
        title: "C*-Álgebras",
        level: "Especialización",
        duration: "16 semanas",
        icon: <div className="text-[12px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>&#8739;&#8739;</mi> <mi>x</mi><mi>x</mi><mi>&#8739;&#8739;=</mi> <mi>&#8739;&#8739;</mi><mi>x</mi><msup><mi>&#8739;&#8739;</mi> <mn>2</mn> </msup></mrow></math></div>,
        url: "Courses.html",
        description: "Fundamentos de C*-álgebras, representaciones y aplicaciones"
      }
    ];

    const getLevelColor = (level) => {
      switch(level) {
        case 'Básico': return 'bg-green-100 text-green-700';
        case 'Intermedio': return 'bg-blue-100 text-blue-700';
        case 'Avanzado': return 'bg-purple-100 text-purple-700';
        case 'Especialización': return 'bg-red-100 text-red-700';
        default: return 'bg-gray-100 text-gray-700';
      }
    };

    return (
      <section className="py-20 bg-white" data-name="courses-catalog" data-file="components/CoursesCatalog.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <div key={course.id} className="card">
                <div className="w-20 h-20 bg-[var(--secondary-color)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                  <div className={`text-3xl text-[var(--primary-color)] `}><mn>{course.icon}</mn></div>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
                <h3 className="text-xl font-bold mb-3 text-[var(--primary-color)]">{course.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4 text-sm">{course.description}</p>
                <div className="flex items-center text-sm text-[var(--text-secondary)] mb-4">
                  <div className="icon-clock text-base mr-2"></div>
                  {course.duration}
                </div>
                <a href="index.html#contacto" className="btn-primary w-full text-center">
                  Solicitar Información
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CoursesCatalog component error:', error);
    return null;
  }
}