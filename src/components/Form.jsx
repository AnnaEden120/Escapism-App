import React from "react";
import { useForm } from "react-hook-form";
import "./styles/form.css";

function Sign(props) {
  const { register, handleSubmit, errors } = useForm();
  console.log(errors);

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <input {...register("name", { required: true })} placeholder="Name" />
        <br />
        <input {...register("email", { required: true })} placeholder="Email" />
        <br />
        <input
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Password"
        />
        <br />

        <label for="genres">Choose a genre:</label>
        <br />
        <select {...register("genre", { required: true })}>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="history">History</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="fantasy">Fantasy</option>
          <option value="documentry">Documentry</option>
          <option value="foreign">Foreign</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="thriller">Thriller</option>
        </select>
        <br />

        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Sign;
