import React from "react";
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import './AddProduct.css';

const AddProducts = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://hidden-mountain-59218.herokuapp.com/addProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Congratulation! Product added successfully.')
                console.log(result)
            });

    };
    return (
        <div>
            <div>
                <h1 className="mt-5 text-center why-title">Add Products Here</h1>
                <div className="login-box w-25 m-auto mt-5">
                    <div className="event-box border border d-flex justify-content-center align-items-center">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("name")}
                                    placeholder=" Item Name"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <input
                                    {...register("description")}
                                    placeholder="Description"
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <input
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Add Item"
                                    className="btn blog-btn w-50 mb-3"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;













// import React from 'react';
// import { useForm } from "react-hook-form";

// import { useHistory } from 'react-router';


// const AddProduct = () => {
//     const { register, handleSubmit } = useForm();
//     const history = useHistory();
//     const onSubmit = data => {
//         console.log(data);
//         fetch("https://serene-crag-84506.herokuapp.com/tours/addTours", {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(data),
//         })
//             .then((res) => res.json())
//             .then((result) => console.log(result));
//     };
//     // const onSubmit = data => {
//     //     console.log(data);
//     //     axios.post('https://hidden-mountain-59218.herokuapp.com/addTours', data)
//     //         .then(res => {
//     //             if (res.data.insertedId) {
//     //                 alert('Tour Added Successfully!');
//     //                 reset();
//     //             }
//     //         })
//     // };
//     // const onSubmit = data => {
//     //     console.log(data);
//     //     axios.post('https://serene-crag-84506.herokuapp.com/tours', data)
//     //         .then(res => {
//     //             if (res.data.insertedId) {
//     //                 alert('Tour Added Successfully!');
//     //                 reset();
//     //             }
//     //         })
//     // };

//     // const handleAddTours = () => {
//     //     history.push('./tours')
//     // }

//     return (
//         <div className="add-tours">
//             <h3>Please Add a Tour</h3>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input  {...register("title", { required: true, maxLength: 20 })} placeholder="Destination" />
//                 <input  {...register("duration")} placeholder="Duration" />
//                 <textarea  {...register("description")} placeholder="Description" />
//                 <input type="number" {...register("price")} placeholder="Cost" />
//                 <input
//                     {...register("img")} placeholder="Img URL" />
//                 <input type="submit" onClick={() => history.push('/tours')} />
//             </form>
//         </div>
//     );
// };

// export default AddProduct;