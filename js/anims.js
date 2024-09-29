function showDiv(divId) {
    // Hide both divs
    document.getElementById('games-portfolio').classList.remove('visible');
    document.getElementById('projects-portfolio').classList.remove('visible');
    
    // Show the selected div
    document.getElementById(divId).classList.add('visible');
    return false;
}

function showGames(){
    return showDiv("games-portfolio");
}

function showPersonal(){
    return showDiv("projects-portfolio")
}