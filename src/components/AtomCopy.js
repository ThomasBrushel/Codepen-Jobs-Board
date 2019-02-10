import React from 'react'

const AtomCopy = (props) => {

  const {
    text
  } = props;

  const copyStyles = {
    fontFamily: 'sans-serif',
    lineHeight: '1.5'
  }

  return (
    <div>
      <p style={copyStyles}>{text}</p>
    </div>
  )
}

export default AtomCopy;