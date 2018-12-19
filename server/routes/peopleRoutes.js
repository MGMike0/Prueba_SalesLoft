const axios = require('axios');
const permit = require('../config/key.js');
const {parse, stringify} = require('flatted');

const request = {headers: { Authorization: `Bearer ${permit.key}` } }

module.exports = app => {

	app.get('/api/personas', async(req, res)=>{
		try{
			let response = await axios.get(
				'https://api.salesloft.com/v2/people.json',
				request
			)
			//I get the message ' Converting circular structure to JSON ' 
			// and on the documentation :We recommend making JSON requests against our API. This is done by setting the Content-Type HTTP header to "application/json".
			// tried to use CircularJSON that is the recomendation from a user on Stack overflow and on NPM seems like there is a newer version called flatted.
			
			response = stringify(response.data.data);
			//Now it gives it all on plank text with no filtering or json format.
			response = parse(response);
			//Parse to json fomat
			// ass the challenge descriptions says: Display each Person’s name, email address, and job title. I will send only that data.
			response = response.map((elem , index) =>(
					{
						id: index,
						name: elem.display_name,
						email_address: elem.email_address,
						job_title: elem.title
					}
				));

			res.send(response)

		}catch(error){
			res.send(error.message)
		}
	})


}