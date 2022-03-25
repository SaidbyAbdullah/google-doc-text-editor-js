let boldBtn = document.getElementById("boldBtn");
let italicBtn = document.getElementById("italicBtn");
let lineBtn = document.getElementById("lineBtn");
let leftBtn = document.getElementById("leftBtn");
let centerBtn = document.getElementById("centerBtn");
let rightBtn = document.getElementById("rightBtn");
let inputText = document.getElementById("inputText");
let outputText = document.getElementById("outputText");

boldBtn.addEventListener('click',()=>{
    if(outputText.style.fontWeight === 'bold'){
        outputText.style.fontWeight = 'normal';
    }else{
        outputText.style.fontWeight = 'bold';
    }
});
italicBtn.addEventListener('click',()=>{
    if(outputText.style.fontStyle === 'italic'){
        outputText.style.fontStyle = 'normal';
    }else{
        outputText.style.fontStyle = 'italic';
    }
});
lineBtn.addEventListener('click',()=>{
    if(outputText.style.textDecoration === 'underline'){
        outputText.style.textDecoration = 'none';
    }else{
        outputText.style.textDecoration = 'underline';
    }
    
});
leftBtn.addEventListener('click',()=>{
    outputText.style.textAlign = 'left';
});
centerBtn.addEventListener('click',()=>{
    outputText.style.textAlign = 'center';
});
rightBtn.addEventListener('click',()=>{
    outputText.style.textAlign = 'right';
});

inputText.addEventListener('input',()=>{
    outputText.value = inputText.value;
});
