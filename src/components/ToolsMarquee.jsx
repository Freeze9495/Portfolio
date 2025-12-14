import { useEffect, useRef } from 'react';

export const ToolsMarquee = ({ tools }) => {
  const trackRef = useRef(null);
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    const handleMouseEnter = () => track.classList.add('paused');
    const handleMouseLeave = () => track.classList.remove('paused');
    
    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div className="tools-section">
      <h2 className="section-title">Outils du quotidien</h2>
      <div className="tools-marquee">
        <div className="tools-track" ref={trackRef}>
          {[...tools, ...tools].map((tool, index) => (
            <div key={index} className="tool">
              <img src={tool.icon} alt={tool.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
