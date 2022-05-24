function changeMode(){
      changeClasses();
      changeText();
}
function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}
function changeText(){
    const lightmode= 'Light Mode';
    const darMode = 'Dark Mode';
    if(body.classList.contains(darkModeClass)){
        button.innerHTML=lightmode;
        h1.innerHTML= darMode+ "ON";
        return;
        
    }
         button.innerHTML=darMode;
         h1.innerHTML= lightmode + "ON";
}
const darkModeClass ='dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];



button.addEventListener('click',changeMode);


 
