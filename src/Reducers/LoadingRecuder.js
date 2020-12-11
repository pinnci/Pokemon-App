const initialState = true;

const LoadingReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'TURN_OFF':
            return state = false;

        case 'TURN_ON':
            return state = true;

        default:
            return state;
    }
}

export default LoadingReducer;
