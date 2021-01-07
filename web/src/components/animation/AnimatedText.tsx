import React, { ComponentProps } from "react";
import Typed from "react-typed";


const AnimatedText: React.FC<ComponentProps<typeof Typed>> = (props) => (
  <Typed
    typeSpeed={50}
    backSpeed={50}
    backDelay={1}
    loop
    smartBackspace
    {...props}
  />
);

export { AnimatedText as TestAnimatedIntroText };
export default AnimatedText;
