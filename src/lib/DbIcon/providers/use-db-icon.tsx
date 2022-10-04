import { DbIconContextProps } from "@digibearapp/digibear-common-types";
import { useContext } from "react";
import { DbIconContext, DbIconProviderProps } from "../DbIcon.types";

export const DbIconProvider = (props: DbIconProviderProps) => {
  const { value, children } = props;

  return (
    <DbIconContext.Provider value={value}>{children}</DbIconContext.Provider>
  );
};
export const useDbIcon = () => useContext<DbIconContextProps>(DbIconContext);
