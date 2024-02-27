var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Add client-side validation here (if needed)
  
      // Serialize the form data
      const formData = new FormData(form);
  
      // Send the form data to the server via AJAX
      fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          // Handle the server's response (e.g., display a success message)
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle errors (e.g., display an error message)
        });
    });
  });
  