import {useState} from 'react';

import styles from './Note.module.scss';

export const Note = () => {
  const [isEditModeOn, turnOnEditMode] = useState(false);
  // const {showModal} = useModal('note', noteId);

  const onNoteClickHandler = (noteId: string) => {
    // showModal(noteId);
  }
  return (
    <div 
      className={styles.wrapper}
      onClick={() => turnOnEditMode(true)}
    >
      <div>Meta</div>
      <div>
        <p>
          A graphic representation of data abstracted from the missionaries, the train reached
          Case’s station. Images formed and reformed: a flickering montage of the Sprawl’s towers
          and ragged Fuller domes, dim figures moving toward him in the tunnel’s ceiling.
        </p>
      </div>
    </div>
  );
};
