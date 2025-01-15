import { FC, FormEvent } from "react";
import s from "./s.module.css";

const Review: FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form);
    const postData = async () => {
      const req = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const answer = await req.json();
      console.log(answer);
    };
    postData();
    console.log(data);
  };

  return (
    <form className={s.formReview} onSubmit={handleSubmit}>
      <input id="user_name" type="text" name="user_name" />
      <label htmlFor="user_name">Имя</label>

      <label>
        <input type="email" name="user_email" /> Email
      </label>

      <input type="submit" />
    </form>
  );
};

export default Review;
