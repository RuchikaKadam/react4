import React from 'react'
import {Button} from './Button'
import './Button'

export const Hero = () => { 
  return (
<>
<section className='heroSection'>
                <div className='right-text'>
                    <h2 style={{color:"black"}}>Let us find your </h2>
                    <h2 style={{color:"blue"}}> Forever Food.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <div style={{display:"flex", gap:"1rem"}}>
                        <Button borderRadius={"5px"} backgroundColor={"#1c4ed8"} fontColor={"#FFFFFF"}>Search Now</Button>
                        <Button borderRadius={"5px"} backgroundColor={"#FFFFFF"} fontColor={"#1c4ed8"}>Know More</Button>
                    </div>
                </div>
</section>
</>
  )
}

export default Hero;