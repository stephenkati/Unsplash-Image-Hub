import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const collections = useSelector((state) => state.collections.collections);
  const params = useParams();
  const collection = collections.find((item) => item.title === params.collectionTitle);

  return (
    <div key={collection.title} className="details-page">
      <div className="details-header">
        {collection.cover_photo && (
          <img src={collection.cover_photo.urls.regular} alt={collection.title} />
        )}
        <h2>{collection.title}</h2>
      </div>
      <div className="collection-stats">
        <h3>Collection Stat&apos;s</h3>
      </div>
      <ul className="details-list">
        <li className="details-list-item">
          <span>Title</span>
          <span>{collection.title}</span>
        </li>
        {!collection.description && (
          <li className="details-list-item">
            <span>Description</span>
            <span>null</span>
          </li>
        )}
        {collection.description && (
          <li className="details-list-item">
            <span>Description</span>
            <span>{collection.description}</span>
          </li>
        )}
        <li className="details-list-item">
          <span>Total photos</span>
          <span>{collection.total_photos}</span>
        </li>
        <li className="details-list-item tag">
          <span>Tags</span>
          <div>
            {collection.tags && (
              <div className="tags">
                {
                  collection.tags.map((tag) => (
                    <div key={tag.id}>
                      <span>
                        {tag.title}
                        ,
                      </span>
                    </div>
                  ))
                }
              </div>
            )}
          </div>
        </li>
        <li className="details-list-item">
          <span>Photos in the collection</span>
          <span>
            Photos in
            {collection.links && (
              <a
                href={collection.links.html}
                target="_blank"
                rel="noreferrer"
                className="photos-link"
              >
                &quot;
                {' '}
                {collection.title}
                {' '}
                &quot;
              </a>
            )}
            collection
          </span>
        </li>
        <li className="details-list-item preview">
          <span>Preview Photos</span>
          <div>
            {collection.preview_photos && (
              <div className="image-container">
                {
                  collection.preview_photos.map((photo) => (
                    <img
                      key={photo.id}
                      src={photo.urls.regular}
                      alt={collection.title}
                    />
                  ))
                }
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Details;
