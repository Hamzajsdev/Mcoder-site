import React from 'react'
import { Grid } from '@mui/material';
import Image from 'next/image';
import android from '../public/images/technology/android.png'
import flutter from '../public/images/technology/flutter.png'
import ionic from '../public/images/technology/ionic.png'
import ios from '../public/images/technology/IOS.png'
import reactNative from '../public/images/technology/react-native.png'

const Mobiletech = () => {
  return (
    <div style={{ textAlign: 'center' }}>
            <Grid container spacing={2}>
                <Grid item lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={android} className='text-img'  />
                        <p className='item-title'>android</p>
                    </div>
                </Grid>
                <Grid lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={flutter} className='text-img' />
                        <p className='item-title'>flutter</p>
                    </div>
                </Grid>
                <Grid lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={ionic} className='text-img' />
                        <p className='item-title'>ionic</p>
                    </div>
                </Grid>
                <Grid lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={ios} className='text-img' />
                        <p className='item-title'>IOS</p>
                    </div>
                </Grid>
                <Grid lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={reactNative} className='text-img' />
                        <p className='item-title'>React Native</p>
                    </div>
                </Grid>

            </Grid>
    </div>
  )
}

export default Mobiletech
