import React from 'react'

import './button.scss'

interface ButtonProps {
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({children}) => {
    return (
        <div className="btn">
            {children}
        </div>
    )
}

export default Button
