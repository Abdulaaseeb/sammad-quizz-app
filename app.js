// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import {
  getDatabase,
  ref,
  set,
  push,
  onChildAdded,
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';
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
var questions = [
  {
    question: 'Html stands for _____________',
    options: [
      'hyper markup',
      'JS',
      'hyper text markup language',
      'cascading style sheet',
    ],
    correctanswer: 'hyper text markup language',
  },
  {
    question: 'JS stands for _____________',
    options: ['java script', 'hyper text markup language', 'css', 'html'],
    correctanswer: 'java script',
  },
  {
    question: 'CSS stands for _____________',
    options: [
      'cascading style sheet',
      'hyper text markup language',
      'Java Script',
      'html',
    ],
    correctanswer: 'cascading style sheet',
  },

  {
    question: 'RAM stands for _____________',
    options: [
      'random access memoery',
      'hyper text markup language',
      'html',
      'html',
    ],
    correctanswer: 'random access memoery',
  },
  {
    question: 'ROM stands for _____________',
    options: ['read only memory', 'hyper text markup language', 'html', 'html'],
    correctanswer: 'read only memory',
  },
];
var number = document.getElementById('number');
var que = document.getElementById('no');
var disquestion = document.getElementById('question');
var opt = document.getElementById('opt');
var indexval = 0;
var marks = 0;

function render() {
  var obj = questions[indexval];
  disquestion.innerHTML = obj.question;
  opt.innerHTML = '';
  for (var i = 0; i < obj.options.length; i++) {
    opt.innerHTML += `<div id="ansr">
        <button onclick= " correct ('${obj.correctanswer}','${obj.options[i]}')"class="btn btn-outline-primary">${obj.options[i]}</button>
        </div>`;
    number.innerHTML = questions.length;
    que.innerHTML = indexval + 1;
  }
}
render();
function getdata() {
  const refference = ref(database, 'questions/');
  onChildAdded(refference, function (data) {
    console.log(data.val());
    questions.push(data.val());
    render();
  });
}
getdata();
function next() {
  if (indexval + 1 == questions.length) {
    alert('your marks is ' + marks);
    marks = 0;
    indexval = 0;
    render();
  } else {
    indexval++;
    render();
  }
}
window.correct = function (a, b) {
  if (a == b) {
    marks = marks + 1;
  }
  console.log(marks);

  next();
};
// render();
