const PetImage = (props) => {
  const ImageUrl = `https://vorstadtcowboy.github.io/images/${props.name.toLowerCase()}.webp`;
  // das ist ein stringliteral oben
  // zweite Schreibweise
  // const src = "https://vorstadtcowboy.github.io/images/"+ props.name.to.LowerCase + ".webp"

  return (
    <div className="animal_image">
      <img className="entry" src={ImageUrl} alt={props.name} />
    </div>
  );
};

export default PetImage;
