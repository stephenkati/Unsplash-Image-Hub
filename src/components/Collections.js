import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from '../redux/CollectionsSlice';
import SingleCollection from './SingleCollection';
import unsplashImage from '../image/unsplash-img.jpg';

const Collections = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections())
  }, []);

  const collection = useSelector((state) => state.collections.collections);

  return (
    <div className="collection-container">
      <div className="collection-header">
        <img
          src={unsplashImage}
          alt="unsplash"
          loading="lazy"
        />
        <h1 className="header-title">Unsplash Collections</h1>
      </div>
      <div className="stats-by-country">
        <h2>Stats by Collection</h2>
      </div>
      <div className="collection-list">
        {
          collection.map((collection) => (
            <SingleCollection key={collection.id} collection={collection} />
          ))
        }
      </div>
    </div>
  )
}

export default Collections;
