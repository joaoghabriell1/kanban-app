import { useAuthContext } from "../../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { errorMessagesType } from "./errors";
import { useForm } from "react-hook-form";
import errorMessages from "./errors";

import {
  Wrapper,
  FormContainer,
  ServerError,
  Error,
  Heading,
  InputContainer,
  SubmitButton,
  Message,
} from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const { createUser, cleanServerErrors, serverErrors } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    cleanServerErrors();
    try {
      setLoading(true);
      const status = await createUser(email, password, data);
      navigate("/auth");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  });

  const watchPassword = watch("password");

  return (
    <Wrapper>
      <FormContainer onSubmit={onSubmit}>
        <Heading>SignUp</Heading>
        <ServerError>
          {serverErrors
            ? errorMessages[serverErrors.code as keyof errorMessagesType]
            : null}
        </ServerError>
        <InputContainer>
          <input
            id="name"
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name required",
            })}
          />
          <div>{errors?.name && <Error>{errors.name.message}</Error>}</div>
        </InputContainer>
        <InputContainer>
          <input
            id="e-mail"
            type="text"
            placeholder="xxxxx@xxx.xxx"
            {...register("email", {
              required: "E-mail required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          <div>{errors?.email && <Error>{errors.email.message}</Error>}</div>
        </InputContainer>
        <InputContainer>
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 6,
                message: "Your password has to be at least 6 characters",
              },
            })}
          />
          <div>
            {errors?.password && <Error>{errors.password.message}</Error>}
          </div>
        </InputContainer>
        <InputContainer>
          <input
            placeholder="Confirm password"
            type="password"
            {...register("confirmPassword", {
              required: "You need to confirm your password.",
              validate: (val) => {
                if (watchPassword !== val) {
                  return "Your passwords do not match.";
                }
              },
            })}
          />
          <div>
            {errors?.confirmPassword && (
              <Error>{errors.confirmPassword?.message}</Error>
            )}
          </div>
        </InputContainer>
        <SubmitButton>
          {!loading ? "Create account" : "Connecting..."}
        </SubmitButton>
        <Message>
          Already have an account?
          <span>
            <Link
              onClick={() => {
                cleanServerErrors();
              }}
              to="/auth?mode=signin"
            >
              SignIn
            </Link>
          </span>
        </Message>
      </FormContainer>
    </Wrapper>
  );
};

export default RegisterForm;
