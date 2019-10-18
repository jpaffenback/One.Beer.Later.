import React from 'react'

const Marker = props =>(
    <div style={{backgroundColor: 'red', width: '8px', height: '8px'}}>{props.text}</div>
)

export default Marker;