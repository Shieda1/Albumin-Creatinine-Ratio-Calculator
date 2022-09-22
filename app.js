// https://www.omnicalculator.com/health/acr

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ACRRadio = document.getElementById('ACRRadio');
const albuminRadio = document.getElementById('albuminRadio');
const creatinineRadio = document.getElementById('creatinineRadio');

let ACR;
let albumin = v1;
let creatinine = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

ACRRadio.addEventListener('click', function() {
  variable1.textContent = 'Albumin';
  variable2.textContent = 'Creatinine';
  albumin = v1;
  creatinine = v2;
  result.textContent = '';
});

albuminRadio.addEventListener('click', function() {
  variable1.textContent = 'ACR';
  variable2.textContent = 'Creatinine';
  ACR = v1;
  creatinine = v2;
  result.textContent = '';
});

creatinineRadio.addEventListener('click', function() {
  variable1.textContent = 'ACR';
  variable2.textContent = 'Albumin';
  ACR = v1;
  albumin = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ACRRadio.checked)
    result.textContent = `ACR = ${computeACR().toFixed(2)}`;

  else if(albuminRadio.checked)
    result.textContent = `Albumin = ${computealbumin().toFixed(2)}`;

  else if(creatinineRadio.checked)
    result.textContent = `Creatinine = ${computecreatinine().toFixed(2)}`;
})

// calculation

function computeACR() {
  return (Number(albumin.value) / Number(creatinine.value)) * 1000;
}

function computealbumin() {
  return (Number(ACR.value) / 1000) * Number(creatinine.value);
}

function computecreatinine() {
  return Number(albumin.value) / (Number(ACR.value) / 1000);
}