import { DbIconContextProps } from "@digibearapp/digibear-common-types";
import { DigibearIconsRegistry } from "@digibearapp/digibear-svg-core";
import { createContext } from "react";

export const defaultDbIconContext : DbIconContextProps = {
    iconStyle: "line",
    color: "currentColor",
    opacity: 1.0,
    secondaryColor: "currentColor",
    secondaryOpacity: 0.16,
    size: "1em",
    flippedH: false,
    flippedV: false,
}

export const DbIconContext = createContext<DbIconContextProps>(defaultDbIconContext);

export const DigibearIconsRegistryContext = createContext<DigibearIconsRegistry>(new DigibearIconsRegistry());