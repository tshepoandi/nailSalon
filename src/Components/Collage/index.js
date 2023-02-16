import React from 'react';
import styled from 'styled-components';

const ImageCollage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  background-color: #000;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:10px;

  // &:hover {
  //   width:100%;
  //   height:100%;
  // } ==================>fix this
`;

const images = [
  'https://source.unsplash.com/random/300x300',
  'https://source.unsplash.com/random/400x400',
  'https://source.unsplash.com/random/500x500',
  'https://source.unsplash.com/random/600x600',
  'https://source.unsplash.com/random/700x700',
  'https://source.unsplash.com/random/800x800',
  'https://source.unsplash.com/random/900x900',
  'https://source.unsplash.com/random/1000x1000',
  'https://source.unsplash.com/random/1100x1100',
];

const ImageCollageComponent = () => {
  return (
    <ImageCollage>
      {images.map((src, index) => (
        <Image key={index} src={src} />
      ))}
    </ImageCollage>
  );
};

export default ImageCollageComponent;
