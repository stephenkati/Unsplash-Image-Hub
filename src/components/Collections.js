import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from '../redux/CollectionsSlice';
import SingleCollection from './SingleCollection';
import unsplashImage from '../image/shinny-hand.png';

const Collections = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCollections())
  }, [dispatch]);

  const collection = useSelector((state) => state.collections.collections);

  return (
    <div className="collection-container">
        <div className="search">
          <form>
            <input
              type="text"
              placeholder="Search collection name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      <div className="collection-header">
        <img
          src={unsplashImage}
          alt="unsplash"
          // loading="lazy"
        />
        <h1 className="header-title">Unsplash Collections</h1>
      </div>
      <div className="stats-by-collection">
        <h2>Stats by Collection</h2>
      </div>
      <div className="collection-list">
        {
          collection
          .filter((collection) => {
            return search.toLowerCase() === ''
            ? collection
            : collection.title.toLowerCase().includes(search);
          })
          .map((collection) => (
            <SingleCollection key={collection.id} collection={collection} />
          ))
        }
      </div>
    </div>
  )
}

export default Collections;
