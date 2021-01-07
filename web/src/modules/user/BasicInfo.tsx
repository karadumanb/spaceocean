import { Box, Chip, makeStyles } from '@material-ui/core';
// import { motion } from 'framer-motion';
import React, { useState } from 'react';
import GrowOnScroll from 'src/components/animation/GrowOnScroll';
import Tappable from 'src/components/animation/Tappable';
import UserAvatar from './Avatar';

const wrapperDimension = 200;

const useStyles = makeStyles(() => ({
  chipCommon: {
    position: 'absolute',
    color: 'inherit',
    backgroundColor: 'inherit',
  },
  wrapper: {
    width: wrapperDimension,
    height: wrapperDimension,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    border: `1px solid #ccc`,
    backgroundColor: '#fff',
    borderRadius: '50%'
  }
}));


const positions = [
  {
    top: wrapperDimension / 2 - 15,
    left: -60
  },
  {
    top: -10,
    left: 45
  },
  {
    top: wrapperDimension / 2 - 15,
    left: wrapperDimension - 40
  },
  {
    top: wrapperDimension - 20,
    left: 45
  }
]


export default function UserBasicInfo({
  user
}: { user: IUser }) {
  const { chipCommon, wrapper } = useStyles();
  const [chipPositions, setChipPositions] = useState(positions)

  const rotate = () => {
    setChipPositions([...chipPositions.slice(1, 4), chipPositions[0]])
  };

  return (
    <Box display="inline-flex" position="relative" ml={8}>
      <Box className={wrapper}>
        {
          user.talents.slice(0, 4).map((talent, index) => (
            <span
              style={{
                position: 'absolute',
                display: 'flex',
                transition: 'all 1s',
                width: 100,
                justifyContent: 'center',
                ...chipPositions[index],
              }}
              key={'chip-' + index + talent.title}>
              <Chip
                variant="outlined"
                size='medium'
                label={talent.title_short}
                className={`${chipCommon}`}
                style={{
                  color: talent.secondary,
                  backgroundColor: talent.primary,
                }}
              />
            </span>
          ))
        }
        <GrowOnScroll timeout={1000}>
          <Tappable onClick={() => rotate()}>
            <UserAvatar user={user} />
          </Tappable>
        </GrowOnScroll>
      </Box>
    </Box>
  );
}
