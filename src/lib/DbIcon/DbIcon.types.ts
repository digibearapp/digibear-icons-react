import { DbIconContextProps } from "@digibearapp/digibear-common-types";
import { DigibearIconsRegistry } from "@digibearapp/digibear-svg-core";
import { createContext, ReactNode } from "react";
import { DbIconProps as DbIconPropsCore } from "@digibearapp/digibear-common-types";

export interface DbIconProps extends DbIconPropsCore {
  children?: ReactNode;
}

export const defaultDbIconContext: DbIconContextProps = {
  iconStyle: "line",
  color: "currentColor",
  opacity: 1.0,
  secondaryColor: "currentColor",
  secondaryOpacity: 0.16,
  size: "1em",
  flippedH: false,
  flippedV: false,
};

export interface DbIconProviderProps {
  value: DbIconContextProps;
  children: ReactNode;
}
export const DbIconContext =
  createContext<DbIconContextProps>(defaultDbIconContext);

export interface DigibearIconsRegistryProviderProps {
  value: DigibearIconsRegistry;
  children: ReactNode;
}
export const DigibearIconsRegistryContext =
  createContext<DigibearIconsRegistry>(new DigibearIconsRegistry());
