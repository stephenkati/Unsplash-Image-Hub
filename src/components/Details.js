import { useSelector } from 'react-redux';

const Details = () => {
  const details = useSelector((state) => state.collectionDetails.collectionDetails);

  return (
    <div key={details.title} className="details-page">
      <div className="details-header">
        {details.cover_photo && (
          <img src={details.cover_photo.urls.regular} alt={details.title} />
        )}
        <h2>{details.title}</h2>
      </div>
      <div className="collection-stats">
        <h3>Collection Stat&apos;s</h3>
      </div>
      <ul className="details-list">
        <li className="details-list-item">
          <span>Title</span>
          <span>{details.title}</span>
        </li>
        {!details.description && (
          <li className="details-list-item">
            <span>Description</span>
            <span>null</span>
          </li>
        )}
        {details.description && (
          <li className="details-list-item">
            <span>Description</span>
            <span>{details.description}</span>
          </li>
        )}
        <li className="details-list-item">
          <span>Total photos</span>
          <span>{details.total_photos}</span>
        </li>
        <li className="details-list-item tag">
          <span>Tags</span>
          <div>
            {details.tags && (
              <div className="tags">
                {
                  details.tags.map((tag) => (
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
            {details.links && (
              <a
                href={details.links.html}
                target="_blank"
                rel="noreferrer"
                className="photos-link"
              >
                &quot;
                {' '}
                {details.title}
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
            {details.preview_photos && (
              <div className="image-container">
                {
                  details.preview_photos.map((photo) => (
                    <img
                      key={photo.id}
                      src={photo.urls.regular}
                      alt={details.title}
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
