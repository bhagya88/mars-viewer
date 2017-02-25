export function  setDate(date){

	return{
		type: 'SET_DATE',
		date
	}
}


export function  setImgURL(imgURL){
	console.log("setImgURL",imgURL);
	return{
		type: 'SET_IMG_URL',
		imgURL
	}
}

export function  setImgFound(imgFound){
	console.log("setImgFound",imgFound);
	return{
		type: 'SET_IMG_FOUND',
		imgFound
	}
}

export function  getImgURL(date){

	console.log("getImgURL",date);

	return (despatch) => {

		const apiKey = 'dZZhyoSLDDVUEkYDD3z0MARLsL4SU7DMh0DlX7cY';
		const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+date+'&api_key='+apiKey;


    var myHeaders = new Headers({

    });

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Credentials", "false");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "*");
    myHeaders.append("Access-Control-Allow-Methods", "*");


	var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' ,
               json: true,
               credentials: 'omit'};

    var request = new Request(url, myInit);
	fetch(request)
		.then(res=>res.json())
		.then(data=>{
			
			if(data.photos && data.photos.length){
				console.log(data.photos[0].img_src);
				despatch(setImgURL(data.photos[0].img_src));
			}else{
				despatch(setImgFound('No'));
			}
		});
	}
}

