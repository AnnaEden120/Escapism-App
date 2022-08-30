import React from "react";
import { useForm } from "react-hook-form";

function Sign() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} placeholder="Name" />
        <br />
        <input {...register("email", { required: true })} placeholder="Email" />
        <br />
        <input
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Password"
        />

        <label for="genres">Choose a genre:</label>
        <select {...register("genre")}>
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
        {errors.password && <p>Password is invalid</p>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Sign;
