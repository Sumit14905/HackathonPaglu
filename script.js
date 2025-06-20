function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('transcript').innerText = "Detected: " + transcript;

    // You can also send it to backend (Node.js)
    fetch('/submit-voice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: transcript })
    });
  };

  recognition.onerror = function (event) {
    console.error('Speech recognition error:', event.error);
  };
}
