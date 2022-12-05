import React from 'react';
import {ModalsRoot} from './components/modals-root';
import {ModalsContext} from './modals-context';


export interface ModalProviderProps {}

export const ModalProvider: React.FC<ModalProviderProps> = () => {
  const [activeModal, setActiveModal] = React.useState(false);

  const openModal = () => {
    setActiveModal(false);
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  const value = {
    openModal,
    closeModal,
    activeModal,
  };

  return (
    <ModalsContext.Provider value={value}>
      <ModalsRoot />
    </ModalsContext.Provider>
  );
};
