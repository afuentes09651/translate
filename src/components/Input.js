import React, {useState} from 'react';
import translate from "translate";

translate.engine = 'libre';


function Input(){

  const [input, setInput] = useState('');
  const [result, setResult] = useState('testing');

  async function execTrans() {
    const en = input;
    const spanish = await translate(en, "es");
    setResult(spanish);
  }

  function handleChange(e){
    setInput(e.target.value);
    console.log(input);
  }

return(
<>
  <textarea
    rows='4'
    columns='50'
    maxLength='300'
    placeholder='Enter English Here'
    id='english'
    onChange={handleChange}></textarea>
  <button onClick={execTrans}>Click me</button>
  <p>{result}</p>
</>
);

}


export default Input;
