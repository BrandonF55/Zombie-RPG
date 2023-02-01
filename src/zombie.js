const counterFunction = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};
const incrementer = counterFunction();

// eslint-disable-next-line no-unused-vars
export const storeState = (name) => {
  let currentState = { name: name, id: incrementer() };
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

// const stateControl = storeState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 25) + value
    });
  };
};

export const attack = changeState("hp")(-1);
export const critAttack = changeState("hp")(-5);

export const heal = changeState("hp")(1);
export const bigHeal = changeState("hp")(5);