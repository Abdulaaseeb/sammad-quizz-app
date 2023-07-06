// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getDatabase,ref,set,push} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2HiTWJuJ1o8PH8YjLcc5aC4iWDLhxw44',
  authDomain: 'samadquiz-670df.firebaseapp.com',
  projectId: 'samadquiz-670df',
  storageBucket: 'samadquiz-670df.appspot.com',
  messagingSenderId: '485188188827',
  appId: '1:485188188827:web:94bcc3ccdc0e286440a43e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

var question = document.getElementById('question');
var option = document.getElementById('option');
var correctanswerelem = document.getElementById('correctanswer');
var optionparent = document.getElementById('optionparent');
var options = [];
var correctanswer
function render() {
  optionparent.innerHTML = '';
  for (var i = 0; i < options.length; i++) {
    optionparent.innerHTML += `<li onclick="setcorrectanswer('${options[i]}')">${options[i]}</li>`;
  }
}
window.add = function () {
  options.push(option.value);
  console.log(options);
  render();
};
window.setcorrectanswer=function(a){
correctanswer=a
correctanswerelem.innerHTML=correctanswer
}
window.submitq=function(){
    var obj={
        question:question.value,
        options:options,
        correctanswer:correctanswer
    }
    obj.id=push(ref(database,'questions/')).key
    const refference=ref(database,`questions/${obj.id}`)
    set(refference,obj)
    console.log(obj)
}