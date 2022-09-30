import PetImage from "./PetImage";
import PetTitle from "./PetTitle";
import Tierart from "./Tierart";
import Geschlecht from "./Geschlecht";
import Rasse from "./Rasse";
import Alter from "./Alter";
import Tags from "./Tags";
const Animal = (props) => {
  //https://vorstadtcowboy.github.io/images/<name des pets  in kleinbuchstaben>.webp
  // console.log(props);
  //const{pet} =props; dann brauch ich in zeile 16 nur pet und name eine art code zu sparen, hier ist ein konkretes pet angesprochen
  //destrukturieren:
  console.log(props);
  const { name, species, geschlecht, race, birthday, tags } = props.pet;
  return (
    <div className="animal">
      {/* PetImage */}
      <PetImage name={name} />
      {/* PetTitle */}
      <PetTitle name={name} />

      <div className="animal_body">
        {/* Tierart Komponente */}
        <Tierart tierart={species} />
        {/* Geschlecht Komponente */}
        <Geschlecht geschlecht={geschlecht} />
        {/* Rasse Komponente */}
        <Rasse rasse={race} />
        {/* Komponente Alter */}
        <Alter birthday={birthday} />
        <Tags tags={tags} />
      </div>
    </div>
  );
};

export default Animal;
