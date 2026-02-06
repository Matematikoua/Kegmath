function ContactSection() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [status, setStatus] = React.useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('sending');
      
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      }, 1000);
    };

    return (
      <section id="contacto" className="py-20 bg-[var(--surface)]" data-name="contact-section" data-file="components/ContactSection.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-4">Contacto</h2>
            <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto mb-4"></div>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              ¿Tienes alguna pregunta? Contáctame y te responderé a la brevedad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Asunto</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Mensaje</label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                  ></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
                  {status === 'sending' ? 'Enviando...' : status === 'success' ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-mail text-xl text-white"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-[var(--text-secondary)]">kevin.esmeral@ucaldas.edu.co</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-building text-xl text-white"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">Institución</h4>
                    <p className="text-[var(--text-secondary)]">Universidad de Caldas<br/>Departamento de Matemáticas</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-clock text-xl text-white"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">Horario de Atención</h4>
                    <p className="text-[var(--text-secondary)]">Lunes a Viernes<br/>9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ContactSection component error:', error);
    return null;
  }
}
