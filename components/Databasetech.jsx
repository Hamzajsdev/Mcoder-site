import React from 'react'
import { Grid } from '@mui/material';
import Image from 'next/image';
import mongoDb from '../public/images/technology/Mongo-DB.png'
import mysql from '../public/images/technology/my-sql.png'
import postgress from '../public/images/technology/postgress.png'

const Databasetech = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Grid container spacing={2}>
                <Grid item lg={2} md={4} xs={6} sm={6}>
                    <div className='gallery-item'>
                        <Image src={mongoDb} className='text-img'  />
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
            </Grid>
        </div>
    )
}

export default Databasetech
