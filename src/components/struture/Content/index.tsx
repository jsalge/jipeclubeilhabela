import { Flex } from "@chakra-ui/react";

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      justifyContent={"center"}
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "80%" }}
    >
      {children}
    </Flex>
  );
}
