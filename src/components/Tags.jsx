const Tags = ({ tags }) => {
  // console.log(tags);
  const tagListe = tags.map((tag, index) => <p key={index}> {tag}</p>);
  return (
    <div>
      <span className="label">Tags:</span>
      <span className="entry">{tagListe}</span>
    </div>
  );
};

export default Tags;
