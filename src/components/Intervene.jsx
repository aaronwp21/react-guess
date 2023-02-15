import React from 'react'
import MyComponent from './MyComponent'

function Intervene(props) {
  return (
    <div>
      <MyComponent {...props} />
    </div>
  )
}

export default Intervene