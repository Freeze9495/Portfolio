import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',           // ✅ Changé de "from_name" à "name"
    user_email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_36kjm1s',
      'template_so0fmm4',
      formData,
      'AnPrrZz3e2_TR703Z'
    )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', user_email: '', message: '' }); // ✅ Changé ici aussi
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error('Erreur EmailJS:', error);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Contactez-moi</h1>
        <p className="contact-subtitle">
          Une question ? Un projet ? N'hésitez pas à me contacter !
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"              // ✅ Changé de "from_name" à "name"
              value={formData.name}    // ✅ Changé ici aussi
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="votre.email@exemple.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message..."
              rows="6"
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
          </button>

          {status === 'success' && (
            <div className="success-message">
              ✅ Message envoyé avec succès !
            </div>
          )}

          {status === 'error' && (
            <div className="error-message">
              ❌ Erreur lors de l'envoi. Réessayez.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
