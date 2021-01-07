import { Grow } from "@material-ui/core";
import React, { ComponentProps } from 'react';
import ScrolledIn from "./ScrolledIn";

const GrowOnScroll: React.FC<ComponentProps<typeof Grow>> = ({
  children,
  ...others
}) => {
  return (
    <ScrolledIn>
      <Grow {...others}>
        <div>
          {children}
        </div>
      </Grow>
    </ScrolledIn>
  )
}

export default GrowOnScroll;
