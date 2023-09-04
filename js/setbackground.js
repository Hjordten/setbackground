console.log("jeg er i setbackground")

const inpColor = document.querySelector(".inpColor")
console.log(inpColor)

const inpColorValue = document.querySelector(".inpColorValue")
console.log(inpColorValue)

const inpColorPicker = document.getElementById("inpColorPicker")

const pbSetColor = document.querySelector(".pbSetColor")
console.log(pbSetColor)

const pTags = document.getElementsByTagName("p")
console.log(pTags)

const pArray = Array.from(pTags)
console.log(pArray)

pbSetColor.textContent = "Tryk mig for set color";

const bdy = document.querySelector("body");
console.log(bdy);

function increaseFont(element) {
    let fontSize = element.style.fontSize;
    console.log("fsize=" + fontSize)
    fontSize = element.style.fontSize = 20 + 'px'
    console.log("fsize=" + fontSize)

}

pArray.forEach(increaseFont)
function setBackgroundColor() {
    let col = inpColor.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor
}

function useColorPicker(){
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor
}

pbSetColor.addEventListener('click', setBackgroundColor)
document.addEventListener('keyup', setBackgroundColor)
inpColorPicker.addEventListener('input', useColorPicker)

