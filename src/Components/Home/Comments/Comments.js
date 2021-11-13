import React from 'react';
import './Comments.css';

const Comments = () => {
    return (
        <div className="comment-section p-5 mt-5">
            <h3 className="font-bold text-black">To Get Latest Updates</h3>
            <div>
                <form className="comment-form" action="">
                    <input className="comment-input mt-1" type="email" name="" id="" placeholder=" Your Email"  ></input>
                    <button className="comment-submit-btn" type="submit"> Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Comments;