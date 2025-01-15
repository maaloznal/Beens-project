import s from "./s.module.css";

const Review = () => {
  return (
    <form className={s.formReview}>
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
