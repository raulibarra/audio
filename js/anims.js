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

function toggleDiv(divId){
    var element = document.getElementById(divId);
    
    if (!element.hasAttribute("toggle-group"))
    {   // we can't toggle this item
        return false;
    }

    // get toggle group id
    const groupId = element.getAttribute("toggle-group");

    // hide all elements that have this toggle group, by removing the "visible" class
    const elements = document.querySelectorAll(`[toggle-group="${groupId}"]`);
    if (elements == null || elements.length === 0)
    {
        // there are no elements to hide
        return false;
    }

    // iterate over each element and set their state
    elements.forEach(function(elementItem)
    {
        elementItem.classList.remove('visible');
        
        if (elementItem == element)
        {   // make sure the item to show stays visible
            elementItem.classList.add('visible');
        }
    });
}