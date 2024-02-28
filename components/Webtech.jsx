import React from 'react'
import { Grid } from '@mui/material';
import Image from 'next/image';
import net5 from '../public/images/technology/net-5.png'
import angular from '../public/images/technology/angularjs.png'
import html from '../public/images/technology/html.png'
import bootstrap from '../public/images/technology/bootstrap-5.png'
import codeigniter from '../public/images/technology/codeigniter.png'
import laravel from '../public/images/technology/laravel.png'
import php from '../public/images/technology/php.png'
import react from '../public/images/technology/react-JS.png'
import tailwind from '../public/images/technology/tailwind.png'
import vue from '../public/images/technology/vuejs.png'
import nuxtjs from '../public/images/technology/nuxtjs.png'
import wordpress from '../public/images/technology/wordpress.png'



const Webtech = () => {
  return (
    <div>
       <div style={{ textAlign: 'center' }}>
            <Grid container spacing={2}>
                <Grid item lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={net5} className='text-img' />
                        <p className='item-title'>Python</p>
                    </div>
                </Grid>
                <Grid lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={angular} className='text-img' />
                        <p className='item-title'>Angular Js</p>
                    </div>
                </Grid>
                <Grid lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={html} className='text-img' />
                        <p className='item-title'>Html</p>
                    </div>
                </Grid>
                <Grid lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={bootstrap} className='text-img' />
                        <p className='item-title'>bootstrap 5</p>
                    </div>
                </Grid>
                <Grid lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={codeigniter} className='text-img' />
                        <p className='item-title'>Codeigniter</p>
                    </div>
                </Grid>
                <Grid lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={laravel} className='text-img' />
                        <p className='item-title'>Laravel</p>
                    </div>
                </Grid>

            </Grid>


            <div className='second-section'>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={php} className='text-img' />
                            <p className='item-title'>php</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={react} className='text-img' />
                            <p className='item-title'>React js</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={tailwind} className='text-img' />
                            <p className='item-title'>tailwind</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={vue} className='text-img' />
                            <p className='item-title'>Vue JS</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={nuxtjs} className='text-img' />
                            <p className='item-title'>nuxt JS</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={wordpress} className='text-img' />
                            <p className='item-title'>wordpress</p>
                        </div>
                    </Grid>

                </Grid>
            </div>

       
        </div>
    </div>
  )
}

export default Webtech
