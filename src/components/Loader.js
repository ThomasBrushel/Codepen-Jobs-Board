import React from 'react';
import spinnerImage from '../images/loading.gif'

console.log(spinnerImage)
const Loader = () => {
  return (
    <div>
      <img src={spinnerImage} />
    </div>
  )
}

export default Loader
