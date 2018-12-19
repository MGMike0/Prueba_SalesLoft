import axios from 'axios';
import {BRING, SUCCESS, FAIL} from '../types/personsTypes.js';

export const bringElements = (id) => async(dispatch)=>{
	dispatch({type: BRING})
	try{
		const response = await axios.get(`https://salesoft.herokuapp.com/api/personas`);
		dispatch({type: SUCCESS, payload: response.data})
	}catch(error){
		dispatch({type:FAIL, payload: error.message});
	}
};

