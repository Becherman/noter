import { ModalProvider } from '../../features/modals/modals-provider';
import { MainPage } from '../main/Main';

export const Root = () => {
  return (
    <div className="page__root">
      <ModalProvider />
      <MainPage />
    </div>
  );
};
