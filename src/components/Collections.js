import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from '../redux/CollectionsSlice';
import SinglePhoto from './SinglePhoto';

const Collections = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections())
  }, []);

  const collection = useSelector((state) => state.collections.collections);

  return (
    <div>
      {
        collection.map((image) => (
          <SinglePhoto key={image.id} image={image} />
        ))
      }
    </div>
  )
}

export default Collections;
