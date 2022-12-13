import React, { useState } from 'react'
import { styled } from '@mui/system'
// import { AddToCartButton, SimpleCard } from 'components'

import { Icon, Typography, Card, Container, Badge } from '@mui/material';
import { Box, Grid, Divider, } from '@mui/material';

import Button from '@mui/material/Button';
import axios from 'axios'
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import ToppingsDialog from './ToppingsDialog';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuList, fetchToppingsList } from './store/menu.actions';
import { useNavigate } from 'react-router-dom'




const myStyle = {
    backgroundImage:
        "url('https://traveljingles.com/wp-content/uploads/2022/08/food.jpeg')",
    height: '100%',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};



const Menu = () => {
    const [activeToppings, setActiveToppings] = useState([]);
    const [open, setOpen] = useState(false);
    const menu1 = useSelector((state) => state.menu.menu);
    const toppings = useSelector((state) => state.menu.toppings);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [totalCount,setTotalCount] = useSelector((state) => state.cart.totalCount)
    const [totalCount,setTotalCount] = useState(0);
    
    const handleAdd=(menu)=>{
        setTotalCount(Math.max(totalCount+1))
        console.log("test",menu)
    }

    const handleOpen = (toppings) => {
        setOpen(true);
        setActiveToppings(toppings);
    }
    const handleClose = () => setOpen(false);
    useEffect(() => {
        dispatch(fetchMenuList());
    }, [])
    useEffect(() => {
        dispatch(fetchToppingsList());
    },[])
    return (
        <div>
            <Card style={{ backgroundColor: 'skyblue', color: 'white' }}>
                <section style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <h1>WiWi Food App(Capstone)</h1>
                    <Button size='large' color='inherit'  onClick={() => navigate("/Cart")}>
                        <Badge variant='contained' badgeContent={totalCount} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                        <h3>Cart</h3>
                    </Button>
                </section>
            </Card>
            <Container fixed sx={{ backgroundImage: "url('https://traveljingles.com/wp-content/uploads/2022/08/food.jpeg')", width: '100%', height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Card style={{ width: 650, height: 100, backgroundColor: 'lightskyblue', justifyContent: 'center', margin: '20px 310px 20px 20px', marginLeft: '240px', padding: '10px 20px 10px 10px' }}>
                    <Typography sx={{ fontSize: 20, textAlign: 'center', fontWeight: '500', color: 'white' }}>
                        Good food,Great time
                    </Typography>
                    <Typography sx={{ fontSize: 15, paddingTop: 2, paddingLeft: 1, color: 'white' }}>
                        Our chefs at WiWi make delicious food selections every week-you pick,we cook and deliver.
                    </Typography>
                </Card>
                {menu1.map((m,id) => {
                    return (
                        <Box sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper', padding: '10px 20px 10px 10px', marginLeft: '70px' }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography variant='h5'>
                                        {m.itemname}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>
                                        Amount {"  "}<TextField variant="outlined" size='small' sx={{ width: '100px' }} type={'number'} />
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Typography color="text.secondary" variant="body2">
                                    <i>{m.itemdesc}</i>
                                </Typography>
                                <section style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '20px' }}>
                                    <Typography variant='h6'>
                                        ${m.price} {"  "}
                                        <Button variant='contained' onClick={() => handleOpen(toppings)} size='small' >+toppings</Button>
                                    </Typography>
                                    <Button variant='contained' size='small' onClick={handleAdd} >+Add</Button>
                                </section>
                            </Grid>
                            <Divider variant="middle" />
                        </Box>
                    )
                })}
                <Typography variant="h6" component="h2">
                    <ToppingsDialog
                        open={open}
                        handleClose={handleClose}
                        toppings={activeToppings}
                    />
                </Typography>
            </Container>
        </div>
    );
}
export default Menu
