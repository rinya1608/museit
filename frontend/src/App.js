import React, {useEffect, useState} from "react";

function App() {

  const [text, setText] = useState('no hello')
  async function getT(){
    const response = await fetch('/api/hello');
    const body = await response.json();
    setText(body.text)
  }

  useEffect(() => {
    getT().then(r => console.log('error'))
  },[])

  return (
    <div className="App">
      <h1>{text}</h1>
    </div>
  );
}

export default App;
