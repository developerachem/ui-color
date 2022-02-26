

const container = document.querySelector('.container');
for (let i = 0; i < 50; i++) {
    const div = document.createElement('div');
    div.className = "box"
    container.appendChild(div)
}

// This Is 
const refBtn = document.querySelector('#refBtn');
const allBox = document.querySelectorAll('.box')

/**
 * This Is Rendom Color Generator
 * @returns 
 */
function colorGeneret () {
    let colorValue = "0123456789abcdef";
    let colorLength = 6;
    let colorSend = "";

    for (let i = 0; i < colorLength; i++) {
        let rendomGenaretColor = Math.floor(Math.random() * colorValue.length)
        colorSend += colorValue.substring(rendomGenaretColor , rendomGenaretColor + 1)
    }
    return  "#" + colorSend;
}

/**
 * This Is on Click Function
 */
colorShow () 
function colorShow () {
    allBox.forEach(div => {
        div.style.backgroundColor = colorGeneret()
        div.innerHTML = colorGeneret()

        // This Is Cppy Click Event
        div.addEventListener('click' , function() {
            navigator.clipboard.writeText(div.textContent)
        })

    })
    
}

