import React from "react";
import styled from "styled-components";
import media from "../util/media";

export default function Responsive() {
  return (
    <Box number={33} weight="800">
      Responcive
    </Box>
  );
}

const Box = styled.div<{
  number: number;
  weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800";
}>`
  background-color: green;
  padding: 1.5rem;

  font-size: ${({ number }) => number};
  ${media.tablet} {
    font-weight: ${({ weight }) => weight};
  }

  ${media.desktop} {
    background: red;
  }
`;
