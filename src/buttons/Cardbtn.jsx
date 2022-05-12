import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () =>{
    // we get state of additems
    // write  the name of the file not the function
    const state = useSelector((state)=> state.addItems)
    //  console.log(state)
    return(
        <div>
            <NavLink to="/cart" className="btn btn-outline-primary ms-1">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </NavLink>
        </div>
    );
};

export default CartBtn;