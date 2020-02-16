<console.log('Your Akan Name');

function formdata() {

  const daysOfTheWeeks= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday']
  const maleNames = ['Kwasi', 'Kwadwo', 'kwabena', 'Yaw', 'Kofi','Kwame'];
  const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua','Ama'];

  // get the date from html
  const dateOfBirth = parseInt(document.getElementById('date-of-birth')).value;

  const isMale = document.getElementById('male').checked;
  const isFemale = document.getElementById('female').checked;

  let name = '';

  // convert it to a date object
  const date = new Date(dateOfBirth);
  var date = new Date(year +"/" + month + "/"+day);
    var dayBorn = date.getDateOfBirth();
    var akanName;
    var validate = (year > 0 && (month >0 && month <=12) && (day > 0 && day <= 31));
    var validateGender = (gender !== "male" && gender !== "female");
    if (year <= 1800 ) {
        alert("Invalid year");
    }
    else if (month <= 0 || month > 12) {
     alert("Month is between 1 and 12");
    }
     else if (day <= 0 || day > 31){
         alert("Date is between 1 and 31");
    }
     else if (validate == false) {
         alert("Invalid Input!!");
    }

  // randomly select male name
  if(gender ==="male" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = maleNames[dayBorn];
    alert("You were born on "+dayOfTheWeek[dayBorn]+ " and your Akan name is "+akanName);
    }
    else if (gender ==="female" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = femaleNames[dayBorn];
    alert("You were born on "+dayOfTheWeek[dayBorn]+ " and your Akan name is "+akanName);
    }


  // randomly select female name
  if (isFemale) {
    name = femaleNames[Math.floor(Math.random() * femaleNames.length)]
  }

  document.getElementById('results').innerHTML = `<p>  Your day of birth is <strong>${day}</strong><p>`+
      `<p>I will call you <strong>${name}</strong><p>`;

  console.log(date);
}
