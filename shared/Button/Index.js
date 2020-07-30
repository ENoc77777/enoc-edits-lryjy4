import React from 'react'

const Button = ({
  buttonText,
  href
}) => {
  return (
    <p><a href={href} target="_blank" className="button">{buttonText}</a></p>
  )
}

export default Button