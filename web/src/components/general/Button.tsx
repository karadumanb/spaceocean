import Button from "@material-ui/core/Button";
import React, { ComponentProps } from "react";

const SOButton: React.FC<ComponentProps<typeof Button> >= ({ children, ...props }) => (
  <Button
    variant="outlined"
    color="primary"
    {...props}>
    {children}
  </Button>
);

export default SOButton;
