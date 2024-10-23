/* eslint-disable @typescript-eslint/no-unused-vars */
import Menu from "@/components/struture/Menu/Menu";
import PrimeiroBloco from "@/components/struture/PrimeiroBloco";
import SegundoBloco from "@/components/struture/SegundoBloco";
import { Box, Flex } from "@chakra-ui/react";
import style from "./page.module.css";
import BlocoPacote from "@/components/struture/BlocoPacote";
import BlocoPacoteInvoertido from "@/components/struture/BlocoPacoteInvertido";
import BlocoDepoimento from "@/components/struture/BlocoDepoimento";

export default function Home() {
  return (
    <Box
      className={style.container}
      height="100vh"
      overflowY="scroll"
      scrollSnapType="y mandatory" // Define o comportamento de snap no eixo Y
    >
      <Menu />
      <PrimeiroBloco />
      <BlocoPacote />
      <BlocoPacoteInvoertido />
      <BlocoPacote />
      <BlocoPacoteInvoertido />
      <BlocoDepoimento />
    </Box>
  );
}
