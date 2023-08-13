import React, { Component } from 'react';
import { StyledApp } from './AppStyled';
import { Searchbars } from './Searchbar/Searchbar';

import { imagesFetch } from 'components/Api';
import { Style } from './Style';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

const perPage = 12;

export class App extends Component {
  state = {
     name: '',
    images: [],
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { name, page } = this.state;

    if (prevState.name !== name) {
      try {
        this.setState({ isLoading: true });

        const response = await imagesFetch(name, page, perPage);
        this.setState({ images: response.data.hits });
        if (response.data.totalHits > perPage) {
          this.setState({
            showLoadMoreBtn: true,
          });
        }
      } catch (error) {
      } finally {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000);
      }
    }
    if (prevState.name === name && prevState.page !== page) {
      try {
        this.setState({ isLoading: true });

        const response = await imagesFetch(name, page, perPage);
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: this.state.page,
        }));
        console.log(response);
        if (response.data.totalHits > this.state.page * perPage) {
          this.setState({
            showLoadMoreBtn: true,
          });
        } else {
          this.setState({
            showLoadMoreBtn: false,
          });
        }
      } catch (error) {
      } finally {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000);
      }

      console.log('Апдейт PAGE');
    } else if (
      prevState.name !== name &&
      prevState.page !== page
    ) {
      console.log('Привіт');
    }
  }

  onSubmit = search => {
    this.setState({ name: search, page: 1 });
  };

  onLoadMoreClick = async search => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onPicture = index => {
    const { images } = this.state;
    const picture = images.filter(image => image.id === +index);

    this.onClickModalOpen();
    this.setState({ largeImageURL: picture[0].largeImageURL });
  };

  onClickModalOpen = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { images, isLoading, showLoadMoreBtn, showModal, largeImageURL } =
      this.state;

    return (
      <StyledApp>
         <Searchbars
          onSubmit={this.onSubmit}
          onLoadMoreClick={this.onLoadMoreClick}
          items={images}
          showLoadMoreBtn={showLoadMoreBtn}
          onPicture={this.onPicture}
        />
        {showModal && (
          <Modal onCloys={this.onClickModalOpen}>
            {<img src={largeImageURL} alt={this.alt}></img>}
          </Modal>
        )}
        <Style />
        <Loader isLoading={isLoading} />
      </StyledApp>
    );
  }
}
