import { DigibearIconsRegistry } from "@digibearapp/digibear-svg-core";
import { useContext } from "react";
import {
  DigibearIconsRegistryContext,
  DigibearIconsRegistryProviderProps,
} from "../DbIcon.types";

export const DigibearIconsRegistryProvider = (
  props: DigibearIconsRegistryProviderProps
) => {
  const { value, children } = props;

  return (
    <DigibearIconsRegistryContext.Provider value={value}>
      {children}
    </DigibearIconsRegistryContext.Provider>
  );
};
export const useDigibearIconsRegistry = () =>
  useContext<DigibearIconsRegistry>(DigibearIconsRegistryContext);
