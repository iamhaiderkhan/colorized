import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Header } from "@/components/layouts/header";

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg">
        <Box>
          <Header />
        </Box>
      </Container>
    </main>
  );
}
