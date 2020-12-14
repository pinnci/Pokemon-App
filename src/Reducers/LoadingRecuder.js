const initialState = false;

const LoadingReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'TURN_ON':
            return state = true;

        case 'TURN_OFF':
            return state = false;

        default:
            return state;
    }
}

export default LoadingReducer;
