import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function VoiceSearchComponent() {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [voiceSearch, setVoiceSearch] = useState("");

  useEffect(() => {
    if (transcript) {
      setVoiceSearch(transcript);
    }
  }, [transcript]);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'bn-IN' }); // Bengali language code
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div>
      <h1>Voice Search for Bengali Listings</h1>
      <button onClick={startListening} disabled={listening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!listening}>
        Stop Listening
      </button>
      <p>Detected Voice: {voiceSearch}</p>
      <button onClick={resetTranscript}>Reset</button>
    </div>
  );
}

export default VoiceSearchComponent;
