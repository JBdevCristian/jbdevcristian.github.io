const inputContainer = document.querySelector('input'); //selecionando Input
const rootElement = document.documentElement; //Pegando informação do html



window.onload = getTheme

const lightTheme = { //definindo light
    '--background-color': '#ffffff',
    '--color': '#1A1A1A',
    '--box-shadow': '#000000',
    '--texto-card': 'black',
    '--fundo-card': '#F7F7F7',
   
}

const darkTheme = { //definindo darkmode
    '--background-color': '#1C2833',
    '--color': '#ffffff',
    '--box-shadow': '#ffffff',
    '--texto-card': 'white',
    '--fundo-card': '#5B6068',
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

//Adicionando POP up no site para notificar o andamento...
addEventListener("click", testando())

function testando() {
    document.getElementsByTagName("a")
    
    Swal.fire({
    icon: "error",
    title: "Atenção",
    text: "Portfolio ainda em desenvolvimento...",
    });

}
