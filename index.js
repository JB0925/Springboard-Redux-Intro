const INITIAL_STATE = { face: '⊙︿⊙'};

const moodReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;
    switch (type) {
        case "SAD":
            return { ...state, face: "⊙︿⊙" };
        case "HAPPY":
            return { ...state, face: "ʘ‿ʘ" };
        case "EXCITED":
            return { ...state, face: "โ๏∀๏ใ" };
        case "ANGRY":
            return { ...state, face: "⋋_⋌" };
        default:
            return state;
    };
};

const store = Redux.createStore(moodReducer);

const h1 = document.querySelector("h1");
const sadButton = document.querySelector("#sad");
const happyButton = document.querySelector("#happy");
const excitedButton = document.querySelector("#excited");
const angryButton = document.querySelector("#angry");

sadButton.addEventListener("click", () => {
    store.dispatch({ type: "SAD" });
    const currentMood = store.getState().face;
    h1.innerText = currentMood;
});

happyButton.addEventListener("click", () => {
    store.dispatch({ type: "HAPPY" });
    const currentMood = store.getState().face;
    h1.innerText = currentMood;
});

excitedButton.addEventListener("click", () => {
    store.dispatch({ type: "EXCITED" });
    const currentMood = store.getState().face;
    h1.innerText = currentMood;
});

angryButton.addEventListener("click", () => {
    store.dispatch({ type: "ANGRY" });
    const currentMood = store.getState().face;
    h1.innerText = currentMood;
});