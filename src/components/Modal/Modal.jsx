import React, { Component } from 'react';
import { StyleModalBackdrop, StyleModal } from './Modal.styled';
export class Modal extends Component {
handleKeyDown = evt => {
    if (evt.code === `Escape`) {
      this.props.onCloys();
    }
  };
  onClickOverlay = evt => {
    if (evt.target.id === 'backDrop') {
      this.props.onCloys();
    }
    return;
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  };
  render() {
    return (
      <>
        {
          <StyleModalBackdrop id="backDrop" onClick={this.onClickOverlay}>
            <StyleModal>{this.props.children}</StyleModal>
          </StyleModalBackdrop>
        }
      </>
    );
  }
}
