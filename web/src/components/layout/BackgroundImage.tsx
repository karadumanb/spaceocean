import { makeStyles, Theme } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  bgImage: {
    height: '70vh',
    minHeight: 700,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: `100px 0px`,
    marginBottom: theme.spacing(10),
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      height: 'auto',
      padding: `40px 0px`,
    },
  },
}))


export default function BackgroundImage({ children, src, style = {} }: { children: React.ReactNode; src: string; style?: any }) {
  const { bgImage } = useStyles();

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ backgroundImage: `url("${src}")`, ...style }}
      className={bgImage}>
      {children}
    </motion.div>
  )
}
