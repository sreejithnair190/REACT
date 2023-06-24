import React from 'react'
import './../../assets/scss/button.scss'

const Button = ({children, buttonType, ...buttonProps}) => {
  return (
    <button className={`button-container ${buttonType}`} {...buttonProps}>
        {children}
    </button>
  )
}

export default Button;