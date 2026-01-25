import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <div style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))',
                border: '2px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '20px',
                padding: '3rem 2rem',
                maxWidth: '600px',
                backdropFilter: 'blur(10px)'
            }}>
                <h1 style={{
                    fontSize: 'clamp(4rem, 15vw, 8rem)',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    margin: '0 0 1rem 0',
                    fontWeight: '700',
                    lineHeight: '1'
                }}>
                    404
                </h1>

                <h2 style={{
                    color: 'var(--doré)',
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    marginBottom: '1rem',
                    fontWeight: '600'
                }}>
                    Page introuvable
                </h2>

                <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '1.1rem',
                    marginBottom: '2rem',
                    lineHeight: '1.6'
                }}>
                    Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Link to="/" className="btn">
                        Retour à l'accueil
                    </Link>
                    <Link to="/projets" className="btn btn-outline">
                        Voir les projets
                    </Link>
                </div>
            </div>
        </div>
    );
};
