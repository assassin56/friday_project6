import './src/main';
import { response } from 'express';

export class doctorService {

  async getDoctor() {
    try {

    } catch {

    }
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
