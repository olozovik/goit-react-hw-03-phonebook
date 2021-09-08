import styled from '@emotion/styled';

const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;

  & input {
    width: 175px;
    border: 1px solid grey;
    border-radius: 2px;
    outline: none;
    transition: box-shaddow 200ms linear;

    &:focus {
      border: 1px solid #87baf4;
      box-shadow: 0 0 2px 2px #87baf4;
    }
  }
`;

export { Label };
