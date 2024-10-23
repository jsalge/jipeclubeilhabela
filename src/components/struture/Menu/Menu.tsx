import { Flex } from "@chakra-ui/react";
import style from "./Menu.module.css";

export default function Menu() {
  return (
    <Flex className={style.menu}>
        <img className={style.logo} src="img/logo.PNG" alt="whatsapp" width={"200px"}/>
        <h1>home</h1>
        <h1>pacotes</h1>
        <h1>sobre</h1>
        <h1>privativo</h1>
        <img className={style.whatsapp} src="img/whatsapp.PNG" alt="whatsapp" width={"50px"}/>
    </Flex>
  );
}