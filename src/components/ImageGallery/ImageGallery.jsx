import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export function ImageGallery({ items, onPicture }) {
  return (
    <StyledImageGallery className="img-gallery">
      {items.map(item => {
      //function component
        return <ImageGalleryItem key={item.id} item={item} onPicture={onPicture} />;
      })}
    </StyledImageGallery>
  );
}
