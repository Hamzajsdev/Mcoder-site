"use client"
import React from 'react';
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import sliderImg from '../public/images/clientImg/sliderImg.jpg'
import academic from '../public/images/clientImg/academic.jpg'
import care from '../public/images/clientImg/care.jpg'



const CarouselSlider = () => {
    
const images = [
    sliderImg,
    academic,
    care,
  ];
  return (
    <div>
      <Carousel indicators={false}>
        {images.map((image, index) => (
          <Paper key={index}>
            <Image src={image} alt={`Image ${index}`} className="sliderImg" />
          </Paper>  
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselSlider
