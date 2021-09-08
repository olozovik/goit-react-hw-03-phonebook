import styled from '@emotion/styled';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;

  & button {
    margin-left: 10px;
    width: max-content;
    padding: 2px 15px;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid lightgray;
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;

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

export { List };
