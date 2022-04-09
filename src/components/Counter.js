import React from 'react'
import { Connect } from 'react-redux'

const Counter = ({count}) => {
  return (
    <div>{count}</div>
  )
}


function mapStateToProps (state) {
    return {
        count: state.count
    }
}

export default Connect(mapStateToProps)(Counter);