import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactNode } from "react"; // Импортируем ReactNode
import s from "./Modal.module.css";
import { toggleModal } from "../../redux/modalSlice";
import { getModalValueState } from "../../redux/selectors";

interface ModalProps {
  children: ReactNode; // Указываем тип для children
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { modalActive } = useSelector(getModalValueState);
  const dispatch = useDispatch();
  return (
    <>
      {modalActive &&
        createPortal(
          <>
            <div
              className={modalActive ? s.modalActive : s.modalClosed}
              onClick={() => dispatch(toggleModal())}
            >
              <div
                className={s.modal__content}
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};

export default Modal;
