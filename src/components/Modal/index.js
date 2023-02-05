import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer, Footer } from './styles';
import Button from '../Button';

export default function Modal({
  isDanger,
  visible,
  title,
  isLoading,
  children,
  confirmLabel,
  cancelLabel,
  onCancel,
  onConfirm,
}) {
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer isDanger={isDanger}>
        <h1>{title}</h1>
        <div className="modal-body">{children}</div>

        <Footer>
          <button
            type="button"
            disabled
            className="cancel-btn"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <Button
            type="button"
            isDanger={isDanger}
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </Footer>
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  isDanger: PropTypes.bool,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  isDanger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
  isLoading: false,
};
