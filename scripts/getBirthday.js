














/**************/
/* SPIEKBRIEF */
/**************/

// getMyBirthday();

// normal

// function getMyBirthday() {
// 	getData(urlMe).then( data => {  

// 		const myData = data.data;
// 		let myBirthdate = myData.birthdate;

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

// function getMyBirthday() {
// 	getData(urlMe).then( data => {  

// 		const myData = data.data;
// 		let myBirthdate = myData.birthdate;

// 		// birthdate is not present
// 		if (!myBirthdate) {
// 			// do nothing
// 		}
// 		// convert birthdate to readable date
// 		else {
// 			const myBirthdateTimestamp = Date.parse(myBirthdate);
// 			const DDMMMMYYFormat = new Intl.DateTimeFormat('nl-nl', { dateStyle: 'long' });
// 			myBirthdateDDMMMMYY = DDMMMMYYFormat.format(myBirthdateTimestamp);

// 			const myBirthday = document.createElement("time");
// 			myBirthday.textContent = `🎉 ${myBirthdateDDMMMMYY}`;
// 			myBirthday.dateTime = myBirthdate;

// 			mySection.append(myBirthday);
// 		}
// 	});	
// }