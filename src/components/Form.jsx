import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "./styles/form.css";
import "react-toastify/dist/ReactToastify.css";

function Sign() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  toast.configure();
  const notify = () => {
    toast("You have successfully signed up!", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input
          type="name"
          name="name"
          placeholder="Name"
          ref={register({ required: true })}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
        <br />
        <label>Password:</label>
        <input
          type="passowrd"
          id="pwd"
          name="pwd"
          placeholder="Password"
          ref={register({ required: true })}
        />
        <br />

        <input
          onClick={notify}
          className="submit"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Sign;
