import { SubmitHandler, useForm } from "react-hook-form";
import "./style.css";

type FormType = {
  name: string;
  email: string;
  category: string;
}
const Review = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<FormType>();
  console.log(errors);

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };
  return (
    <div id="form-review">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Your Name:{" "}
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
              minLength: {
                value: 3,
                message: "После с именем не может содержать меньше 3 символов",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>

        <label>
          Email Address: <input type="email" {...register("email")} />
        </label>

        <select {...register("category")}>
          <option value="a">Select A</option>
          <option value="b">Select B</option>
          <option value="c">Select C</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
}

export default Review;