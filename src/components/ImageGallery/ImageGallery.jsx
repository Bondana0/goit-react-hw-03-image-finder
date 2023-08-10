import PropTypes from 'prop-types';
import { ImageAlbumItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export const ImageAlbum = ({ items, openModal }) => {
  return (
    <>
      {items && (
        <ul className={css.gallery}>
          <ImageAlbumItem items={items} openModal={openModal} />
        </ul>
      )}
    </>
  );
};

ImageAlbum.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
