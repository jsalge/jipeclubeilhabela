import { Button, Flex } from "@chakra-ui/react";
import BlocoSite from "../BlocoSite";
import style from "./BlocoPacote.module.css";
import Content from "../Content";
import TituloSite from "../TituloSite";
import Image from "next/image";

export default function BlocoPacote() {
  return (
    <BlocoSite styleClass={style.bloco}>
      <Flex
        flex={1}
        marginTop="80px"
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"20px"}
      >
        <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
          <Content>
            <TituloSite>Praia de Catelhanos</TituloSite>
          </Content>
        </Flex>
        <Content>
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            marginTop="20px"
            justifyContent={"center"}
            alignItems={"center"}
            padding={"20px"}
            width={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            }}
          >
            <Flex
              margin={"20px"}
              bgColor={"blue"}
              height={"50vh"}
              position={"relative"}
              width={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "50%",
              }}
            >
              <Image
                src={"/img/pacotes/praia-de-castelhanos.jpg"}
                fill
                style={{
                  objectFit: "cover",
                }}
                alt="Praia do Bonete"
              />
            </Flex>
            <Flex
              margin={"20px"}
              height={"50vh"}
              direction={"column"}
              justifyContent={"space-between"}
              width={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "50%",
              }}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis, at! Eum repellendus tenetur, autem doloremque
                distinctio laborum beatae provident illo obcaecati eaque
                necessitatibus, ad unde, illum consequuntur maiores omnis
                excepturi?
              </p>
              <Button color={"#fff"} bgColor={"rgb(54 95 61)"}>
                PACOTES À PARTIR DE R$180,00
              </Button>
            </Flex>
          </Flex>
        </Content>
      </Flex>
    </BlocoSite>
  );
}
