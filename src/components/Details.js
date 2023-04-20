import { useSelector } from "react-redux";

const Details = () => {
  const details = useSelector((state) => state.collectionDetails.collectionDetails);
  console.log(details)

  return (
    <div style={{color:"white"}} key={details.title}>
      <div><img src={details.cover_photo.urls.regular} /> </div>
      <div>Title: {details.title}</div>
      {!details.description && (
        <div>
          Description: null
        </div>
      )}
      {details.description && (
        <div>
          Description: {details.description}
        </div>
      )}
      <div>Number of images: {details.total_photos}</div>
      <div>
        Tags:
        {
          details.tags.map((tag) => (
            <p key={tag.id}>
              {tag.title}
            </p>
          ))
        }
      </div>
      <div>
        Photos in the collection:
        <a href={details.links.html} target="_blank" rel="noreferrer">Photos in "{details.title}" collection</a>
      </div>
      <div>Share Key: {details.share_key}</div>
      <div>
        Preview Photos:
        {
          details.preview_photos.map((photo) => (
            <p key={photo.id}>
              <img src={photo.urls.regular} style={{width: "10%"}} alt={details.title} />
            </p>
          ))
        }
      </div>
    </div>
  );
};

export default Details;
