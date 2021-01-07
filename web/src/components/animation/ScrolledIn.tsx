import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React, { useEffect, useState } from 'react';

const ScrolledIn: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [target, setTarget] = useState(undefined);

  const TargettedScroll = () => {
    const [animate, setAnimate] = useState(false);

    const trigger = useScrollTrigger({
      threshold: (target.offsetTop) - ((window?.innerHeight || 900)  - 100)
    });

    useEffect(() => {
      if (trigger && !animate) {
        setAnimate(true);
      }
    }, [trigger]);

    return React.cloneElement(children, { in: animate })
  };


  return (
    <div ref={node => node && !target && setTarget(node)}>
      {target ? <TargettedScroll /> : children}
    </div>
  );
}

export default ScrolledIn;
