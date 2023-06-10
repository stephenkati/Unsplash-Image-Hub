import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowCircleRight } from 'react-icons/md';
import { fetchCollections } from '../redux/CollectionsSlice';
import unsplashImage from '../image/shinny-hand.png';

const Collections = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const handlePrevious = () => setPage(page - 1);
  const handleNext = () => setPage(page + 1);

  useEffect(() => {
    dispatch(fetchCollections(page));
  }, [dispatch, page]);

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
        />
        <h1 className="header-title">Unsplash Collections</h1>
      </div>
      <div className="stats-by-collection">
        <h2>Stats by Collection</h2>
      </div>
      <div className="collection-list">
        {
          collection
            .filter((collection) => (search.toLowerCase() === ''
              ? collection
              : collection.title.toLowerCase().includes(search)))
            .map((collection) => (
              <NavLink
                to={`/details/${encodeURIComponent(collection.title)}`}
                className="collection-link"
                key={collection.id}
              >
                <div
                  role="button"
                  tabIndex={0}
                  className="collection"
                >
                  <MdOutlineArrowCircleRight
                    className="arrow"
                  />
                  <img
                    src={collection.cover_photo.urls.small}
                    alt={collection.title}
                    className="collection-img"
                    loading="lazy"
                  />
                  <div className="collection-title">
                    {collection.title}
                  </div>
                  <div className="cover-likes">
                    {collection.total_photos}
                  </div>
                </div>
              </NavLink>
            ))
        }
      </div>
      <div className="page">
        {page > 1 && (
          <span
            role="button"
            tabIndex={0}
            onClick={handlePrevious}
            onKeyDown={handlePrevious}
          >
            Prev
          </span>
        )}
        {page}
        <span
          role="button"
          tabIndex={0}
          onClick={handleNext}
          onKeyDown={handleNext}
        >
          Next
        </span>
      </div>
    </div>
  );
};

export default Collections;
