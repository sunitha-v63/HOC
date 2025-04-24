import React from 'react'

function HOC(wrapped) {
    return function Enhance(props)
{  
  return <wrapped {...props}/>
  

}
}

export default HOC