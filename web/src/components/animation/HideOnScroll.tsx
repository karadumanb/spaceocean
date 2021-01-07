import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";

type HideOnScrollType = {
  children: React.ReactElement;
  direction: 'up' | 'down' | 'left' | 'right';
}

const HideOnScroll: React.FC<HideOnScrollType> = ({
  children,
  direction = "down",
}) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={direction} in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll;
