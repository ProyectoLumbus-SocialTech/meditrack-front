import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg 
                hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 
                disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;
