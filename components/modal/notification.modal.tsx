import React from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import { CardBody } from "../card/card.body";
import { CardFooter } from "../card/card.footer";
import { CardTitle } from "../card/card.title";

interface Modal {
  isShowModal: boolean;
  setIsShowModal: (active: boolean) => void;
}

export const NotificationModal: React.FC<Modal> = ({
  isShowModal,
  setIsShowModal,
}) => {
  return (
    <div
      className={`modal fixed inset-0 z-[99999] flex items-center justify-center ${
        isShowModal ? "visible" : "invisible"
      }`}
      onClick={() => setIsShowModal(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Card width="w-[300px]">
          <CardTitle>
            <div className="w-full text-center">Note</div>
          </CardTitle>

          <CardBody>
            <p className="font-arima text-center">
              Ketuk menu untuk melihat gambar.
            </p>
          </CardBody>

          <CardFooter>
            <div className="flex w-full justify-center">
              <Button variant="secondary" onClick={() => setIsShowModal(false)}>
                Tutup
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
