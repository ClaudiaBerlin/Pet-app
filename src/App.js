//sfc befehl eingeben ist wie doctype in react müssen wir classNameName für className sagen

import Animal from "./components/Animal";
import Title from "./components/Title";
// import animalData from "./animalData";
import { useState, useEffect } from "react";
import axios from "axios";
//const [pending, setpending] ="true"

//import des React Hooks useState

const App = () => {
  //console.log(animalData[0]);

  //Use State benutzen (wenn sich ein Wert ändert) usf tippen
  const [counter, setCounter] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledBack, setDisabledBack] = useState(true);
  const [animalData, setAnimalData] = useState(null);

  //useEffect benutzen (bei side Effect) eingeben uef
  useEffect(() => {
    //das ist ein guter Ort um später Daten zu fetchen
    // title ändern
    // document.title =
    //   "Hilf " + animalData[counter].species + " " + animalData[counter].name; //Hilf tierart und

    //**wir holen uns die Daten von unserer REST Api
    axios
      .get("http://localhost:1234/animals")
      .then((response) => setAnimalData(response.data));
    //.then((response) => console.log(response.data));
    //.then((response) => console.log(response.data.result));
  }, [counter]);

  //EventHandler-function
  //EventHandler-function
  //let counter = 0;
  function handleNext() {
    if (counter < animalData.length - 1) {
      setCounter(counter + 1);
      setDisabledBack(false);
    }
    if (counter + 1 == animalData.length - 1) {
      setDisabledNext(true);
    }
  }

  function handleBack() {
    if (counter != 0) {
      setCounter(counter - 1);
      setDisabledNext(false);
    }
    if (counter - 1 == 0) {
      setDisabledBack(true);
    }
  }
  //alle Katzen

  // const zahlenUnterZehn = zahlen.filter((zahl) => zahl < 10);
  // const katze = animalData.filter((species = "Katze") => <Animal pet={Katze} />);
  // const alleKatzen = animalData.map((pet) => <Animal pet={pet} />);
  // const allePets = animalData.map((pet) => <Animal pet={pet} />);

  return (
    <div>
      <div className="wrapper">
        {/**komponente Titel erstellen */}
        <Title content="Hunde & Katzen" />

        {/* content ist eine Property also ein props */}
        {animalData && <Animal pet={animalData[counter]} />}

        <div className="controls">
          <button id="pre" onClick={handleBack} disabled={disabledBack}>
            zurück {counter}
          </button>
          <button id="next" onClick={handleNext} disabled={disabledNext}>
            vor {counter}
          </button>
        </div>
      </div>
      {/*Hier eine Sektion mit allen Tieren
      <section>
        <h2>Alle Tiere</h2>
        <div className="row">{allePets}</div>
        {/* <Animal pet={animalData[1]} />
        <Animal pet={animalData[2]} />
        <Animal pet={animalData[3]} />
        <Animal pet={animalData[4]} />
        <Animal pet={animalData[5]} /> 
      </section>

      <section>
        <h2>Alle Katzen</h2>
        <div className="row">{alleKatzen}</div>
      </section>*/}
    </div>
  );
};

export default App;
