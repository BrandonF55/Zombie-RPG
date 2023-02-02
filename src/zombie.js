const counterFunction = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};
const incrementer = counterFunction();

export const zombieStoreState = (name) => {
  let currentState = { name: name, id: incrementer() };
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

// const stateControl = storeState();

const changeCivilianState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 25) + value
    });
  };
};

const changeZombieState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 50) + value
    });
  };
};

export const zombieAttack = changeCivilianState("hp")(-1);
export const zombieCritAttack = changeCivilianState("hp")(-5);

export const zombieHeal = changeZombieState("zombieHp")(1);
export const zombieBigHeal = changeZombieState("zombieHp")(5);