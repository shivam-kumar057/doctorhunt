const initialData = {
    list: [],
    loading:true
}

const BookReducer = (state = initialData, action) => {
    console.log("action===",action)
    switch (action.type) {
        case "setBook":
            return { ...state, 
                list: action.payload ,
                loading : action.loading
            }
        default:
            return state;
    }
}

export default BookReducer;