import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', href, onClick, ...props }) => {
    const className = `btn btn-${variant}`;

    if (href) {
        return (
            <a href={href} className={className} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={className} {...props}>
            {children}
        </button>
    );
};

export default Button;
