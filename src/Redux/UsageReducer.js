import { createStore} from 'redux'

const intialState = {
    value:0
};

function reducer(prevState=intialState,action){
    switch(action.type){
        case 'incri':
            return{
                value:prevState.value+1
            };
        case 'decri':
            return{
                value:prevState.value-1
            }
            default:
                return prevState;
    }
}

const store = createStore(reducer)

export default store