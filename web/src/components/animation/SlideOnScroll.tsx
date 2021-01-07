import Slide from "@material-ui/core/Slide";
import React, { ComponentProps } from 'react';
import ScrolledIn from "./ScrolledIn";

const SlideOnScroll: React.FC<ComponentProps<typeof Slide>> = ({
  children,
  ...others
}) => (
    <ScrolledIn>
      <Slide direction={others.direction || 'down'} {...others}>
        {children}
      </Slide>
    </ScrolledIn>
  );

export default SlideOnScroll;
