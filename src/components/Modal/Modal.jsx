import { createPortal } from "react-dom";
import s from "./Modal.module.css";
export default function Modal({ children, showModal, toggleModal }) {
  return (
    <>
      {showModal &&
        createPortal(
          <>
            <div
              className={showModal ? s.modalActive : s.modalClosed}
              onClick={() => toggleModal()}
            >
              <div
                className={s.modal__content}
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </div>
              <button>Close</button>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
