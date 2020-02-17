
  const daysOfTheWeeks= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday']
  const maleNames = ['Kwasi', 'Kwadwo', 'kwabena', 'Yaw', 'Kofi','Kwame'];
  const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua','Ama'];

  // Form Validation
  function validate(){
  const bdate = parseInt(document.getElementById('bdate')).value;
  const bmonth = parseInt(document.getElementById('bmonth')).value;
  const byear = parseInt(document.getElementById('byear')).value;
  const isMale = document.getElementById('male').checked;
  const isFemale = document.getElementById('female').checked;
  var formValid= false;
  var i=0;

  if (bdate.value=="" || bdate.value == null) {
    // alert (date required)
    document.getElementById("dob").innerHTML="Input date";
    return false;
  } else {
    if (!isNAN(bdate.Value)) {
      if (bdate.value <=0 || bdate.value>31){
        document.getElementById("dob").innerHTML = "Enter valid date";
        return false;
      } else{
        document.getElementById('dob').innerHTML= 'proceed';
      }
    } else {
      document.getElementById('dob').innerHTML = 'Enter a Number'
      return false;
    }
  }
  if ()
}
