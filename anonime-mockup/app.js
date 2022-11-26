let getYear = document.getElementById('year');

const dateMethod = new Date();
const year = dateMethod.getFullYear();

getYear.innerText = year;

/*shortcut when your brain is matured
const getYear = document.getElementById('year').innerText = new Date().getFullYear();

*/









