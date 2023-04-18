import React from 'react';
import { useSelector } from 'react-redux';

const Photos = () => {
  const photos = useSelector((state) => state.photos.photos);
  console.log(photos)

  return (
    <div>
      {
        photos.map((photo) => (
          <li key={photo.id}>
            <span> likes = {photo.likes} </span>
            <span>
              {
                photo.alt_description
              }
            </span>
            <img src={photo.urls.regular} alt={photo.alt_description} />
          </li>
        ))
      }
    </div>
  )
};

export default Photos;
