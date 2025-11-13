"use client";

import { compile, serialize, stringify } from "stylis";

const css = `
  html {
    /* Reset */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;

export function Stylis() {
  return <pre>{serialize(compile(css), stringify)}</pre>;
}
