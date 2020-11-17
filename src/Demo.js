import React from 'react'

function Test(){
    alert("Test")
}

function Demo(){
    return(
        <button onClick={ Test }>Click</button>
    )
}

export default Demo