import React from 'react'
import { fetchCollectionDetails } from '../redux/DetailsSlice';
import { useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowCircleRight } from 'react-icons/md';
import '../App.css';

const SingleCollection= ({collection}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCollectionDetails(collection.id));
  };
  // console.log(collection)
  return (
    <NavLink
      to="/details"
      className="collection-link"
    >
      <div 
        onClick={handleClick}
        className="collection"
      >
        <MdOutlineArrowCircleRight
          className="arrow"
        />
        <img 
          src={collection.cover_photo.urls.regular}
          alt={collection.title}
          className="collection-img"
        />
        <div className="collection-title">
          {collection.title}
        </div>
        <div className="cover-likes">
          {collection.total_photos}
        </div>
      </div>
    </NavLink>
  );
}

export default SingleCollection;
