import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { doctorService } from './doctor-service.js';

$(document).ready(function() {
  

});  
  // $("#docSearch").submit(function(event) {
  //   event.preventDefault();
  //   const docName = ("#inputtedDoc").val();
  //   const docCity = ("#cityState").val();

  //   (async () => {
  //     let doctor = new doctorService;
  //     let response = await doctor.getDoc(docName, docCity);
  //     this.getElements(response);
  //   })();

  //   const getElements = function(response) {
  //     if (response === false) {
  //       $("#badOutput").alert('There was an error in handling the request');
  //     } else if (response.data.length > 0) {
  //       response.data.forEach(function(doctor) {
  //         $("ul#nameResult").append('<li>${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.practices[0].visit_address.city} ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.street} ${doctor.practices[0].visit_address.zip} </li>');
  //       });
  //     }
  //   }
  // });