import { Box, SimpleGrid, SimpleGridProps, Stack } from "@chakra-ui/react";
import * as React from "react";
import { FooterHeading } from "./FooterHeading";
import Link from "next/link";

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Product</FooterHeading>
      <Stack>
        <Link href="#">How it works</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Use Cases</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Legal</FooterHeading>
      <Stack>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
        <Link href="#">License</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
