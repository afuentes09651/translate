import React, {useState} from 'react';
import translate from "translate";

translate.engine = 'libre';


function Input(){

  const [input, setInput] = useState('');
  const [result, setResult] = useState('testing');
  const [langOut,setLangOut] = useState('es');

  async function execTrans(e) {
    e.preventDefault();
    const en = input; //english by default for now
    const translation = await translate(en, 'fr');
    console.log('translated!', translation); //for debbugging
    setResult(translation);
  }

  function handleChange(e){
    setInput(e.target.value);
    console.log(input); //debugging
  }

return(
<>
<form
  onSubmit={execTrans}>
  <label htmlFor='selectLangOut'>Select Language Output</label>
  <select id='selectLangOut'>
    <option value='es' defaultValue>Spanish</option>
    <option value='fr'>French</option>
    <option value='de'>German</option>
    <option value='ja'>Japanese</option>
  </select>
  <label htmlFor='userInput'>Enter here:</label>
    <textarea
      rows='4'
      columns='50'
      maxLength='300'
      placeholder='Enter English Here'
      id='userInput'
      value={input}
      onChange={handleChange}></textarea>
    <input type='submit' value='submit'/>
</form>

  <p>{result}</p>
</>
);

}


export default Input;
