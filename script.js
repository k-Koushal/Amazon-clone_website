//!dark/Light Mode
const darkModeToggle=document.querySelector('#dark-mode-toggle');


darkModeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('darkmode')

}) 

//! Popup-Window
function popupWindow(){
    document.querySelector('#popup').style.display='flex';

}
let popupCloseButton=document.querySelector('#popupClose')
console.log(popupCloseButton)
popupCloseButton.addEventListener('click',()=>{
    console.log('clicked')
    document.querySelector('#popup').style.display='none';
})