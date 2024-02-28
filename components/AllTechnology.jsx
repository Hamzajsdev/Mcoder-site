import React from 'react'
import { Grid } from '@mui/material';
import Image from 'next/image';
import android from '../public/images/technology/android.png'
import flutter from '../public/images/technology/flutter.png'
import ionic from '../public/images/technology/ionic.png'
import ios from '../public/images/technology/IOS.png'
import net5 from '../public/images/technology/net-5.png'
import reactNative from '../public/images/technology/react-native.png'
import bootstrap from '../public/images/technology/bootstrap-5.png'
import codeigniter from '../public/images/technology/codeigniter.png'
import laravel from '../public/images/technology/laravel.png'
import php from '../public/images/technology/php.png'
import react from '../public/images/technology/react-JS.png'
import tailwind from '../public/images/technology/tailwind.png'
import mongoDb from '../public/images/technology/Mongo-DB.png'
import mysql from '../public/images/technology/my-sql.png'
import postgress from '../public/images/technology/postgress.png'
import aws from '../public/images/technology/aws.png'
import html from '../public/images/technology/html.png'
import angular from '../public/images/technology/angularjs.png'
import vue from '../public/images/technology/vuejs.png'
import nuxtjs from '../public/images/technology/nuxtjs.png'
import wordpress from '../public/images/technology/wordpress.png'
import Cpanel from '../public/images/technology/Cpanel.png'
import git from '../public/images/technology/git.png'
import illustrator from '../public/images/technology/illustrator.png'
import photoshop from '../public/images/technology/photoshop-icon.png'
import linux from '../public/images/technology/linux-server.png'






const AllTechnology = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Grid container spacing={2}>
                <Grid item lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={android} className='text-img' />
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
                        <Image src={net5} className='text-img' />
                        <p className='item-title'>Python</p>
                    </div>
                </Grid>
                <Grid lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={reactNative} className='text-img' />
                        <p className='item-title'>React Native</p>
                    </div>
                </Grid>

            </Grid>

            <div className='second-section'>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={mongoDb} className='text-img' />
                            <p className='item-title'>Mongo DB</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={mysql} className='text-img' />
                            <p className='item-title'>MySql</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={postgress} className='text-img' />
                            <p className='item-title'>postgresql</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={aws} className='text-img' />
                            <p className='item-title'>Aws</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={angular} className='text-img' />
                            <p className='item-title'>Angular JS</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={html} className='text-img' />
                            <p className='item-title'>Html</p>
                        </div>
                    </Grid>

                </Grid>
            </div>

            <div className='second-section'>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={bootstrap} className='text-img' />
                            <p className='item-title'>bootstrap 5</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={codeigniter} className='text-img' />
                            <p className='item-title'>codeigniter</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={laravel} className='text-img' />
                            <p className='item-title'>Laravel</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={php} className='text-img' />
                            <p className='item-title'>Php</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={react} className='text-img' />
                            <p className='item-title'>React JS</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={tailwind} className='text-img' />
                            <p className='item-title'>Tailwind</p>
                        </div>
                    </Grid>

                </Grid>
            </div>

            <div className='second-section'>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={vue} className='text-img' />
                            <p className='item-title'>Vue js</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={nuxtjs} className='text-img' />
                            <p className='item-title'>nuxt js</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={wordpress} className='text-img' />
                            <p className='item-title'>Wordpress</p>
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
                            <p className='item-title'>Illustrator</p>
                        </div>
                    </Grid>

                </Grid>
            </div>

            <div className='second-section'>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={photoshop} className='text-img' />
                            <p className='item-title'>Photoshop</p>
                        </div>
                    </Grid>
                    <Grid lg={2} md={4} xs={6} sm={6}>
                        <div className='gallery-item'>
                            <Image src={linux} className='text-img' />
                            <p className='item-title'>Linux server</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default AllTechnology
