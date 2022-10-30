const getYear=document.getElementById('year');
const date= new Date;
console.log(date);
currentDate=date.getFullYear();
getYear.innerText=currentDate;

document.getElementById('menuIcon').addEventListener('click',(e)=>{
   navList=document.getElementById('navList');
navList.classList.toggle('show');
})

