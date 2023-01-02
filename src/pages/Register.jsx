import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import Add from "../img/addAvatar.png";

const Register = () => {
  const navigate = useNavigate()
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;
    try {
      const storageRef = ref(storage, displayName);

      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
          console.log(error);
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async function (
            downloadURL
          ) {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "usersChats", res.user.uid), {});
            navigate("/")
          });
        }
      );
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="add" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        {err && <span>{err}</span>}
        <p onClick={() => navigate("/login")}>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
