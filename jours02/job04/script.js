let textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {

    if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) {

        if (document.activeElement === textarea) {
            textarea.value += event.key ; 
        } 
        else {
            textarea.value = event.key; 
        }
    }
});
