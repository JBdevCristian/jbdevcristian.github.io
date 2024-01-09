const inputContainer = document.querySelector('input'); //selecionando Input
const rootElement = document.documentElement; //Pegando informação do html

window.onload = function() {
    const storedTheme = localStorage.getItem('theme');

    if (!storedTheme) {
        // Se o tema não estiver armazenado, define como light por padrão
        changeTheme(lightTheme);
        inputContainer.checked = false;  // Considerando light como padrão, a caixa de seleção não estará marcada
    } else {
        // Se o tema estiver armazenado, carrega o tema armazenado
        const theme = JSON.parse(storedTheme);
        changeTheme(theme);
        if (isThemeEqual(theme, darkTheme)) {
            inputContainer.checked = true;  // Marca a caixa de seleção se o tema carregado for dark
        }
    }
}

const lightTheme = { //definindo light
    '--background-color': '#ffffff',
    '--color': '#1A1A1A',
    '--box-shadow': '#000000',
    '--texto-card': 'black',
    '--fundo-card': '#F7F7F7',
    '--bg-fundoEX': '#fafafa',
    '--sombra-FEX': '#bfbdbd',
    '--fundo-rodape': '#dfdfdf',
}

const darkTheme = { //definindo darkmode
    '--background-color': '#1C2833',
    '--color': '#ffffff',
    '--box-shadow': '#ffffff',
    '--texto-card': 'white',
    '--fundo-card': '#5B6068',
    '--bg-fundoEX': '#1e2630',
    '--sombra-FEX': '#12171c',
    '--fundo-rodape': '#141b21',
}

inputContainer.addEventListener('change', function() { //alterando valores html
    const isChecked = inputContainer.checked; //checando os valores

    if (isChecked) {
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
    if (isThemeEqual(theme, darkTheme)) inputContainer.checked = true //marcando caixinha no load
    changeTheme(theme)
}   

function isThemeEqual(firstTheme, secondTheme) {
    for (let prop in firstTheme) {
        if (firstTheme[prop] != secondTheme[prop]) return false;
    }

    return true
}
