
  const daysOfTheWeeks= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday']
  const maleNames = ['Kwasi', 'Kwadwo', 'kwabena', 'Yaw', 'Kofi','Kwame'];
  const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua','Ama'];

  // Form Validation
  function validate(){
  const bdate = document.getElementById('bdate').value;
  const bmonth = document.getElementById('bmonth').value;
  const byear = document.getElementById('byear').value;
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
        document.getElementById("bmonth").innerHTML = "Enter valid date";
        return false;
      } else{
        document.getElementById('bmonth').innerHTML= 'proceed';
      }
    } else {
      document.getElementById('bmonth').innerHTML = 'Enter a Number'
      return false;
    }
  }
  if (bmonth.value =="" || bmonth.value==null) {
    document.getElementById(bmonth).innerHTML= "Input month";
    return false;
  } else{
    if (!isNaN(bmonth.value)) {
      if (bmonth.value <=0 || bmonth.value>12) {
        document.getElementById('bmonth').innerHTML = "Enter valid month";
        return false;
      } else {
        document.getElementById('bmonth').innerHTML = "Proceed"
      }
    } else {
      document.getElementById('bmonth').innerHTML = 'Enter a Number'
      return false;
  }
  if (byear.value == "" || byear.value == null) {

      document.getElementById("myear").innerHTML = "Input year";
      return false;
  } else {
      if (!isNaN(byear.value)) {
          if (byear.value.length != 4) {
              document.getElementById("byear").innerHTML = "Enter Valid Year";
              return false;
          } else {
              document.getElementById("myear").innerHTML = "Proceed";
          }
      } else {
          document.getElementById("byear").innerHTML = "Enter a number";
          return false;
      }
  }
  while (!formValid && i < gender.length) {
        if (gender[i].checked) {
            formValid = true;
        }
        i++;
    }
    if (!formValid) {
        return false;
    }
    return formValid;
}
function formInfo() {
    var gender = document.getElementsByName("gender");
    var mdate = parseInt(document.getElementById("bdate").value);
    var mmonth = parseInt(document.getElementById("bmonth").value);
    var myear = parseInt(document.getElementById("byear").value);
    var i = 0;

    while (i < gender.length) {
        if (gender[i].checked)

            mgender = gender[i].value;
        i++;

    }
