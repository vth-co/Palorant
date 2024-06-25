// import * as React from "react"
// import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
// const ControllerSVG = (props) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     width={64}
//     height={64}
//     fill="none"
//     {...props}
//   >
//     <Path fill="url(#a)" d="M0 0h150v150H0z" />
//     <Defs>
//       <Pattern
//         id="a"
//         width={1}
//         height={1}
//         patternContentUnits="objectBoundingBox"
//       >
//         <Use xlinkHref="#b" transform="scale(.00667)" />
//       </Pattern>
//       <Image
//         xlinkHref="data:image/png;base64,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"
//         id="b"
//         width={64}
//         height={64}
//       />
//     </Defs>
//   </Svg>
// )
// export default ControllerSVG
