const inputContainer = document.querySelector('input'); //selecionando Input
const rootElement = document.documentElement; //Pegando informação do html

window.onload = getTheme

const lightTheme = { //definindo light
    '--background-color': '#ffffff',
    '--color': '#1A1A1A',
    '--box-shadow': '#000000',
}

const darkTheme = { //definindo darkmode
    '--background-color': '#2f3338',
    '--color': '#ffffff',
    '--box-shadow': '#ffffff',
}

inputContainer.addEventListener('change', function(){ //alterando valores html
   const isChecked = inputContainer.checked; //checando os valores

    if(isChecked) {
        changeTheme(darkTheme);
    } else {
        changeTheme(lightTheme);
    }

})

function changeTheme(theme) {
    for (let prop in theme) {
        changeProperty(prop, theme[prop]);
    }

    saveTheme(theme);
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value);
}

function saveTheme(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
}

function getTheme() {
    const theme = JSON.parse(localStorage.getItem('theme'));
    if(isThemeEqual(theme, darkTheme)) inputContainer.checked = true //marcando caixinha no load
    changeTheme(theme)
}   

function isThemeEqual(firstTheme, secondTheme) {
    for (let prop in firstTheme) {
        if(firstTheme[prop] != secondTheme[prop]) return false;
    }

    return true
}