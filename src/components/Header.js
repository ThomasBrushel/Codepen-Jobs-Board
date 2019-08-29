import React from 'react';
import AtomHeading from '../components/AtomHeading';

const Header = (props) => {

  const {
    title
  } = props;

  const headerStyles = {
    background: '#3e4149',
    color: 'white',
    padding: '.5em',
    textTransform: 'uppercase',
    marginBottom: '2em',
    fontSize: '.8em'
  }

  return (
    <React.Fragment>
      <header style={ headerStyles }>
        <div className="container flex-2">
          <AtomHeading text={title}></AtomHeading>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header;