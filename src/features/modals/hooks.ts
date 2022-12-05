import React from 'react';
import {UseModalsContext, ModalsContext} from './modals-context';

export const useModals = (): UseModalsContext => {
  const context = React.useContext(ModalsContext);

  if (!context) {
    throw new Error('useModals should be used within ModalsContextProvider');
  }

  return context;
};
