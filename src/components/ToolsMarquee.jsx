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
    <div className="tools-marquee-wrapper">
      <h2 className="tools-marquee-title">Technologies & Outils</h2>
      
      <div className="tools-marquee-container">
        {/* Premier groupe de logos */}
        <div className="tools-marquee-group">
          {logos.map((tool, index) => (
            <div key={`logo-1-${index}`} className="tool-card">
              <img 
                src={tool.icon} 
                alt={tool.name}
                className="tool-icon"
              />
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Duplication pour l'effet infini */}
        <div className="tools-marquee-group" aria-hidden="true">
          {logos.map((tool, index) => (
            <div key={`logo-2-${index}`} className="tool-card">
              <img 
                src={tool.icon} 
                alt={tool.name}
                className="tool-icon"
              />
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
