import React, { useEffect, useState } from 'react';
import './DefinitionCard.scss';
function DefinitionCard({ audio,partOfSpeech,definition,example }) {
    const playAudio = () => {
        const audioElement = new Audio(audio);
        audioElement.play();
      };
      

  return (
        <div>

<article class="information [ card ]">
    <span class="tag">{partOfSpeech}</span>
    <h2 class="title">Def : {definition}</h2>
    <p class="info"> Example : {example ? example : 'Not available'}</p>
    <button class="button" onClick={playAudio}>
        <span>Listen To Audio</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
        </svg>
    </button>
</article>

</div>
    
  );
}

export default DefinitionCard;
