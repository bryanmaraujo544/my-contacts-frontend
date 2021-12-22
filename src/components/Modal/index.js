import PropTypes from 'prop-types';
import { Overlay, ModalContainer, Footer } from './styles';
import Button from '../Button';

export default function Modal({ isDanger }) {
  return (
    <Overlay>
      <ModalContainer isDanger={isDanger}>
        <h1>Título do modal</h1>
        <p>
          Corpo do modal
        </p>

        <Footer>
          <button type="button" className="cancel-btn">Cancelar</button>
          <Button type="button" isDanger={isDanger}>Deletar</Button>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
}

Modal.propTypes = {
  isDanger: PropTypes.bool,
};

Modal.defaultProps = {
  isDanger: false,
};
