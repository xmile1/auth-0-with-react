import React from  'react'

const ParamTester = (props)=>(
  <div>{props.match.params.param1}</div>
)

export default ParamTester
