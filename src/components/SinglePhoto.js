import React from 'react'
import { fetchPhotos } from '../redux/PhotosSlice';
import { useDispatch, useSelector } from 'react-redux';

const SinglePhoto= ({image}) => {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.photos.photos);
  console.log(photos);

  return (
    <div style={{padding: '1em'}}>
      <div style={{color: 'white'}}> id = {image.id} </div>
      <div> title = {image.title} </div>
      <div style={{color: 'green'}}> images = {image.total_photos} </div>
      <div style={{color: 'yellow'}}> cover photo likes = {image.cover_photo.likes} </div>
      <button
        type="button"
        onClick={() => {
          console.log(image.id);
          dispatch(fetchPhotos(image.id));
        }}
      >
        See Photos
      </button>
    </div>
  );
}

export default SinglePhoto;
