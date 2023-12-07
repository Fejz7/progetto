const caselle = function () {
const caselleDiv = document.getElementById('tabellone')
for (let i = 0; i < 90; i++) {
    const casellaDiv = document.createElement('div')
    casellaDiv.classList.add('casellaSingola')
    const cellValue = document.createElement('h3')
    cellValue.innerText = i + 1
    caselleDiv.appendChild(cellValue)
    casellaDiv.addEventListener('click', function (e) {

    })
}}
caselle()
const formReference = document.getElementsByTagName('form')[0]
formReference.addEventListener('submit', function (e) {
  e.preventDefault()})

//   let numbers = function () {
//       for (let i = 1; i < 91; i++) {
//         numbers = Math.floor(Math.random(1) * 90)
        
const numbers = function() {
    for (let i = 1; i < 91; i++) {
      const extracted = Math.floor(Math.random() * 90 + 1)
    }
  }
   console.log(extracted)