import { Avatar, Flex } from "@chakra-ui/react";
import BlocoSite from "../BlocoSite";
import style from "./BlocoDepoimento.module.css";
import TituloSiteBranco from "../TituloSiteBranco";
import Content from "../Content";

export default function BlocoDepoimento() {
  return (
    <BlocoSite styleClass={style.bloco}>
      <Flex
        flex={1}
        marginTop={"80px"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
          <Content>
            <TituloSiteBranco>DEPOIMENTOS</TituloSiteBranco>
          </Content>
        </Flex>
        <Content>
          <Flex
            width={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "60%",
            }}
            padding={20}
            marginTop={"60px"}
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex
              width={{
                base: "60%",
                sm: "60%",
                md: "60%",
                lg: "60%",
                xl: "50%",
              }}
              marginRight={{
                base: "0px",
                sm: "0px",
                md: "20px",
                lg: "20px",
                xl: "20px",
              }}
              marginBottom={{
                base: "20px",
                sm: "20px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              }}
            >
              <Avatar.Root size="full" style={{border: "3px solid white"}}>
                <Avatar.Image src="https://bit.ly/sage-adebayo" />
                <Avatar.Fallback>SA</Avatar.Fallback>
              </Avatar.Root>
            </Flex>
            <Flex
              width={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "50%",
              }}
            >
            <p style={{color:"white"}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              dolore animi a nulla cupiditate eveniet nobis nostrum, laboriosam
              incidunt nam sapiente dignissimos fugit. Provident ipsum aperiam
              ut eligendi architecto dolor.
            </p>
            </Flex>
          </Flex>
        </Content>
      </Flex>
    </BlocoSite>
  );
}
