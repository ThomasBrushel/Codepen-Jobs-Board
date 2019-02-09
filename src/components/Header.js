import React from 'react';
import AtomHeading from '../components/AtomHeading';

const Header = (props) => {

  const {
    title
  } = props;

  const HeaderStyles = {
    background: '#333',
    color: 'white',
    padding: '.5em',
    textTransform: 'uppercase',
    marginBottom: '2em'
  }

  return (
    <React.Fragment>
      <header style={ HeaderStyles }>
        <div className="container">
          <AtomHeading text={ title }></AtomHeading>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header;