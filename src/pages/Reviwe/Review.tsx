import s from "./s.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

type FormType = {
  user_name: string;
  user_email: string;
  category: string;
};

const Review: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  console.log(errors);

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <form className={s.formReview} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="user_name">Имя</label>
      <input
        id="user_name"
        type="text"
        {...register("user_name", {
          required: { value: true, message: "Обязательное поле" },
          minLength: { value: 3, message: "Недостаточно символов" },
        })}
      />

      {errors.user_name && <p>{errors.user_name.message}</p>}

      <label>
        Email <input type="email" {...register("user_email")} />
      </label>

      <input type="submit" />

      <select {...register("category")}>
        <option value="a">Select a</option>
        <option value="b">Select b</option>
        <option value="c">Select c</option>
      </select>
    </form>
  );
};

export default Review;
