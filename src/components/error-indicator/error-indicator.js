import React from 'react'

import './error-indicator.css';
import icon from './death-star.png'

const ErrorIndicator = () => {
    return (
        <div class="error-indicator">
            <img src={icon} alt="error icon"/>
            <span class="boom">BOOM!</span>
            <span>
                somthing has gone terribly wrong
            </span>
            <span>
                (but we alredy sent droids to fix it)
            </span>
            
        </div>
    );
}

export default ErrorIndicator;
