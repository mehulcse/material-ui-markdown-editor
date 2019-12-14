import React from "react";
import {
  IconButton,
} from '@material-ui/core';
import { styled } from "@material-ui/styles";

const StyledIcon = styled(IconButton)({
  fontSize: '1rem',
});

const Button = props => {
  const {
    children,
    ...rest
  } = props;
  return <StyledIcon {...rest}>{children}</StyledIcon>;
};

export default Button;
