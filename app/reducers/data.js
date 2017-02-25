// modify state depending on action
export default function data(state = {
	date:'yyyy-mm-dd',
	imgURL: '',
	imageFound:''
}, action = {}){

	switch(action.type){

		case 'SET_DATE':

	    return {imgURL:'', imageFound:'', date: action.date}

		case 'SET_IMG_URL':

	    return {...state, imgURL: action.imgURL}

	    case 'SET_IMG_FOUND':

	    return {...state, imgURL:'',imgFound: action.imgFound}

	   		   
		default :

		return state;
	}

}