import React from 'react'

const AtomHeading = (props) => {

  const {
    text
  } = props;

  return (
    <React.Fragment>
      <h1>{ text }</h1>
    </React.Fragment>
  )
}

export default AtomHeading;