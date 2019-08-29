import React from 'react'

const AtomLink = (props) => {

  const {
    href,
    text,
    target
  } = props;


  return (
    <React.Fragment>
      <a href={ href } target={ target }>{ text }</a>
    </React.Fragment>
  )
}

export default AtomLink;