import React, { useState, useEffect } from 'react'
import './App.css'
import ImageWithZoom from './components/Image'

function App() {
    const [rightImage, setRightImage] = useState('')
    const [leftImage,setLeftImage] = useState('')
    const [dimensions, setDimensions] = useState({
        height: 480,
        width: 270
    })
    const [leftImageMoveRight,setleftImageMoveRight] = useState(20)

    function handleLeftImageChange(e){
        e.preventDefault()
        setLeftImage(URL.createObjectURL(e.target.files[0]))
        console.log({e:e.target.files[0]})
    }

    function handleRightImageChange(e){
        e.preventDefault()
        setRightImage(URL.createObjectURL(e.target.files[0]))
        console.log({e:e.target.files[0]})
    }

    function onChangeHeight(e){
        const num = Number(e.target.value)
        if (!isNaN(num)) setDimensions({...dimensions,height:num})
    }
    function onChangeWidth(e){
        const num = Number(e.target.value)
        if (!isNaN(num)) setDimensions({...dimensions,width:num})
    }

    return (
        <div style={styles.page}>
            <div style={{display:'flex', flexDirection:'row'}}>
                <input placeholder={'height'} value={dimensions.height} onChange={onChangeHeight}/>
                <input placeholder={'width'} value={dimensions.width} onChange={onChangeWidth}/>
            </div>
            <div style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
                <div>
                    <ImageWithZoom image={rightImage} width={dimensions.width} height={dimensions.height} move={leftImageMoveRight}/>
                </div>
                <ImageWithZoom image={leftImage} width={dimensions.width} height={dimensions.height} move={-100}/>
            </div>
            <form style={styles.form}>
                <label className="custom-file-upload">
                    <input type="file" onChange={handleRightImageChange} style={styles.rightInput}/>
                    Left Image
                </label>
                <label className="custom-file-upload">
                    <input type="file" onChange={handleLeftImageChange} style={styles.leftInput}/>
                    Right Image
                </label>
            </form>
        </div>
    )
}

export default App

const styles = {
    page:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent: 'center',
    },
    form:{
        display:'flex',
        flexDirection:'row',
        // width: 800,
        justifyContent: 'space-evenly',
    },
    rightInput:{
        // backgroundColor:'red'
    }
}
