document.querySelectorAll('.expand-button').forEach(folder => {
    folder.onclick = function(e){
        const ulElement = folder.nextElementSibling
        const currentDisplay = ulElement.style.display
        ulElement.style.display = currentDisplay  === 'none' ? 'block' : 'none';
    }
})