import style from "./TituloSite.module.css";
export default function TituloSite({children}: {children: string}) {
  return (
    <h1 className={style.titulo}>{children}</h1>
  );
}