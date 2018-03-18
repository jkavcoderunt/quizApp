/*the ten question array*/
const q = [
  "Flying Circus became one of televisions most influential comedy series after making its premiere on October 5 of what year?",
  "Monty Python used the choreographer Arlene Phillips who also did the choreography for this feature film:",
  "For their TV show ,Flying Circus, the BBC had many title choices but not this one:",
  "The Python troup chose The Liberty Bell, by John Philip Souza, as their theme song because",
  "The giant foot in the open credits of The Flying Circus belong to:",
  "John Cleese left the Flying Circus after which season:",
  "Milligans first TV show before, Flying Circus,  was:",
  "A test sreening was held in New York for the film, The Meaning of Life, and had over 80 percent high school kids in the audience.  The majority of them walked out in disgust giving the film a reputation of the most negative respose EVER at a screening among Hollywood:",
  "The Pythons did almost ALL of their own stunts:",
  "John Cleese to this day HATES the troupe and refuses to talk about why he broke all ties with them."];

/*the first answer(option) array*/
const a1 = [
  "<button class=buttons002 onclick=q1i()>1968</button>",
  "<button class=buttons002 onclick=q2i()>Hairspray</button>",
  "<button class=buttons002 onclick=q3i()>Owl Stretching Time</button>",
  "<button class=buttons002 onclick=q4i()>It was a favorite of John Cleese</button>",
  "<button class=buttons002 onclick=q5i()>Lucifer</button>",
  "<button class=buttons002 onclick=q6i()>season 2</button>",
  "<button class=buttons002 onclick=q7c()>Q5</button>",
  "<button class=buttons002 onclick=q8c()>True</button>",
  "<button class=buttons002 onclick=q9i()>There were no stunts</button>",
  "<button class=buttons002 onclick=q10i()>Only Half</button>"];

/*the second answer(option) array*/
const a2 = [
  "<button class=buttons002 onclick=q1c()>1969</button>",
  "<button class=buttons002 onclick=q2i()>Cabaret</button>",
  "<button class=buttons002 onclick=q3i()>The Toad Elevating Moment</button>",
  "<button class=buttons002 onclick=q4c()>It was free under public domain</button>",
  "<button class=buttons002 onclick=q5i()>Queen Elizabeth</button>",
  "<button class=buttons002 onclick=q6i()>season 3</button>",
  "<button class=buttons002 onclick=q7i()>The Monkeys</button>",
  "<button class=buttons002 onclick=q8i()>False</button>",
  "<button class=buttons002 onclick=q9c()>True</button>",
  "<button class=buttons002 onclick=q10i()>True</button>"];

/*the third answer(option) array*/
const a3 = [
  "<button class=buttons002 onclick=q1i()>1978</button>",
  "<button class=buttons002 onclick=q2c()>Annie</button>",
  "<button class=buttons002 onclick=q3c()>Lucifer and His Heavy Foot</button>",
  "<button class=buttons002 onclick=q4i()>Terry Jones owned the rights to it</button>",
  "<button class=buttons002 onclick=q5c()>Cupid</button>",
  "<button class=buttons002 onclick=q6c()>season 4</button>",
  "<button class=buttons002 onclick=q7i()>Dr Who</button>",
  "<button class=buttons002 onclick=q8i()>Maybe</button>",
  "<button class=buttons002 onclick=q9i()>Thats illegal in Britain</button>",
  "<button class=buttons002 onclick=q10i()>Cleese never was in the Python troup</button>"];

/*the fourth answer(option) array*/
const a4 = [
  "<button class=buttons002 onclick=q1i()>1979</button>",
  "<button class=buttons002 onclick=q2i()>Grease</button>",
  "<button class=buttons002 onclick=q3i()>The Algy Banging Hour</button>",
  "<button class=buttons002 onclick=q4i()>The Queen requested it</button>",
  "<button class=buttons002 onclick=q5i()>Zues</button>",
  "<button class=buttons002 onclick=q6i()>season 5</button>",
  "<button class=buttons002 onclick=q7i()>Doc Martin</button>",
  "<button class=buttons002 onclick=q8i()>That was never a film title of The Pythons</button>",
  "<button class=buttons002 onclick=q9i()>False</button>",
  "<button class=buttons002 onclick=q10c()>False</button>"];

/*the 'correct' and 'incorrect' arrays for displaying after each question is answered*/
const c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct"];
const i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

/*these are variables to incriment the question Number and Score*/
let n = 0;
n++;
let s = 0;
s++;

/*hides the 'begin' button and displays the first question and 4 options. it also starts the question Number count*/
function begin001() {
  disappear001.innerHTML = "";
  message001.innerHTML = "";
  question001.innerHTML = q[0];
  option001.innerHTML = a1[0];
  option002.innerHTML = a2[0];
  option003.innerHTML = a3[0];
  option004.innerHTML = a4[0];
  number001.innerHTML = n++;
}

/*if the answer is correct. displays green 'corect',  next button and starts the Score counter*/
function q1c() {
  answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
  score001.innerHTML = s++;
}

/*if the answer is incorrect.  displays red 'incorrect', next button*/
function q1i() {
  answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
}


function new002() {
  question001.innerHTML = q[1];
  option001.innerHTML = a1[1];
  option002.innerHTML = a2[1];
  option003.innerHTML = a3[1];
  option004.innerHTML = a4[1];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

function q2c() {
  answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
  score001.innerHTML = s++;
}

function q2i() {
  answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
}

function new003() {
  question001.innerHTML = q[2];
  option001.innerHTML = a1[2];
  option002.innerHTML = a2[2];
  option003.innerHTML = a3[2];
  option004.innerHTML = a4[2];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

function q3c() {
  answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
  score001.innerHTML = s++;
}

function q3i() {
  answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
}

function new004() {
  question001.innerHTML = q[3];
  option001.innerHTML = a1[3];
  option002.innerHTML = a2[3];
  option003.innerHTML = a3[3];
  option004.innerHTML = a4[3];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

function q4c() {
  answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
  score001.innerHTML = s++;
}

function q4i() {
  answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
}

function new005() {
  question001.innerHTML = q[4];
  option001.innerHTML = a1[4];
  option002.innerHTML = a2[4];
  option003.innerHTML = a3[4];
  option004.innerHTML = a4[4];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

function q5c() {
  answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
  score001.innerHTML = s++;
}

function q5i() {
  answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
}

function new006() {
  question001.innerHTML = q[5];
  option001.innerHTML = a1[5];
  option002.innerHTML = a2[5];
  option003.innerHTML = a3[5];
  option004.innerHTML = a4[5];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

function q6c() {
  answer001.innerHTML = "<div id=green001>" + c[5] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
  score001.innerHTML = s++;
}

function q6i() {
  answer001.innerHTML = "<div id=red001>" + i[5] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
}

function new007() {
  question001.innerHTML = q[6];
  option001.innerHTML = a1[6];
  option002.innerHTML = a2[6];
  option003.innerHTML = a3[6];
  option004.innerHTML = a4[6];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

function q7c() {
  answer001.innerHTML = "<div id=green001>" + c[6] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
  score001.innerHTML = s++;
}

function q7i() {
  answer001.innerHTML = "<div id=red001>" + i[6] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
}

function new008() {
  question001.innerHTML = q[7];
  option001.innerHTML = a1[7];
  option002.innerHTML = a2[7];
  option003.innerHTML = a3[7];
  option004.innerHTML = a4[7];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

function q8c() {
  answer001.innerHTML = "<div id=green001>" + c[7] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
  score001.innerHTML = s++;
}

function q8i() {
  answer001.innerHTML = "<div id=red001>" + i[7] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
}

function new009() {
  question001.innerHTML = q[8];
  option001.innerHTML = a1[8];
  option002.innerHTML = a2[8];
  option003.innerHTML = a3[8];
  option004.innerHTML = a4[8];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

function q9c() {
  answer001.innerHTML = "<div id=green001>" + c[8] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
  score001.innerHTML = s++;
}

function q9i() {
  answer001.innerHTML = "<div id=red001>" + i[8] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
}

function new010() {
  question001.innerHTML = q[9];
  option001.innerHTML = a1[9];
  option002.innerHTML = a2[9];
  option003.innerHTML = a3[9];
  option004.innerHTML = a4[9];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

function q10c() {
  answer001.innerHTML = "<div id=green001>" + c[9] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
  score001.innerHTML = s++;
}

function q10i() {
  answer001.innerHTML = "<div id=red001>" + i[9] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
}

/*end of quiz displayed with a repeat button wich runs the repeat001 function*/
function end001() {
  message001.innerHTML = "End of Quiz.";
  question001.innerHTML = "";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
  answer001.innerHTML = "";
}

/*reloads the program*/
function repeat001() {
  location.reload();
}
