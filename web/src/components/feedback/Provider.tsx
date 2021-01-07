import { DrawerProps } from '@material-ui/core';
import React, { ComponentProps, useContext, useState } from 'react'
import SODrawer from './Drawer';
import SOModal from './Modal';

type ModalProps = ComponentProps<typeof SOModal>

type FeedbackContextType = {
  drawer?: { close: () => void, open: (config: DrawerProps) => void },
  modal?: { close: () => void, open: (config: ModalProps) => void }
}

const FeedbackContext = React.createContext<FeedbackContextType>(null);

export function useFeedback() {
  const { drawer, modal } = useContext(FeedbackContext);
  return { drawer, modal };
}

export default function FeedbackProvider({ children }) {
  const [drawerConfig, setDrawerConfig] = useState<Omit<DrawerProps, 'onClose'>>({ open: false });
  const [modalConfig, setModalConfig] = useState<ModalProps>({ open: false });

  const openDrawer = (config: DrawerProps) => {
    setDrawerConfig({
      open: true,
      onClose: () => setDrawerConfig({ open: false }),
      ...config,
      ...{ destroyOnClose: true }
    })
  };

  const openModal = (config: ModalProps) => {
    setDrawerConfig({
      open: true,
      handleClose: () => setModalConfig({ open: false }),
      ...config,
      ...{ destroyOnClose: true }
    })
  };


  const contextValue: FeedbackContextType = {
    drawer: {
      close: () => setDrawerConfig({ open: false }),
      open: openDrawer
    },
    modal: {
      close: () => setModalConfig({ open: false }),
      open: openModal
    }
  };

  return (
    <FeedbackContext.Provider value={contextValue}>
      {children}
      <SODrawer {...drawerConfig} />
      <SOModal {...modalConfig} />
    </FeedbackContext.Provider>
  )
}
