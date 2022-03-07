// #e4e4e4 - light
// #d5dcf9 - pearl 
// #3d3a4b - dusk
// #e4c5af - sand
// #9ece9a - cash
// #c77373 - wine
// #d5dcf9 - glass
// rgb(208,185,77) - lemon
// rgb(124, 99, 147) - grape
// rgb(15, 15, 15) - black
// rgb(115, 192, 199) - ocean
// rgb(15, 15, 15) - black


const currentTheme = (theme, fontFamily, multiplyer) => {
    const t = { // t = theme // default theme set
        themeName: 'light',
        fontFamily: 'Le-havre',
        fontSizeMultiplyer: 1,
        textLightColor: '#3d3a4b',
        textDarkColor: '#3d3a4b',
        pageBgColor: '#e4e4e4',
        menuColor: '#3d3a4b',
        iconDarkColor: 'black',
        iconLightColor: 'white',
        journalColor: '#e4e4e4',
    }
    switch(theme){
        case 'default' : 
            t.fontFamily = fontFamily ? fontFamily : 'Le Havre'
            t.fontSizeMultiplyer = multiplyer > 0? (multiplyer * 1) : 1
            break;
        case 'pearl' :
            t.themeName = 'pearl'
            t.fontFamily = fontFamily ? fontFamily : 'Le Havre'
            t.fontSizeMultiplyer = multiplyer ? multiplyer : 1
            t.textLightColor = '#d5dcf9'
            //t.textDarkColor
            t.pageBgColor = '#a3abd2'
            // t.menuColor
            // t.iconDarkColor
            // t.iconLightColor
            t.journalColor = '#d5dcf9'
            break;
            
        case 'glass' :
            t.themeName = 'glass'
            t.fontFamily = fontFamily ? fontFamily : 'Le Havre'
            t.fontSizeMultiplyer = multiplyer ? multiplyer : 1
            t.textLightColor = '#3d3a4b'
            //t.textDarkColor
            t.pageBgColor = 'white'
            // t.menuColor
            // t.iconDarkColor
            // t.iconLightColor
            t.journalColor = '#d5dcf9'
            break;
    }
    return t
}

export default currentTheme