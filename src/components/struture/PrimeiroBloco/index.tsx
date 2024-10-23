import Image from "next/image";
import BlocoSite from "../BlocoSite";
import style from "./PrimeiroBloco.module.css";

export default function PrimeiroBloco() {
  return (
    <BlocoSite styleClass={style.bloco}>
      <Image
        src={"/img/slide/praia-do-bonete.jpg"}
        fill
        style={{
          objectFit: "cover",
        }}
        alt="Praia do Bonete"
      />
    </BlocoSite>
  );
}
