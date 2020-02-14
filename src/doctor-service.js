export class doctorService {
  async getAPI() {
    let response = await fetch('https://developer.betterdoctor.com/swagger/spec/2016_03_01.json');
    console.log(response);
  }
}