import React from 'react'
import SectionHeader from '../../shared/SectionHeader'
import Button from '../../shared/Button'


const Coding = () => {
  return (
    <div className="page coding">
      <div className="page__inner">
      <SectionHeader
        headline="Learning How to Code"
        discription="Start learning the basics of Web Development!"
         />
         <Button 
        href="https://www.w3schools.com/tags/default.asp"
         buttonText="Make your own Web"
         />
      </div>
    </div>
  )
}

export default Coding