import Image from "next/image";
import { useEffect } from "react";
import { X, Settings } from "react-feather";

interface Modal {
  isShowModal: boolean;
  setIsShowModal: (active: boolean) => void;
  image: string;
}

export const Modal: React.FC<Modal> = ({
  isShowModal,
  setIsShowModal,
  image,
}) => {
  useEffect(() => {
    if (isShowModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShowModal]);

  return (
    <>
      <div className="modal fixed mt-[100vh] h-[200px] w-full"></div>

      <div
        className={`modal fixed inset-0 z-[999] flex items-center justify-center ${
          isShowModal ? "visible" : "invisible"
        }`}
      >
        <div className="fixed top-[15px] right-[15px] z-[9999]">
          <X
            className="text-6xl text-white"
            onClick={() => {
              setIsShowModal(false);
            }}
          />
        </div>

        {isShowModal ? (
          <Settings className="absolute h-[60px] w-[60px] animate-spin-slow text-slate-200" />
        ) : null}

        {isShowModal ? (
          <div className="relative h-screen w-[90%] delay-200">
            <Image
              src={`/images/${image}`}
              alt="menu"
              layout="fill"
              objectFit="contain"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
