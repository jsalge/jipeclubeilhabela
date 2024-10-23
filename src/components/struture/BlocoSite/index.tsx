/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from "@chakra-ui/react";
import style from "./BlocoSite.module.css";
import { ReactNode } from "react";

export default function BlocoSite({ children, styleClass }: { children: ReactNode, styleClass: string }) {
  return <Flex className={`${style.blocoSite} ${styleClass}`}>{children}</Flex>;
}
