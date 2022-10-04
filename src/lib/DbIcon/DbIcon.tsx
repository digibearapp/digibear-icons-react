import { DbSvgDefinition } from "@digibearapp/digibear-common-types";
import { forwardRef, useContext } from "react";
import {
  DbIconContext,
  DbIconProps,
  defaultDbIconContext,
  DigibearIconsRegistryContext,
} from "./DbIcon.types";

function generatePaths(svg: DbSvgDefinition) {
  const paths = [];
  const transform = svg.groupTransform;

  for (let i = 0; i < svg.paths.length; i++) {
    const svgPathData = svg.paths[i];
    paths.push(
      <path
        key={i}
        d={svgPathData.d}
        fill={svgPathData.fill}
        opacity={svgPathData.opacity}
      />
    );
  }
  return <g transform={transform}>{paths}</g>;
}

const DbIcon = forwardRef<SVGSVGElement, DbIconProps>((props, ref) => {
  const {
    iconName,
    iconStyle,
    color,
    secondaryColor,
    opacity,
    secondaryOpacity,
    flippedH,
    flippedV,
    children,
    ...restProps
  } = props;

  const {
    iconStyle: contextIconStyle,
    color: contextColor,
    secondaryColor: contextSecondaryColor,
    opacity: contextOpacity,
    secondaryOpacity: contextSecondaryOpacity,
    size: contextSize,
    flippedH: contextFlippedH,
    flippedV: contextFlippedV,
    ...restContext
  } = useContext(DbIconContext);

  const dbIconProps: DbIconProps = {
    iconName: props.iconName,
    iconStyle:
      props.iconStyle ?? contextIconStyle ?? defaultDbIconContext.iconStyle,
    size: props.size ?? contextSize ?? defaultDbIconContext.size,
    color: props.color ?? contextColor ?? defaultDbIconContext.color,
    secondaryColor:
      props.secondaryColor ??
      contextSecondaryColor ??
      defaultDbIconContext.secondaryColor,
    opacity: props.opacity ?? contextOpacity ?? defaultDbIconContext.opacity,
    secondaryOpacity:
      props.secondaryOpacity ??
      contextSecondaryOpacity ??
      defaultDbIconContext.secondaryOpacity,
    flippedH:
      props.flippedH ?? contextFlippedH ?? defaultDbIconContext.flippedH,
    flippedV:
      props.flippedV ?? contextFlippedV ?? defaultDbIconContext.flippedV,
  };

  const registry = useContext(DigibearIconsRegistryContext);
  const svg = registry.getIcon(dbIconProps)!;
  return (
    <svg
      ref={ref}
      xmlns={svg.xmlns ?? undefined}
      width={svg.width ?? undefined}
      height={svg.height ?? undefined}
      fill={svg.fill ?? undefined}
      viewBox={svg.viewBox ?? undefined}
      {...restContext}
      {...restProps}
    >
      {children}
      {generatePaths(svg)}
    </svg>
  );
});

export default DbIcon;
