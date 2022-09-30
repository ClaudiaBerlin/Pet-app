//sfc stateless functional komponent zustandslose funktionale komponente mit properties (props)
const Title = (props) => {
  console.log(props);
  return <h1>{props.content}</h1>;
  // content ist property und dann immer mit geschweifter klammer siehe app.js zeile 9
};

export default Title;
