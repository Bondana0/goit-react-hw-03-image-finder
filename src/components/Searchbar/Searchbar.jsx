import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

import React, { Component } from 'react';
import {
  StyleSearchbar,
  StyleSearchForm,
  StyleButton,
  StyledButtonLable,
  StyleSerchInput,
} from './Searchbar.styled';

export class Searchbars extends Component {
  state = {
    name: '',
  };

  handleInputChange = evt => {
    this.setState({ name: evt.target.value });
  };

  onSubmit = evt => {
    const name = this.state.name.trim();

    evt.preventDefault();
    this.props.onSubmit(name);
  };

  onLoadMoreClick = name => {
    name = this.state.name;
    console.log(name);

    this.props.onLoadMoreClick(name);
  };

  render() {
    const { search } = this.state;

    const { items, showLoadMoreBtn, onPicture } = this.props;

    return (
      <>
        <StyleSearchbar>
          <StyleSearchForm onSubmit={this.onSubmit}>
            <StyleButton type="submit">
              <StyledButtonLable>Search</StyledButtonLable>
            </StyleButton>

            <StyleSerchInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleInputChange}
              value={search}
            />
          </StyleSearchForm>
        </StyleSearchbar>

        <ImageGallery items={items} onPicture={onPicture} />
        {showLoadMoreBtn && <Button onClick={this.onLoadMoreClick} />}
      </>
    );
  }
}
