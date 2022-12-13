import React, { useState } from 'react'
import { Grid, CardActionArea, CardMedia,Card, CardContent, Typography } from '@mui/material'
import {styled} from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '10px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '10px',
        },
    },
}))


const Home = () => {
    return (
        <Container>
            <Card>
                <div>
                    {/* <object align="right">
                        <AddToCartButton {...{ amount: 0 }} />
                    </object> */}
                    <h1>WiWi Food App(Capstone)</h1>
                </div>
            </Card>
            <Container>
            <Grid container spacing={5}>
                <Grid container item xs={4} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qWASdBzRKexzs1fApYZBPXHYBujPRaq3mg&usqp=CAU"
                            alt="selfservice image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <b>Mosaic</b>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <a href='/Menu' ><h4>Good food is directly proportional to the good life</h4></a>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>

                <Grid container item xs={4}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvstQOr8Y20vNaRDiF_W0oqq0T7arwoB_51Q&usqp=CAU"
                            alt="selfservice image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <b>Spice Art</b>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <a href='/Menu' ><h4>You made us who we are today, so why we don't serve you the best we can ever have?</h4></a>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>

                <Grid container item xs={4} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oLQU6hR9ylUNoa0ysyrQl3go8RNgWk695g&usqp=CAU"
                            alt="selfservice image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <b>Food Alcholic</b>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <a href='/Menu'><h4 color='black'>Where food speaks with your palate</h4></a>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>
            </Grid>
            </Container>
        </Container>
    );
}
export default Home
