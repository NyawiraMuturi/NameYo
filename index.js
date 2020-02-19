//defining variables
  const daysOfTheWeeks= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday']
  const maleNames = ['Kwasi', 'Kwadwo', 'kwabena', 'Yaw', 'Kofi','Kwame'];
  const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua','Ama';


  // Setting scope for dates
  function validDate() {
    var gender = document.getElementsByName("gender");
    var bdate = parseInt (document.getElementById("bday").value);
    var bmonth = parseInt (document.getElementById("bmonth").value);
    var byear = parseInt (document.getElementById("byear").value);

    if (0<=bdate>31 || 1<bmonth>12 || byear.value.length != 4) {
      alert('Enter Valid date')
      return;
    }
  }
  // getting user details
