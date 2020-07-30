import React from 'react'
import SectionHeader from '../../shared/SectionHeader'
import Button from '../../shared/Button'


const WPMCPM= () => {
  return (
    <div className="page wpcpm">
      <div className="page__inner">
      <SectionHeader
        headline="WPM Converter"
        discription="what you need to do"
        discription="just put the number into the box when you get to the website" 
        />

       

        <Buttton 
        href="https://keyboard-racing.com/wpm_cpm_converter.html" 
        buttonText="Link to the Website"
        />
      </div>
    </div>
  )
}

export default WPMCPM