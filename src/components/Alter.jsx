import ageConverter from "../ageConverter";

const Alter = ({ birthday }) => {
  return (
    <div>
      <span className="label">Alter:</span>
      <span className="entry">{ageConverter(birthday)}</span>
    </div>
  );
};

export default Alter;
