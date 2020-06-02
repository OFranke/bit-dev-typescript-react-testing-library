import React from "react";
import { Button as ChakraButton } from "@chakra-ui/core";
import { ThemeWrapper } from "../theme-wrapper/theme-wrapper";

interface ButtonProps {
  isDisabled?: boolean;
}
export const Button = ({ isDisabled }: ButtonProps) => {
  return (
    <ThemeWrapper>
      <ChakraButton isDisabled={isDisabled}>{'Click Me!'}</ChakraButton>
    </ThemeWrapper>
  );
};

export default Button;
