import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const ImageSelectorPlaceholder = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={206}
    height={206}
    fill="none"
    {...props}
  >
    <Rect
      width={204}
      height={204}
      x={1}
      y={1}
      stroke="#98A2B3"
      strokeDasharray="8 8"
      strokeWidth={2}
      rx={102}
    />
    <Path
      fill="#98A2B3"
      fillRule="evenodd"
      d="M105.45 69H76.5a12 12 0 0 0-12 12v48a11.998 11.998 0 0 0 12 12h48c3.183 0 6.235-1.264 8.485-3.515A11.996 11.996 0 0 0 136.5 129V94.128a22.423 22.423 0 0 1-9 1.872C115.074 96 105 85.926 105 73.5c0-1.541.155-3.046.45-4.5ZM87.833 86.011a6 6 0 1 0-6.666 9.977 6 6 0 0 0 6.666-9.977Zm39.634 45.476a4.362 4.362 0 0 0 1.033-3.167v-4.68l-18-17.92a2.759 2.759 0 0 0-3.72 0L76.5 133h48a4.362 4.362 0 0 0 2.967-1.513Z"
      clipRule="evenodd"
    />
    <Path
      fill="#98A2B3"
      fillRule="evenodd"
      d="M127.499 58.5c1.036 0 1.875.84 1.875 1.876v11.25h11.25a1.875 1.875 0 1 1 0 3.75h-11.25v11.25a1.875 1.875 0 1 1-3.75 0v-11.25h-11.25a1.875 1.875 0 1 1 0-3.75h11.25v-11.25c0-1.036.839-1.875 1.875-1.875Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ImageSelectorPlaceholder
