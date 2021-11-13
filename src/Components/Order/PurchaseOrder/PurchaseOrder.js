import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './PurchaseOrder.css';

const PurchaseOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data)
        data.email = user.email;
        fetch('https://hidden-mountain-59218.herokuapp.com/orderedProducts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                // if (data.insertedId) {
                //     alert('Congratulation! Order Successfully Placed.')

                // }
                //this data will be used to filter out particular person's order by email 
                // console.log(data);
            })

    };


    const handlePurchasedorder = () => {
        alert('Congratulation! Order Successfully Placed.')
        history.push('./orderSuccess');
    }


    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://hidden-mountain-59218.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then((data) => setProduct(data));
    }, []);

    return (
        <div>
            <h4 className="order-hearder">Provide Your Info To Complete Purchasing</h4>

            <div className="booking-container mt-5">
                <div className="row container">
                    <div className="col-md-6">
                        <h5 className="why-text mb-3"> Item Details</h5>
                        <div>-------------------</div>
                        {/* <div className="details-img">
                            <h3 > <span className="why-text">Item Image:</span>  </h3> <img className="w-75" src={product?.image} alt="" />
                        </div> */}
                        <h2> <span className="why-text">Item Name: </span> {product?.name}</h2>
                        <p className=""><span className="why-text"> Item Details: </span>{product?.description}</p>
                        <h1><span className="why-text"> Price:</span> {product?.price} $</h1>

                    </div>
                    <div className="col-md-6">
                        <h1 className="why-text">Place Order</h1>
                        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                            <input
                                {...register("name")}
                                defaultValue={user.displayName}
                                className="p-2 m-2 w-25"
                            />
                            <br />
                            <input
                                {...register("email")}
                                defaultValue={user.email}
                                className="p-2 m-2 w-25"
                            />
                            <br />
                            {/* <input
                                {...register("name")}
                                defaultValue="Comment"
                                className="p-2 m-2 w-25"
                            />
                            <br /> */}
                            <input
                                {...register("address")}
                                placeholder="Address"
                                // className="p-2 m-2"
                                className="p-2 m-2 w-25"
                            />
                            <br />

                            <input
                                {...register("phone", { required: true })}
                                placeholder="Phone"
                                // className="p-2 m-2"
                                className="p-2 m-2 w-25"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                onClick={() => handlePurchasedorder()}
                                type="submit"
                                value=" Place Order"
                                className="btn blog-btn  w-25 mb-3"
                            />
                            <Link to="/dashboard"><button className="btn blog-btn-update  w-25 mb-3">Go Back</button></Link>
                            {/* <input onClick={() => handlePurchasedorder()} type="submit"
        //                 value="Place Order"
        //                 className="btn blog-btn w-25 mb-3" /> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PurchaseOrder;
