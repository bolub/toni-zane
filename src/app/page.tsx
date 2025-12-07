"use client";

import { Box, chakra, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <chakra.header
        backgroundImage={`url(/zane.jpg)`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="90dvh"
        bgColor="rgba(0, 0, 0, 0.1)"
        backgroundBlendMode="multiply"
      >
        <Container
          display="flex"
          flexDir="column"
          justifyContent="center"
          height="100%"
        >
          <Box color="white">
            <chakra.p w="100%" maxW={500}>
              Welcome to the world of
            </chakra.p>
            <chakra.h1 fontSize="6xl" fontWeight={600} lineHeight="normal">
              Toni-Zane
            </chakra.h1>
            <chakra.p fontSize="lg" fontWeight={400} w="100%" maxW={500} mt={6}>
              Step into a magical world of imagination where stories come alive!
              Join me on adventures filled with wonder, friendship, and endless
              possibilities.
            </chakra.p>
          </Box>
        </Container>
      </chakra.header>
    </main>
  );
}
