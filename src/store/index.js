import {
    combineReducers,
    createStore
} from 'redux';


const countReducer = (state = 0 , action) => {
    switch(action.type){
        case 'counter/increase' : {
            return state + action.payload
        }
        case 'counter/decrease' : {
            return state - action.payload
        }
        default:{
            return state
        }
    }
}


const initTheme = {
    bgColor: "#fff",
    color: "#000",
}


const themeReducer = (state = initTheme, action) => {
    switch (action.type) {
        case 'theme/changeBg': {
            return {
                 ...state,
                 bgColor: action.payload
            }
        }
       
        case 'theme/changeText': {
            return {
                ...state,
                color: action.payload
            }
        }
        

        case 'theme/reset': {
            return initTheme;
        }

        default:
            return state;
    }
}


const rootReducer = combineReducers({
     countReducer,
     themeReducer
})

export const store = createStore(rootReducer)