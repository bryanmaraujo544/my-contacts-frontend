import PropTypes from 'prop-types';
import { ModalContainer, Footer, Overlay } from './styles';
import Button from '../Button';
import ReactPortal from '../ReactPortal';

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

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <ModalContainer isDanger={isDanger}>
          <h1>{title}</h1>
          <div className="modal-body">{children}</div>

          <Footer>
            <button type="button" className="cancel-btn" onClick={onCancel}>
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
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  isDanger: PropTypes.bool,
  visible: PropTypes.bool,
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
  title: 'Modal',
  isLoading: false,
  visible: false,
};
