import React from 'react';
import spinnerImage from '../images/loading.gif'

const Loader = () => {
  return (
    <div>
      <img alt="loading spinner" src={spinnerImage} />
    </div>
  )
}

export default Loader
