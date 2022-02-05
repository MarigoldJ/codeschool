import { createContext } from "react";

type MobileContextProps = {
  isMobile: boolean;
};

export const MobileContext = createContext<MobileContextProps>({
  isMobile: false,
});
