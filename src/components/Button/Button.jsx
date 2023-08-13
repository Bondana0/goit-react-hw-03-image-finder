import React, { Component } from 'react';
import { StyledButton } from './Button.styled';

export class Button extends Component {
  onBtnClick = evt => {
    console.log(evt);
    this.props.onClick();
  };

  render() {
    return (
      <StyledButton type="button" onClick={this.onBtnClick}>
        Load more
      </StyledButton>
    );
  }
}
