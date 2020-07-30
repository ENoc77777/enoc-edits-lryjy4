import React from 'react'

const SectionHeader = ({
  headline,
  description,
}) => {
  return (
    <>
      <h1>{headline}</h1>
      <p>{description}</p>
    </>
  )
}

export default SectionHeader