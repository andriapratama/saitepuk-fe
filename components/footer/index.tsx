import Image from "next/image";
import instagram from "../../icons/instagram.png";
import whatsapp from "../../icons/whatsapp.png";
import gojek from "../../icons/gojek.png";
import cr from "../../icons/copyright-symbol.png";
import { useRouter } from "next/router";

export const Footer = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-black">
      <div className="w-full p-5">
        <div className="mb-5 flex w-full justify-center">
          <div
            className="mx-1 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200"
            onClick={() =>
              router.push("https://www.instagram.com/warung_saitepuk/")
            }
          >
            <Image src={instagram} width="30px" height="30px" alt="instagram" />
          </div>

          <div
            className="mx-1 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200"
            onClick={() => router.push("https://wa.me/6281883412244")}
          >
            <Image src={whatsapp} width="30px" height="30px" alt="whatsapp" />
          </div>

          <div
            className="mx-1 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200"
            onClick={() =>
              router.push(
                "https://gofood.co.id/bali/restaurant/warung-sai-te-puuk-jln-gunung-merapi-sengguan-klungkung-dffe9fd0-bdea-4b76-9455-227649f86054"
              )
            }
          >
            <Image src={gojek} width="30px" height="30px" alt="gojek" />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <p className="text-arima flex items-center text-xs text-white">
            <Image
              className="rounded-full bg-white px-1 py-1 pr-2"
              src={cr}
              width="12px"
              height="12px"
              alt="copyright"
            />
            2022, All Rights Reserved, Made by Warung Sai Tepuk
          </p>
        </div>
      </div>
    </div>
  );
};
