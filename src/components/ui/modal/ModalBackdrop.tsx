import { useDispatch } from "react-redux";
import { closeModal } from "@store/modal";

type ModalBackdropProps = {
  modalName: string;
  children: React.ReactNode;
};

export default function ModalBackdrop({
  children,
  modalName,
}: ModalBackdropProps) {
  const dispatch = useDispatch();

  const handleBackdropClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal({ modalName: modalName }));
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 z-50 
      transition-opacity duration-500"
      onClick={handleBackdropClick}
    >
      {children}
    </div>
  );
}
