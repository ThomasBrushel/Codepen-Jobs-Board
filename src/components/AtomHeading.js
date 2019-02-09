import React from 'react'

const AtomHeading = (props) => {

  const {
    text
  } = props;

  const HeadingStyles = {
    margin: '0'
  }

  return (
    <React.Fragment>
      <h1 style={HeadingStyles}>{ text }</h1>
    </React.Fragment>
  )
}

export default AtomHeading;