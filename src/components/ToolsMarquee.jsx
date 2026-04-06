export const ToolsMarquee = () => {
  const logos = [
    { name: 'Figma', icon: '/images/icons/figma.png' },
    { name: 'Photoshop', icon: '/images/icons/photoshop.png' },
    { name: 'Illustrator', icon: '/images/icons/illustrator.png' },
    { name: 'InDesign', icon: '/images/icons/indesign.png' },
    { name: 'DaVinci Resolve', icon: '/images/icons/davinci.png' },
    { name: 'HTML5', icon: '/images/icons/html.png' },
    { name: 'JavaScript', icon: '/images/icons/javascript.png' },
    { name: 'CSS3', icon: '/images/icons/css.png' },
    { name: 'SQL', icon: '/images/icons/sql.png' },
    { name: 'PHP', icon: '/images/icons/php.png' }
  ];

  return (
    <section className="tools-section">
      <h2 className="tools-section-title">Technologies & Outils</h2>

      <div className="tools-marquee-wrapper">
        <div className="tools-marquee-container">
          <div className="tools-marquee-group">
            {logos.map((tool, index) => (
              <div key={`logo-1-${index}`} className="tool-card">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="tool-icon"
                  loading="lazy"
                />
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>

          {/* Duplication for infinite scroll */}
          <div className="tools-marquee-group" aria-hidden="true">
            {logos.map((tool, index) => (
              <div key={`logo-2-${index}`} className="tool-card">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="tool-icon"
                  loading="lazy"
                />
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
