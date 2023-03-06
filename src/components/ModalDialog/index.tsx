import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { IconButton, ModalContainer, ModalContent } from './index.style';

interface ModalDialogProps extends React.PropsWithChildren {
  open: boolean;
  title: string;
  onClose: React.Dispatch<any>;
  small?: boolean;
}

const ModalDialog: React.FC<ModalDialogProps> = ({ onClose, open, title, children, small = false }) => {

  return (
    <ModalContainer open={open}>
      <ModalContent small={small}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <h3>{title || 'Modal'}</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={onClose}>
              <FaTimes size="20px" />
            </IconButton>
          </div>
        </div>
        <div>
          {children}
        </div>
      </ModalContent>
    </ModalContainer>
  )
}

export default ModalDialog;