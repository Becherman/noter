import React from "react";


export interface UseModalsContext {
  openModal: () => void;
  closeModal: () => void;
  activeModal: boolean | null;
}

export const defaultContextValue = {
  openModal: () => {},
  closeModal: () => {},
  activeModal: null,
};

export const ModalsContext = React.createContext<UseModalsContext>(defaultContextValue);
