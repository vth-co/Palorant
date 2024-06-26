import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

const DuelistSVG = (props) => {
  const { width = 32, height = 32 } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 150 150"
      {...props}
    >
      <Path fill="url(#a)" d="M0 0h150v150H0z" />
      <Defs>
        <Pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use xlinkHref="#b" transform="scale(.00667)" />
        </Pattern>
        <Image
          xlinkHref="data:image/png;base64,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"
          id="b"
          width={150}
          height={150}
        />
      </Defs>
    </Svg>
  );
};
export default DuelistSVG;
