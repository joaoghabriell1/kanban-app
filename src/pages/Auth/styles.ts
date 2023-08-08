import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--semi-dark-blue);
  width: min(400px, 100% - 2.4rem);
  border-radius: 1rem;
`;

export const ServerError = styled.p`
  font-size: 15px;
  color: var(--light-red);
`;

export const FormContainer = styled.form`
  background: ${(props) => props.theme.colors["bg-cards"]};
  display: grid;
  gap: 1rem;
  padding: 2.4rem;
  border-radius: 1rem;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Error = styled.p`
  font-size: 13px;
  margin-block: 5px;
  color: #d9cee0;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const InputContainer = styled.div`
  input {
    color: inherit;
    width: 100%;
    padding: 1.5rem;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #777171;
    outline: none;
    font-size: 15px;
    font-weight: 300;
  }
  input::placeholder {
    opacity: 0.5;
    font-weight: 300;
  }
`;

export const SubmitButton = styled.button`
  font-family: inherit;
  width: 100%;
  padding-block: 1.4rem;
  color: inherit;
  border-radius: 6px;
  background: ${(props) => props.theme.colors["bg-primary-btn"]};
  font-size: 1.3rem;
  border: 0;
  margin-top: 4rem;
  margin-bottom: 0.5rem;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

export const Message = styled.div`
  font-size: 1.4rem;
  text-align: center;
  span {
    color: ${(props) => props.theme.colors["fc-main-purple"]};
    font-weight: bold;
  }
`;
