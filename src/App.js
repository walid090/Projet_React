import React, { useEffect, useState } from 'react';
import SearchBar from './Compement/SearchBar';
import DefinitionCard from './Compement/DefinitionCard';

function App() {
  const [data, setData] = useState(null);
  const [audio, setAudio] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = (value) => {
    setSearchValue(value);
    fetchDictionary(value);
  };

  const fetchDictionary = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      GetAudio(data);
    } catch (error) {
      console.error('Error fetching the dictionary data:', error);
      setData(null);
    }
  };
  
  const GetAudio = (data) => {
    if (data && data[0] && data[0].phonetics) {
      const audioUrl = data[0].phonetics.find(item => item.audio)?.audio || '';
      setAudio(audioUrl);
    }
  };

  return (
    <div className="row container mt-5 ">
      <SearchBar onSearch={handleSearchValueChange}    />
      <div className='mt-5'>
        {data && data.map((word, index) => (
          <div key={index}>
            {word.meanings.map((meaning, meaningIndex) => (
              <div key={meaningIndex} className="row">
                {meaning.definitions.map((definition, definitionIndex) => (
                  <div key={definitionIndex} className="col-4">
                    {(
                      <DefinitionCard
                        audio={audio} 
                        partOfSpeech={meaning.partOfSpeech}
                        definition={definition.definition}
                        example={definition.example}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
