import React from 'react';
import { useSelector } from 'react-redux';
import { MdOutlineArrowCircleRight } from 'react-icons/md';

const Photos = () => {
  const photos = useSelector((state) => state.photos.photos);
  console.log(photos)

  return (
    <div className="photos-list">
      {
        photos.map((photo) => (
          <li key={photo.id}>
            <span className="description">
              {
                photo.alt_description
              }
            </span>
            <div className="like-redirect">
              <span className="photo-likes"> {photo.likes} Likes </span>
              <span>
                <MdOutlineArrowCircleRight
                  className="redirect"
                />
              </span>
            </div>
            {/* <img src={photo.urls.regular} alt={photo.alt_description} /> */}
          </li>
        ))
      }
    </div>
  )
};

export default Photos;
