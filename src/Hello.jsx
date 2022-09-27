// sfc befehl ausführen, eine komponente in React bitte immer in Großbuchstaben beginnen

const  Hello = (props) => {
    const greeting = "Ola"
    // die komponenente gibt ein h1 Element zurück
    return (
        <div>
        {/* <h1>Hallo Welt</h1> ; */}
        {greetings}{props.name}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas corrupti nobis pariatur nisi corporis expedita ipsam error molestiae minus eligendi. Dolorem rem officiis nihil adipisci nostrum quisquam exercitationem dolorum blanditiis.</p>
        </div>
    )

  
   
}
 
// exportiert die komponenente
export default Hello;

// npx create-react-app <name des prokekts>