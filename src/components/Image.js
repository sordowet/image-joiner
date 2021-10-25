import React, { useState, useEffect } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Image({image, height, width, move}) {
    const [margin,setMargin] = useState(0)

    useEffect(()=>{
        console.log("--REREnDER--")
    },[margin])

    function handleChange(e){
        e.preventDefault()
        console.log(e.target.value)
        setMargin(Number(e.target.value))
    }
    return (
        <div style={{ width ,height: 'fit-content', border: !image ? 'solid 1px' : 'none', display:'flex', flexDirection:'column', marginBottom:20, marginTop: 20, overflow:'hidden'}}>
            <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <div style={{display:'flex', flexDirection:'column'}}>
                    <TransformComponent>
                        <img src={image} style={{height,width, objectFit: 'scale-down', marginLeft: margin}} />
                    </TransformComponent>
                    <div className="tools">
                        <button onClick={() => zoomIn()}>+</button>
                        <button onClick={() => zoomOut()}>-</button>
                        <button onClick={() => resetTransform()}>x</button>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center' }}>
                        <input type="range" min="-100" max="100" value={margin} class="slider" id="myRange" onChange={handleChange}></input>
                        <button onClick={()=>setMargin(0)}>x</button>
                    </div>
                </div>
                )}
            </TransformWrapper>
        </div>
    );
}
