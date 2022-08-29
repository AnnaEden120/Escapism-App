import React from "react";
import useForm from "react-hook-form";

export default function form() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="name">Name</label>
        <input type="text" placeholder="Name" name="fname" ref={register} />
        <br />
        <label for="email">Email</label>
        <input type="text" placeholder="Email" name="email" ref={register} />
        <br />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />
        <br />

        <label for="genres">Choose a genre:</label>
        <select id="genre" name="genre">
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
        <input type="submit" />
      </form>
    </div>
  );
}
