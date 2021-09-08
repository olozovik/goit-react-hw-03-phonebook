import PropTypes from 'prop-types';
import { Container } from './Wrapper.styled';

function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
};

export { Wrapper };
