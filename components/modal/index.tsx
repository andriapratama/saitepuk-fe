import Image from "next/image";
import { X } from "react-feather";

interface Modal {
  isShowModal: boolean;
  setIsShowModal: (active: boolean) => void;
  image: string;
  setImage: (active: string) => void;
}

export const Modal: React.FC<Modal> = ({
  isShowModal,
  setIsShowModal,
  image,
  setImage,
}) => {
  return (
    <div
      className={`modal fixed inset-0 z-[999] ${
        isShowModal ? "visible" : "invisible"
      }`}
    >
      <div className="fixed top-[15px] right-[15px] z-[9999]">
        <X
          className="text-6xl text-white"
          onClick={() => {
            setIsShowModal(false);
            setImage("");
          }}
        />
      </div>
      <Image
        src={`/images/${image}`}
        alt="food"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};
