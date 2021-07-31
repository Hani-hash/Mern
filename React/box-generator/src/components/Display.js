import React from 'react'

function Display(props) {
    return (
        <div>
            {props.box.map((i)=> <div style = {{background: i.Color, width: i.width+"px", height: i.height+"px" }} > </div>)}
        </div>
    )
}

export default Display
