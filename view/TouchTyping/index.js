import React from 'react'
import SectionHeader from '../../shared/SectionHeader'
import Button from '../../shared/Button'


const TouchTyping = () => {
  return (
    <div className="page touch-typing">
      <div className="page__inner">
      <SectionHeader
         headline="Typing" 
        description= "Learn to Touch Type for free!"
           />
        <Button
         href="https://www.typingclub.com/" 
          buttonText="Click to Login"
         href="https://www.typingclub.com/" 
         buttonText="Click to Sign in" 
          />
      </div>
    </div>
  )
}

export default TouchTyping
