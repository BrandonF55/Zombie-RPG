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
    if(role === "civilian") {
      civilianBuilder(name);
    } else if (role === "zombie") {
      zombieBuilder(name);
    } 
  });
};


// Builds Civilian
const civilianBuilder = (name) => {
  const newCivilian = civilianScript.civilianStoreState(name);

  let p1 = document.createElement('p');
  p1.setAttribute('id', 'img');
  p1.innerHTML = "<img src='../assets/images/zombie.jpeg' width='460' height='560'>";
  let h4 = document.createElement('h4');
  h4.innerHTML = `${newCivilian().name} has stumbled upon a massive zombie! Do you fight him or run?`; 
  let b2 = document.createElement('button');
  b2.setAttribute('id',`civilianAttack${newCivilian().id}`);
  b2.innerText = "Attack!";
  let b3 = document.createElement('button');
  b3.setAttribute('id',`civilianCritAttack${newCivilian().id}`);
  b3.innerText = "Critical Attack!";
  let b4 = document.createElement('button');
  b4.setAttribute('id',`civilianHeal${newCivilian().id}`);
  b4.innerText = "Heal!";
  let h6 = document.createElement('h5');
  h6.setAttribute('id', `zombieHP1${newCivilian().id}`);
  h6.innerText = "50";
  let h7 = document.createElement('h5');
  h7.setAttribute('id', `civilianHP1${newCivilian().id}`);
  h7.innerText = "25";
  let h8 = document.createElement('h5');
  h8.setAttribute('class', 'invisible');
  h8.innerText = "GAME OVER!!"


  // Append
  document.getElementById('showRole').append(p1);
  document.getElementById('showRole').append(h4);
  document.getElementById('showRole').append(b2);
  document.getElementById('showRole').append(b3);
  document.getElementById('showRole').append(b4);
  document.getElementById('showRole').append(h6);
  document.getElementById('showRole').append(h7);
  document.getElementById('showRole').append(h8);

  
  // Actions 
  document.getElementById(`civilianAttack${newCivilian().id}`).onclick = function () {
    const newState = newCivilian(civilianScript.civilianAttack);
    document.getElementById(`zombieHP1${newCivilian().id}`).innerText = `Zombie HP: ${newState.hp}`;
  };

  document.getElementById(`civilianCritAttack${newCivilian().id}`).onclick = function () {
    const newState = newCivilian(civilianScript.civilianCritAttack);
    document.getElementById(`zombieHP1${newCivilian().id}`).innerText = `Zombie HP: ${newState.hp}`;
  };

  document.getElementById(`civilianHeal${newCivilian().id}`).onclick = function () {
    const newState = newCivilian(civilianScript.civilianHeal);
    document.getElementById(`civilianHP1${newCivilian().id}`).innerText = `Civilian HP: ${newState.civilianHp}`;
  };

};

//----------------------------------------------------------------------------------


// Builds Zombie
const zombieBuilder = (name) => {
  const newZombie = zombieScript.zombieStoreState(name);

  let p1 = document.createElement('p');
  p1.setAttribute('id', 'img');
  p1.innerHTML = "<img src='./assets/images/civilian.jpeg' width='460' height='560'>";
  let h4 = document.createElement('h4');
  h4.innerHTML = `${newZombie().name} has stumbled upon a tasty human but he has a weapon! Do you fight him or run?`; 
  let b1 = document.createElement('button');
  b1.setAttribute('id',`zombieAttack${newZombie().id}` );
  b1.innerText = "Attack!";
  let b2 = document.createElement('button');
  b2.setAttribute('id',`zombieCritAttack${newZombie().id}` );
  b2.innerText = "Critical Attack!";
  let b3 = document.createElement('button');
  b3.setAttribute('id',`zombieHeal${newZombie().id}`);
  b3.innerText = "Heal!";
  let h5 = document.createElement('h5');
  h5.setAttribute('id', `civilianHP${newZombie().id}`);
  h5.innerText = "25";
  let h7 = document.createElement('h5');
  h7.setAttribute('id', `zombieHP${newZombie().id}`);
  h7.innerText = "50";

  
  // Append
  document.getElementById('showRole').append(p1);
  document.getElementById('showRole').append(h4);
  document.getElementById('showRole').append(b1);
  document.getElementById('showRole').append(b2);
  document.getElementById('showRole').append(b3);
  document.getElementById('showRole').append(h5);
  document.getElementById('showRole').append(h7);

  
  // Actions
  document.getElementById(`zombieAttack${newZombie().id}`).onclick = function () {
    const newState = newZombie(zombieScript.zombieAttack);
    document.getElementById(`civilianHP${newZombie().id}`).innerText = `Civilian HP: ${newState.hp}`;
  };

  document.getElementById(`zombieCritAttack${newZombie().id}`).onclick = function () {
    const newState = newZombie(zombieScript.zombieCritAttack);
    document.getElementById(`civilianHP${newZombie().id}`).innerText = `Civilian HP: ${newState.hp}`;
  };

  document.getElementById(`zombieHeal${newZombie().id}`).onclick = function () {
    const newState = newZombie(zombieScript.zombieHeal);
    document.getElementById(`zombieHP${newZombie().id}`).innerText = `Zombie HP: ${newState.zombieHp}`;
  };
};


