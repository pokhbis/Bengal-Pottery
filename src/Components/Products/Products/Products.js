import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';

// const products = [
//     {
//         "id": "1",
//         "name": "Pot",
//         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaQARHK8-0eD808dxoo0WwSjKkdBtGp5NP_pxyLvdEj4GkKFSDHDbDEJRbpxvDCGZb48&usqp=CAU",
//         "description": "Pottery is the process and the products of forming vessels and other objects with clay other, which are fired at high temperatures to give them a hard form. Major types include earthenware. ",
//         "price": "200"
//     },
//     {
//         "id": "2",
//         "name": "Jug",
//         "img": "https://www.vtcclaypotindia.com/wp-content/uploads/2019/06/vtc-clay-decorative-items.jpg",
//         "description": "Clay-based pottery can be divided into three main groups: earthenware, stoneware and porcelain. These require increasingly specific clay material,increasingly higher firing temperatures.",
//         "price": "250"
//     },
//     {
//         "id": "3",
//         "name": "Cooking Set",
//         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm16z97qbbvZFTvJPvC_DedPNu9Siv2nsXGzsxW_bYCm7q2JgSSqAliKM8wnKzWBO4uF8&usqp=CAU",
//         "description": "Hand-building: This is the earliest forming method. Wares can be constructed by hand from coils of clay, combining flat slabs of clay, or pinching solid balls of clay of these. ",
//         "price": "400"
//     },
//     {
//         "id": "4",
//         "name": "Water Vessel",
//         "img": "https://t4.ftcdn.net/jpg/02/97/29/37/360_F_297293767_cMAecwxCoBdUxUfXT6Ena5oigaYxqBFI.jpg",
//         "description": "This article reviews several high-quality exercise regimens for men of all experience levels to maximize muscle and strength gains while ensuring adequate recovery.",
//         "price": "150"
//     },
//     {
//         "id": "5",
//         "name": "Home Decoration",
//         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaoUzznDf5rqGJkhElnDiQxKl4v3aTTvwf0vImMyjHGBkWvqt5dqIsnyzgBgv0-VxrLXQ&usqp=CAU",
//         "description": "Firing pottery can be done using a variety of methods, with a kiln being the usual firing method. Both the maximum temperature and the duration of firing influences the of the ceramic.",
//         "price": "300"
//     },
//     {
//         "id": "6",
//         "name": "Decorative Items",
//         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAu9trPMdUrBCNwjhAP1qejZjMXPSU4_8hQ&usqp=CAU",
//         "description": "Mental health in childhood means reaching developmental and emotional milestones, and learning healthy social skills and how to cope when there are problems.",
//         "price": "450"
//     }
// ]




const Products = () => {
    // const [homeProduct, setHomeProduct] = useState({});

    // useEffect(() => {
    //     fetch()

    // }, [])
    //receiving products data from DB
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://hidden-mountain-59218.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // const [orderSuccess, setOrderSuccess] = useState(false);
    return (


        <Box sx={{ flexGrow: 1 }}>
            <Container>
                {/* <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR Products
                </Typography> */}
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Our Collection Of Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product.id}
                            product={product}
                        // setOrderSuccess={setOrderSuccess}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>

    );
};

export default Products;