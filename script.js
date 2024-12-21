
function insertText(text) {
    const display = document.getElementById("display");
    
    if (display.innerText === "Clique nos botões" || display.innerText === "Erro") {
        display.innerText = text;
    } else {
        display.innerText += " " + text;
    }
}

function calculateResult() {
    const display = document.getElementById("display");

    if (display.innerText.trim() === "eu + você" || display.innerText.trim() === "você + eu") {
        display.innerText = "❤️";

        setTimeout(() => {
            display.innerText = "Clique nos botões";
        }, 3000); 
    } else {
        display.innerText = "Erro";
        
        setTimeout(() => {
            display.innerText = "Clique nos botões"; 
        }, 1000); 
    }
}
