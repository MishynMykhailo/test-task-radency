import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactNode } from "react";
import { toggleModal } from "../../redux/modalSlice";
import { getModalValueState } from "../../redux/selectors";

interface ModalProps {
  children: ReactNode;
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
              className={`${
                modalActive ? "fixed" : "hidden"
              } inset-0 flex items-center justify-center bg-black bg-opacity-40`}
              onClick={() => dispatch(toggleModal())}
            >
              <div
                className="max-h-screen max-w-screen-md rounded-lg bg-white p-5 w-96"
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  );
};

export default Modal;
