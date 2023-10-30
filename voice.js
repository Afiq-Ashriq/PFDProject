const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const synth = window.speechSynthesis;
const greetingText = "Welcome what would you like to do today?";


const micBtn = document.querySelector('#mic'); 
micBtn.addEventListener('click', () => {
  recognition.start();
});

let balance = 250;
//Window.onload = greeting(greetingText);

recognition.onresult = (event) => {
  console.log("HAIII");

  const command = event.results[0][0].transcript.toLowerCase();

  if (command === 'balance' || command === 'check balance') { 
    console.log(`${balance}`);
    speak(`Your balance is ${balance} dollars`);

  } else if (command === 'deposit') {  
    speak('Please place cash in to the deposit slot');
    
    
  } else if (command === 'withdraw') {
    speak('Enter amount you wish to withdraw on the PIN pad');

   
  } else {
    //speak("I'm sorry I did not catch that please repeat");

  }

};

function speak(text) {
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.1;

  synth.speak(utterance);
}






  
