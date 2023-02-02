const counterFunction = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};
const incrementer = counterFunction();

export const civilianStoreState = (name) => {
  let currentState = { name: name, id: incrementer() };
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

// const stateControl = storeState();

const changeZombieState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 50) + value
    });
  };
};

const changeCivilianState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 25) + value
    });
  };
};


export const civilianAttack = changeZombieState("hp")(-1);
export const civilianCritAttack = changeZombieState("hp")(-5);

export const civilianHeal = changeCivilianState("civilianHp")(1);
export const civilianBigHeal = changeCivilianState("civilianHp")(5);