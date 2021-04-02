import { UPDATE_NAME } from "./formTypes";
const initialState = {
    username: "Your Name",
};

const iceCreamReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_NAME:
            return { ...state, username: payload.username };

        default:
            return state;
    }
};

export default iceCreamReducer;
