import React from 'react';

const Loader = () => {
    return (
        <div style={styles.loaderContainer}>
            <div style={styles.loader}>
                <div style={styles.loaderCircle}></div>
                <div style={styles.loaderCircle}></div>
                <div style={styles.loaderCircle}></div>
                <div style={styles.loaderShadow}></div>
                <div style={styles.loaderShadow}></div>
                <div style={styles.loaderShadow}></div>
            </div>
            <h2 style={styles.loaderText}>Loading...</h2>
        </div>
    );
};

const styles = {
    loaderContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1a1a2e',
    },
    loader: {
        position: 'relative',
        width: '80px',
        height: '80px',
    },
    loaderCircle: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #ff2e63, #00adb5)',
        position: 'absolute',
        animation: 'spin 1s ease-in-out infinite',
    },
    loaderShadow: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #00adb5, #16213e)',
        position: 'absolute',
        animation: 'spin 1s ease-in-out infinite reverse',
    },
    loaderText: {
        marginTop: '20px',
        fontSize: '18px',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '2px',
        textTransform: 'uppercase',
    },
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    },
};

export default Loader;
