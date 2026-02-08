function CoursesPreview() {
  try {
    const courses = [
      {
        id: 1,
        title: "Cálculo diferencial e integral",
        level: "pregrado",
        duration: "16 semanas",
        icon: <div className="text-[16px] text-white"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi> &#8747;</mi><mn mathvariant="italic">f(x)dx</mn></math></div>,
      },
      {
        id: 2,
        title: "Álgebra Lineal",
        level: "Pregrado",
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
      },
      {
        id: 3,
        title: "Cálculo de Varias Variables",
        level: "Pregrado",
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
      }
    ];

    return (
      <section className="py-20 bg-[var(--surface)]" data-name="courses-preview" data-file="components/CoursesPreview.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-4">Cursos Disponibles</h2>
            <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto mb-4"></div>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Programas académicos diseñados para fortalecer tu formación matemática
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {courses.map(course => (
              <div key={course.id} className="card">
                <div className="w-16 h-16 bg-[var(--secondary-color)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                  <div className={`text-3xl text-[var(--primary-color)] `}><mn>{course.icon}</mn></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--primary-color)]">{course.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-[var(--text-secondary)] flex items-center">
                    <span className="icon-layers text-base mr-2"></span>
                    {course.level}
                  </p>
                  <p className="text-[var(--text-secondary)] flex items-center">
                    <span className="icon-clock text-base mr-2"></span>
                    {course.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="courses.html" className="btn-primary">
              Ver Todos los Cursos
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CoursesPreview component error:', error);
    return null;
  }
}