// api documentation: https://whois.fdnd.nl/docs/

const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/67';
const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

const urlMe = baseURL + endpointMe;
const urlSquad = baseURL + endpointSquad;

// de h1
const h1 = document.querySelector('h1');

// my section
const mySection = document.querySelector('section:nth-of-type(1)');

// de lijst
const list = document.querySelector('section:nth-of-type(2)');

const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ?si=WHPj7XWqw3d-GXe7";



getMyName();
getMyImage();
getEverybody();
getMyBirthday();



function getMyName() {
	getData(urlMe).then( data => {  
    // console.log(data.data);

		const myData = data.data;
		let myName = myData.name;

		// console.log(myName);

		h1.textContent = myName;
	});	
}



function getMyImage() {
	getData(urlMe).then( data => {  
		const myData = data.data;
		let myName = myData.name;
		let myImgSrc = myData.avatar;

		if (!myImgSrc) {
			myImgSrc = "images/placeholder1.svg";
		}

		const myImg = document.createElement("img");

		myImg.src = myImgSrc;
		myImg.alt = myName;

		mySection.append(myImg);
	});	
}



// reserve webiste: https://youtu.be/dQw4w9WgXcQ?si=WHPj7XWqw3d-GXe7

function getEverybody() {
	getData(urlSquad).then( data => { 
		// console.log(data.data);

		const persons = data.data;

		persons.forEach(person => {
			// console.log(person);

			let personName = person.name;
			let personImgSrc = person.avatar;
			let personWebsite = person.website;
	
			if (!personImgSrc) {
				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
				// console.log(randomNr);
				personImgSrc = `images/placeholder${randomNr}.svg`;
			}

			if (!personWebsite) {
				personWebsite = fallbackWebsite;
			}

			personHTML = 
				`<article>
					<h3>${personName}</h3>
					<img src="${personImgSrc}" alt="${personName}">
					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
				</article>`;

				list.insertAdjacentHTML('beforeend', personHTML);
		});
	});
}



// normal

// function getMyBirthday() {
// 	getData(urlMe).then( data => {  
//     // console.log(data.data);

// 		const myData = data.data;
// 		let myBirthdate = myData.birthdate;

// 		// console.log(myBirdthdate);

// 		// birthdate is not present
// 		if (!myBirthdate) {
// 			// do nothing
// 		}
// 		// add birthday
// 		else {
// 			const myBirthday = document.createElement("time");
// 			myBirthday.textContent = myBirthdate;
// 			myBirthday.dateTime = myBirthdate;
// 			mySection.append(myBirthday);
// 		}
// 	});	
// }



// fancy

function getMyBirthday() {
	getData(urlMe).then( data => {  
    // console.log(data.data);

		const myData = data.data;
		let myBirthdate = myData.birthdate;

		// console.log(myBirdthdate);

		// birthdate is not present
		if (!myBirthdate) {
			// do nothing
		}
		// convert birthdate to readable date
		else {
			const myBirthdateTimestamp = Date.parse(myBirthdate);
			const DDMMMMYYFormat = new Intl.DateTimeFormat('nl-nl', { dateStyle: 'long' });
			myBirthdateDDMMMMYY = DDMMMMYYFormat.format(myBirthdateTimestamp);

			const myBirthday = document.createElement("time");
			myBirthday.textContent = `🎉 ${myBirthdateDDMMMMYY}`;
			myBirthday.dateTime = myBirthdate;

			mySection.append(myBirthday);
		}
	});	
}



/****************/
/* FETCH DATA   */
/* RETURNS JSON */
/****************/

// generieke functie om data aan een API te vragen
// deze kun je keer op keer hergebruiken
// nb. in het echt iets complexer --> bijv ook rekening houden met fouten

// 1. doe een verzoek aan de API om data
// 2. ga verder als de API antwoord geeft
// 3. als het goed gaat krijg je een 'response'-object met data terug
// 3. daarmee kun je nog niet aan de slag
// 4. het 'response'-object zet je om naar JSON
// 4. met JSON kun je aan de slag in jouw JS
// 5. als de response is omgezet naar JSON kun je weer verder
// 6. de naam van de naar JSON omgezette info is 'jsonData'
// 6. Die naam mag je overigens zelf verzinnen
// 7. de JSON ('jsonData') geef je terug aan de 'getData' functie
// 8. de 'getData' functie geeft de 'jsonData' terug aan de functie die om de data vroeg
// 9. async betekent dat terwijl de data wordt opgehaald er andere dingen gedaan kunnen worden
// 9. op het moment dat de data er is geeft de functie een seintje
// 9. dan kun je dan wat met de data gaan doen

async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}