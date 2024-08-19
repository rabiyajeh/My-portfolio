import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <p style={styles.footerText}>&copy; 2024 Rabbiya Jehangir. All Rights Reserved.</p>
                <div style={styles.socialIcons}>
                    <a href="https://github.com/rabiyajeh" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                        <i className="fab fa-github" style={styles.icon}></i>
                    </a>
                    <a href="https://linkedin.com/in/rabiyajeh" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                        <i className="fab fa-linkedin" style={styles.icon}></i>
                    </a>
                    <a href="https://twitter.com/rabiyajeh" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                        <i className="fab fa-twitter" style={styles.icon}></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        padding: '20px 0',
        textAlign: 'center',
        color: '#fff',
        width: '100%',
    },
    footerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    footerText: {
        margin: '0',
        fontSize: '14px',
    },
    socialIcons: {
        display: 'flex',
        gap: '15px',
    },
    iconLink: {
        color: '#00adb5',
        fontSize: '20px',
        transition: 'color 0.3s ease, transform 0.3s ease',
    },
    icon: {
        fontSize: '20px',
    },
    '@media (max-width: 768px)': {
        footerContent: {
            flexDirection: 'column',
        },
        socialIcons: {
            marginTop: '10px',
        },
    },
    '@media (hover: hover)': {
        iconLink: {
            ':hover': {
                color: '#ff2e63',
                transform: 'scale(1.2)',
            },
        },
    },
};

export default Footer;
