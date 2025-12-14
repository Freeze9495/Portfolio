export const ToolsMarquee = () => {
  const logos = [
    { src: '/images/icons/figma.png', alt: 'Figma' },
    { src: '/images/icons/photoshop.png', alt: 'Photoshop' },
    { src: '/images/icons/illustrator.png', alt: 'Illustrator' },
    { src: '/images/icons/indesign.png', alt: 'InDesign' },
    { src: '/images/icons/davinci.png', alt: 'DaVinci Resolve' },
    { src: '/images/icons/html.png', alt: 'HTML5' },
    { src: '/images/icons/javascript.png', alt: 'JavaScript' },
    { src: '/images/icons/css.png', alt: 'CSS3' },
    { src: '/images/icons/sql.png', alt: 'SQL' },
    { src: '/images/icons/php.png', alt: 'PHP' }
  ];

  // Dupliquer les logos pour l'effet infini
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logoloop-wrapper">
      <h2 className="logoloop-title">Technologies & Outils</h2>
      
      <div className="logoloop-container">
        <div className="logoloop-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="logoloop-item">
              <img 
                src={logo.src} 
                alt={logo.alt}
                loading="lazy"
                draggable="false"
              />
              <span className="logoloop-label">{logo.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
