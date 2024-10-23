import style from "./TituloSiteBranco.module.css";
export default function TituloSiteBranco({children}: {children: string}) {
  return (
    <h1 className={style.titulo}>{children}</h1>
  );
}