import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { Button } from 'react-bootstrap';
import './product.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Product = ({ product }) => {
    const { name, description, img, price } = product;
    // const { name, description, img } = props.product;

    const { user } = useAuth();
    // const initialInfo = { userName: user.name, email: user.email }
    // const [orderInfo, setOrderInfo] = useState({ initialInfo });
    //sending Purchase Order data to DB
    // const userName = user.name;
    const handlePurchase = () => {
        // console.log(index);
        // const data = tours[index];
        // data.email = email;
        product.status = "panding";
        product.email = user.email;
        product.name = user.name;
        // user.email = email;
        // userName = user.name;
        // userEmail = user.email;
        const orderedProducts = product;

        // const orderedProducts = {
        //     // orderInfo,
        //     product
        // };
        // const orderedProducts = product;
        fetch('https://hidden-mountain-59218.herokuapp.com/orderedProducts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderedProducts),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Congratulation! Order Successfully Placed.')
                }
                //this data will be used to filter out particular person's order by email 
                // console.log(data);
            })


        // e.preventDefault();
    }

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card className="card" sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: '350px', height: '250px', margin: '7px auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: $ {price}
                    </Typography>
                </CardContent>
                {/* <Button className="blog-btn">Purchase</Button> */}
                {user?.email ?
                    <Link to={`/orderedProducts/${product._id}`}>
                        <button className="blog-btn" onClick={() => handlePurchase()}>Purchase</button></Link>
                    :
                    <Link to='/login'>
                        <button className="blog-btn" onClick={() => handlePurchase()}>Purchase</button></Link>}

                {/* <button className="book-btn" onClick={() => handlePurchase(index)}>Book</button> */}
            </Card>
        </Grid>
    );
};

export default Product;