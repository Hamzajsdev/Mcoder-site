import React from 'react'
import { Grid } from '@mui/material';
import Image from 'next/image';
import aws from '../public/images/technology/aws.png'
import Cpanel from '../public/images/technology/Cpanel.png'
import linux from '../public/images/technology/linux-server.png'
import git from '../public/images/technology/git.png'
import illustrator from '../public/images/technology/illustrator.png'
import photoshop from '../public/images/technology/photoshop-icon.png'


const Othertech = () => {
  return (
    <div style={{ textAlign: 'center' }}>
    <Grid container spacing={2}>
        <Grid item lg={2} md={4} xs={6} sm={6}>
            <div className='gallery-item'>
                <Image src={aws} className='text-img'  />
                <p className='item-title'>Aws</p>
            </div>
        </Grid>
        <Grid lg={2} md={4} xs={6} sm={6}>
            <div className='gallery-item'>
                <Image src={Cpanel} className='text-img' />
                <p className='item-title'>Cpanel</p>
            </div>
        </Grid>
        <Grid lg={2} md={4} xs={6} sm={6}>
            <div className='gallery-item'>
                <Image src={git} className='text-img' />
                <p className='item-title'>git</p>
            </div>
        </Grid>
        <Grid lg={2} md={4} xs={6} sm={6}>
            <div className='gallery-item'>
                <Image src={illustrator} className='text-img' />
                <p className='item-title'>illustrator</p>
            </div>
        </Grid>
        <Grid lg={2} md={4} xs={6} sm={6}>
            <div className='gallery-item'>
                <Image src={photoshop} className='text-img' />
                <p className='item-title'>photoshop</p>
            </div>
        </Grid>
        <Grid lg={2} md={4} xs={6} sm={6}>
            <div className='gallery-item'>
                <Image src={linux} className='text-img' />
                <p className='item-title'>Linux</p>
            </div>
        </Grid>
    </Grid>
</div>
  )
}

export default Othertech
