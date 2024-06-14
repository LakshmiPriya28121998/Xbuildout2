import React from "react";
import { useState, useEffect } from "react"

const customDictionary = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

    export default function Dictionary(props){


const [inputText, setInputText] = useState("");
const [definition, setDefinition] = useState("");
const [flag, setFlag] = useState(true);

const handleInput = (e) => {
    setInputText(e.target.value)
}


  const handleClick = (e) => {
    e.preventDefault();
    setFlag(false);
    const words = inputText.split(" ");
    console.log(words)
    const correctedWords = words.map((word) => {
        let res = customDictionary.find((word) => word.word.toLowerCase() === inputText.toLowerCase());
    //   return res || word;
    if(res){
        setDefinition(res.meaning);
        setFlag(true);
    }
    });

    // const correctedText = correctedWords.join(" ");

    // const firstCorrection = correctedWords.find(
    //   (word, index) => word !== words[index]
    // );
    // setSuggestedText(firstCorrection || "")
  };

    return (
      <div>
        <h1>Dictionary App</h1>
    
             <form>
            <input type="text" placeholder="Search for a word" value={inputText} onChange={handleInput}/>
            <button onClick={handleClick}>Search</button>
        </form>
        <h3>Definition:</h3>
        {flag ? <p>{definition}</p> : <p>Word not found in the dictionary.</p>}
      </div>
    );

}

