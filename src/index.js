import * as zombieScript from "./zombie.js";
import * as civilianScript from "./civilian.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


window.onload = () => {
  document.getElementById('roleChooser').addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    // const zombie = document.getElementById("zombie").value;
    // const civilian = document.getElementById("civilian").value;
    if(role === "zombie") {
      zombieBuilder(name);
    } else if (role === "civilian") {
      civilianBuilder(name);
    }
    
  });
};


// Builds Civilian
const civilianBuilder = (name) => {
  const newCivilian = civilianScript.storeState(name);

  let p1 = document.createElement('p');
  p1.setAttribute('id', 'img');
  p1.innerHTML = "<img src='../assets/images/zombie.jpeg' width='460' height='560'>";
  let h4 = document.createElement('h4');
  h4.innerHTML = `${newCivilian().name} has stumbled upon a massive zombie! Do you fight him or run?`; 
  let b1 = document.createElement('button');
  b1.setAttribute('id',`attack${newCivilian().id}`);
  b1.innerText = "Attack!";
  let b2 = document.createElement('button');
  b2.setAttribute('id',`critAttack${newCivilian().id}`);
  b2.innerText = "Critical Attack!";
  let h5 = document.createElement('h5');
  h5.setAttribute('id', `health-points${newCivilian().id}`);
  h5.innerText = "50";


  // Append
  document.getElementById('showRole').append(p1);
  document.getElementById('showRole').append(h4);
  document.getElementById('showRole').append(b1);
  document.getElementById('showRole').append(b2);
  document.getElementById('showRole').append(h5);

  // Actions 
  document.getElementById(`attack${newCivilian().id}`).onclick = function () {
    const newState = newCivilian(civilianScript.attack);
    document.getElementById(`health-points${newCivilian().id}`).innerText = `HP: ${newState.hp}`;
  };

  document.getElementById(`critAttack${newCivilian().id}`).onclick = function () {
    const newState = newCivilian(civilianScript.critAttack);
    document.getElementById(`health-points${newCivilian().id}`).innerText = `HP: ${newState.hp}`;
  };

};

//----------------------------------------------------------------------------------


// Builds Zombie
const zombieBuilder = (name) => {
  const newZombie = zombieScript.storeState(name);

  let p1 = document.createElement('p');
  p1.setAttribute('id', 'img');
  // p1.innerHTML = "../images/zombie.jpeg";
  p1.innerHTML = "<img src='./assets/images/civilian.jpeg' width='460' height='560'>";
  let h4 = document.createElement('h4');
  h4.innerHTML = `${newZombie().name} has stumbled upon a tasty human but he has a weapon! Do you fight him or run?`; 
  let b1 = document.createElement('button')
  b1.setAttribute('id',`attack${newZombie().id}` );
  b1.innerText = "Attack!";
  let b2 = document.createElement('button')
  b2.setAttribute('id',`critAttack${newZombie().id}` );
  b2.innerText = "Critical Attack!";
  let h5 = document.createElement('h5');
  h5.setAttribute('id', `health-points${newZombie().id}`);
  h5.innerText = "25";

  // Append
  document.getElementById('showRole').append(p1);
  document.getElementById('showRole').append(h4);
  document.getElementById('showRole').append(b1);
  document.getElementById('showRole').append(b2);
  document.getElementById('showRole').append(h5);

  // Actions

  document.getElementById(`attack${newZombie().id}`).onclick = function () {
    const newState = newZombie(zombieScript.attack);
    document.getElementById(`health-points${newZombie().id}`).innerText = `HP: ${newState.hp}`;
  };

  document.getElementById(`critAttack${newZombie().id}`).onclick = function () {
    const newState = newZombie(zombieScript.critAttack);
    document.getElementById(`health-points${newZombie().id}`).innerText = `HP: ${newState.hp}`;
  };
};


