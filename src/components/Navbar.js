import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal } from "../features/cartSlice";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <MDBNavbar style={{ backgroundColor: "black", position: "fixed", width: "100%", zIndex: 5, paddingTop: "5px", marginTop: "-7px" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Link to="/home" style={{ color: "#fff" }}>
            Foodie
          </Link>
        </MDBNavbarBrand>
        <span>
          <Link to="/" style={{ color: "#fff" }}>
            Place your Order{" "}
          </Link>
        </span>
        <MDBBtn color="light">
          <Link to="/cart" style={{ color: "black" }}>
            Cart({totalQuantity})
          </Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
