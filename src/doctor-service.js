import './src/main';

export class doctorService {

  async getDoctor() {
    try {
      let response = await fetch('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=3b338edc3072ff8762742999007e715e');
      
      if (response.status === 200 && response.ok === true) {
        console.log(reponse);
      }
    } catch {

    }
    console.log(reponse);
  }
}







  // async getDoc(userName, city) {
  //   try {
  //     let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&location=${docCity}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
  //     if (response.status === 200 && response.ok === true){
  //       let postJSON = await response.json();
  //       return postJSON;
  //     }
  //   }
  // }
