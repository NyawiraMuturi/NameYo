<console.log('Hello World!');

function formdata() {

  const maleNames = ['James', 'Jack', 'Mark', 'Alex', 'Donald'];
  const femaleNames = ['Mary', 'Victoria', 'Jane', 'Esther', 'Faith'];

  // get the date from html
  const dateOfBirth = document.getElementById('date-of-birth').value;

  const isMale = document.getElementById('male').checked;
  const isFemale = document.getElementById('female').checked;

  let name = '';

  // convert it to a date object
  const date = new Date(dateOfBirth);

  // manipulate date object and get day here
  const day = 'Monday';

  // randomly select male name
  if (isMale) {
    name = maleNames[Math.floor(Math.random() * maleNames.length)]
  }

  // randomly select female name
  if (isFemale) {
    name = femaleNames[Math.floor(Math.random() * femaleNames.length)]
  }

  document.getElementById('results').innerHTML = `<p>  Your day of birth is <strong>${day}</strong><p>`+
      `<p>I will call you <strong>${name}</strong><p>`;

  console.log(date);
}
