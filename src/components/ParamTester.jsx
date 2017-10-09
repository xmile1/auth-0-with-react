import React from  'react'

const ParamTester = (props)=> {

  const {isAuthenticated} = props.auth
  return (
  <div>
    { isAuthenticated ? props.match.params.param1 : (<div>Please Login First</div>)}
  </div>)
}

export default ParamTester
