import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
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
    )  // ✅ Parenthèse fermante ajoutée ici !
    .then(() => {
      setStatus('success');
      setFormData({ from_name: '', user_email: '', message: '' });
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
      <div className="container">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle">N'hésitez pas à me contacter pour discuter de vos projets</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="from_name">Nom</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
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
              required
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Votre message..."
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
          </button>

          {status === 'success' && (
            <p className="success-message">✅ Message envoyé avec succès !</p>
          )}
          {status === 'error' && (
            <p className="error-message">❌ Erreur lors de l'envoi. Réessayez.</p>
          )}
        </form>
      </div>
    </section>
  );
};
