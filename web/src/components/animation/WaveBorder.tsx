import React, { memo } from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  waves: {
    position: "relative",
    width: "100%",
    marginBottom: -7,
    height: "7vw",
    minHeight: "7vw",
  },
  "@keyframes moveForever": {
    from: { transform: "translate3d(-90px, 0, 0)" },
    to: { transform: "translate3d(85px, 0, 0)" },
  },
  parallax: {
    "& > use": {
      animation: "$moveForever 4s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite",
      animationDelay: animationNegativeDelay => `-${animationNegativeDelay}s`,
    },
  },
  reverse: {
    transform: "rotate(180deg)",
  },
}))

interface WaveBorderProps {
  className?: string
  lowerColor: string
  upperColor: string
  animationNegativeDelay: number
  reverse?: boolean
}

/**
 *  https://codepen.io/csspoints/pen/WNeOEqd
 */
const WaveBorder: React.FC<WaveBorderProps> = ({
  className,
  lowerColor,
  upperColor,
  animationNegativeDelay,
  reverse,
}) => {
  const classes = useStyles(animationNegativeDelay)
  const id = String(Math.random())
  return (
    <div
      className={`${reverse ? classes.reverse : ""} ${className}`}
      style={{ background: upperColor }}
    >
      <svg
        className={classes.waves}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id={id}
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={classes.parallax}>
          <use href={`#${id}`} x="48" y="0" fill={lowerColor} />
        </g>
      </svg>
    </div>
  )
}

export default memo(WaveBorder)
