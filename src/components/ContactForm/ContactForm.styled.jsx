import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 30px;
  padding: 10px 15px;
  border: 1px solid #000;
  & label {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    margin-bottom: 15px;

    & input {
      width: 175px;
      border: 1px solid grey;
      border-radius: 2px;
      outline: none;
      transition: box-shaddow 200ms linear;

      &:focus {
        box-shadow: 0 0 2px 2px #87baf4;
        border: 1px solid #87baf4;
      }
    }
  }

  & button {
    margin-top: 10px;
    width: max-content;
    padding: 2px 15px;
    font-weight: 700;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;

    &:hover,
    &:focus {
      background-image: linear-gradient(
        to top,
        rgba(67, 109, 216, 1) 50%,
        rgba(94, 152, 247, 1) 100%
      );
      border-color: transparent;
    }
  }
`;

export { Form };
