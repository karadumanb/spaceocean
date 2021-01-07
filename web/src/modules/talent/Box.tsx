import { Box, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { ComponentProps } from 'react';
import FloatingBox from "src/components/animation/FloatingBox";

export default function TalentBox({
  talent,
  ...others
}: ComponentProps<typeof Box> & { talent: ITalent }) {
  return (
    <motion.div
      whileHover={{
        scale: 2,
        zIndex: 99999999
      }}
      transition={{
        ease: 'easeOut',
        duration: 1,
      }}>
      <FloatingBox>
        <Box
          boxShadow={2}
          bgcolor={talent.primary || "primary.main"}
          color={talent.secondary || "white"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          py={6}
          px={1}
          borderRadius={5}
          {...others}>
          <Typography color='inherit' variant='body1'>
            <strong>{talent.title}</strong>
          </Typography>
        </Box>
      </FloatingBox>
    </motion.div>
  )
}
