import React from 'react'

const AtomLink = (props) => {

  const {
    href,
    text,
    target
  } = props;

  const btnClasses = {
    background: '#fd999a',
    padding: '.7em 2em',
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    borderRadius: '1.5em',
    lineHeight: '1.5'
  }

  return (
    <React.Fragment>
      <a href={ href } target={ target } style={btnClasses}>{ text }</a>
    </React.Fragment>
  )
}

export default AtomLink;