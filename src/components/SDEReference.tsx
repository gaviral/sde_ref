import React from 'react';
import { Link } from 'react-router-dom';

const SDEReference: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        padding: '40px',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh'
    };

    const headingStyle: React.CSSProperties = {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '40px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
    };

    const listStyle: React.CSSProperties = {
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e9ecef'
    };

    const listItemStyle: React.CSSProperties = {
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6',
        transition: 'all 0.3s ease'
    };

    const linkStyle: React.CSSProperties = {
        display: 'block',
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#007acc',
        textDecoration: 'none',
        padding: '10px 0'
    };

    const descriptionStyle: React.CSSProperties = {
        fontSize: '1rem',
        color: '#6c757d',
        marginTop: '8px',
        lineHeight: '1.5'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>SDE Reference</h1>

            <div style={listStyle}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li
                        style={listItemStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#e3f2fd';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <Link
                            to="/monaco-editor"
                            style={linkStyle}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#005a9e';
                                e.currentTarget.style.textDecoration = 'underline';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#007acc';
                                e.currentTarget.style.textDecoration = 'none';
                            }}
                        >
                            🎯 Monaco Editor Reference
                        </Link>
                        <p style={descriptionStyle}>
                            Comprehensive guide and examples for Monaco Editor React component.
                            Learn all available props, options, and real-world usage patterns with
                            interactive code examples and detailed explanations.
                        </p>
                    </li>

                    {/* Placeholder for future reference items */}
                    <li style={listItemStyle}>
                        <div style={{ ...linkStyle, color: '#6c757d', cursor: 'not-allowed' }}>
                            🚧 More references coming soon...
                        </div>
                        <p style={descriptionStyle}>
                            Additional software development reference materials will be added here.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SDEReference; 