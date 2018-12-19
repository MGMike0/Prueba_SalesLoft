import {
	BRING,
	SUCCESS,
	FAIL
} from '../types/personsTypes.js';

const INITIAL_STATE ={
	list: [],
	loading : false,
	errorMessage: ''
};

export default (state = INITIAL_STATE, action)=>{
	switch(action.type){
		case BRING: return{...state, loading:true, errorMessage:''};
		case SUCCESS: return{...state, list: action.payload, loading:false };
		case FAIL: return{...state, errorMessage: action.payload, loading:false};
		default: return state;
	}
}