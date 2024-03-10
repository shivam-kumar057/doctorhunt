const initialData = {
    list: []
}

const BookReducer = (state = initialData, action) => {
    switch (action.type) {
        case "setBook":
            return { ...state, list: action.payload }
        default:
            return state;
    }
}

export default BookReducer;