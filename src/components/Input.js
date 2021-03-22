import React, {useState} from 'react';
import translate from "translate";

translate.engine = 'libre';


function Input(){

  const [input, setInput] = useState('');
  const [result, setResult] = useState('testing');

  async function execTrans(e) {
    e.preventDefault(); //we dont want to refresh
    console.log('Translated to: ',e.target.langTo.value); //debugging
    console.log('Translated from: ', e.target.langFrom.value);
    console.log('Text: ', input);

    //lets get our language info so we know how to translate the
    const langTo = e.target.langTo.value;
    const LangFrom = e.target.langFrom.value;

    const translation = await translate(input, {to: langTo, from: langFrom});
    console.log('translated!', translation); //for debbugging
    setResult(translation);
  }

  function handleChange(e){
    setInput(e.target.value);
  }

return(
<>
<form
  onSubmit={execTrans}>
  <label htmlFor='langTo'>Select Language Output: </label>

  <select id='langTo'>
    <option value='es' defaultValue>Spanish</option>
    <option value='en' >English</option>
    <option value='fr'>French</option>
    <option value='de'>German</option>
    <option value='ja'>Japanese</option>
  </select>

  <select id='langFrom'>
    <option value='en' defaultValue>English</option>
    <option value='es'>Spanish</option>
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

<label htmlFor='output'>Output: </label>
  <p id='output'>{result}</p>
</>
);

}


export default Input;
