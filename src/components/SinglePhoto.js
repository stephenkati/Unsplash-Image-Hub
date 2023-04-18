import React from 'react'
import { fetchPhotos } from '../redux/PhotosSlice';
import { useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';

const SinglePhoto= ({collection}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchPhotos(collection.id));
  };

  return (
    <NavLink
      to="/photos"
      onClick={handleClick}
    >
      <div style={{padding: '1em'}}>
        <div style={{color: 'white'}}> id = {collection.id} </div>
        <div> title = {collection.title} </div>
        <div style={{color: 'green'}}> collections = {collection.total_photos} </div>
        <div style={{color: 'yellow'}}> cover photo likes = {collection.cover_photo.likes} </div>
      </div>
    </NavLink>
  );
}

export default SinglePhoto;
