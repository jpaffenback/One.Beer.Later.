import React from 'react'

const Marker = props =>(
    <div style={{backgroundColor: 'red', width: '5px', height: '5px'}}>{props.text}</div>
)

export default Marker;