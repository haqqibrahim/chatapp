import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/6621317/pexels-photo-6621317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>John</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
