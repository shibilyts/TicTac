import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const CustomModal = ({
  modalVisibility,
  setModalVisibility,
  children,
  closeButtonView,
  closeButtonStyles,
  onDismiss,
  backdropOpacity,
  modalStyle,
  ...props
}) => {
  return (
    <Modal
      style={modalStyle}
      isVisible={modalVisibility}
      coverScreen={true}
      onBackButtonPress={onDismiss}
      onBackdropPress={onDismiss}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      hasBackdrop
      backdropOpacity={backdropOpacity}
      {...props}>
      {children}
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  closeButtonStyle: {
    position: 'absolute',
    right: 20,
    top: 30,
  },
});
