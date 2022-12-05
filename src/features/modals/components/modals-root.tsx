import { Outlet, useMatches } from "react-router-dom";
import { isOnlyRootMatched } from "../../../utils/router";

export const ModalsRoot: React.FC = () => {
  const matches = useMatches();
  const isNothingButRoot = isOnlyRootMatched(matches);

  return isNothingButRoot ? null : (
    <div
      className="modal__root"
      style={{position: 'fixed', zIndex: 1, width: '100%', height: '100%'}}
    >
      <div
        className="modal__overlay"
        style={{
          position: 'absolute',
          zIndex: 0,
          background: 'pink',
          opacity: 0.5,
          width: '100%',
          height: '100%',
        }}
      />
      <div
        className="modal__wrapper"
        style={{
          position: 'absolute',
          zIndex: 1,
          background: 'cian',
          width: 'fit-content',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};