import React from 'react'
import photo from '../assets/get.jpg'
import { Button } from './Button'

const GetInTouch = () => {
  return (
    <div className='contact-section'>
        <img src={photo}/>
        <div className='contact-right-section'>
            <h3 style={{color:"black", fontWeight:"700", fontSize:"32px"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
            </h3>
            <p style={{color:"grey"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
            </p>
            <Button borderRadius={"5px"} backgroundColor={"#1c4ed8"} fontColor={"#FFFFFF"}>Get In Touch</Button>
                        
        </div>
    </div>
  )
}

export default GetInTouch