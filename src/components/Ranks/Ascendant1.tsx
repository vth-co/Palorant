import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Ascendant1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={256}
    height={256}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h256v256H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.0039)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={32}
        height={32}
      />
    </Defs>
  </Svg>
)
export default Ascendant1
