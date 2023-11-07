const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const synth = window.speechSynthesis;
const greetingText = "Welcome what would you like to do today?";

document.addEventListener('keyup', (event) => {   //Start capturing voice input when mic button is clicked
  var name = event.key;
  if (name === 'q'){
    recognition.start();
  }
});

//Hardcoded balance
let balance = 250;

//Window.onload = greeting(greetingText);

recognition.onresult = (event) => {
  console.log("HAIII");

  const command = event.results[0][0].transcript.toLowerCase(); //Converts audio to text

  if (command === 'balance' || command === 'check balance') {
    console.log(`${balance}`);
    speak(`Your balance is ${balance} dollars`);

  } else if (command === 'deposit') {  
    speak('Please place cash in to the deposit slot');
    amtDeposit = 100; //Add in input field for deposit to show money has been put into the slot
    balance += amtDeposit;
    setTimeout(() => {
      speak(`Successfully deposited ${amtDeposit} dollars`); 
    }, 5000);
    
  } else if (command === 'withdraw') {
    speak('Enter amount you wish to withdraw on the PIN pad');
    //Add in atm pin pan on screen to allow user to select amount they wish to deposit.
    

   
  } else if (command === 'withdraw $50' || command === 'withdraw $100' || command === 'withdraw $20' ) { //withdrawing when amount is said
    let amount = parseInt(command.slice(10));
    speak(`Are you sure you want to withdraw ${amount} dollars`);
    console.log(amount);
    console.log(balance - amount);
   
  }
  else {
    //speak("I'm sorry I did not catch that please repeat");
    console.log(command);

  }

};

function speak(text) {
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.1;


  synth.speak(utterance);
}







  
