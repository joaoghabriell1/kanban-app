import { useAuthContext } from "../../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { errorMessagesType } from "./errors";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import errorMessages from "./errors";
import { useState } from "react";
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

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const { logIn, cleanServerErrors, serverErrors } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    setIsConnecting(true);
    const { email, password } = data;

    try {
      const response = await logIn(email, password);
      if (response === undefined) {
        return;
      }
      navigate("/");
    } catch (e) {
      console.log(e);
    } finally {
      setIsConnecting(false);
    }
  });

  return (
    <>
      <Wrapper>
        <FormContainer onSubmit={onSubmit}>
          <ServerError>
            {serverErrors
              ? errorMessages[serverErrors.code as keyof errorMessagesType]
              : null}
          </ServerError>
          <Heading>Login</Heading>
          <InputContainer>
            <label aria-label="email input" htmlFor="email">
              <input
                defaultValue="example@example.com"
                type="text"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email required.",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <Error>{errors.email?.message}</Error>
            </label>
          </InputContainer>
          <InputContainer>
            <input
              defaultValue="123456"
              id="password"
              type="password"
              placeholder="password"
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 6,
                  message: "Your password has to be at least 6 characters",
                },
              })}
            />
            <Error>{errors?.password?.message}</Error>
          </InputContainer>
          <Message>Example Account: example@example.com / 123456</Message>
          <SubmitButton>
            {isConnecting ? "Connecting..." : "Login to your account"}
          </SubmitButton>
          <Message>
            Don't have an account?{" "}
            <span>
              <Link
                onClick={() => {
                  cleanServerErrors();
                }}
                to="/auth?mode=signup"
              >
                Register
              </Link>
            </span>
          </Message>
        </FormContainer>
      </Wrapper>
    </>
  );
};

export default LoginForm;
