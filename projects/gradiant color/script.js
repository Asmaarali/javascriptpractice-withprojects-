let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let text = document.getElementById("joke");
let btn1spans = btn1.querySelectorAll('span');
let btn2spans = btn2.querySelectorAll('span');

let rgb1 = 'rgb(221,190,85)'
let rgb2 = 'rgb(216,61,25)'


const hexvalue = () => {
    let myHexaValues = "0123456789abcdef"
    let val = '#'
    for (let i=1;i<=6;i++){
        val = val + myHexaValues[Math.floor(Math.random() * 16)];
        
    }
    
    return val
    
}

const handleButton1 = () => {
    rgb1 = hexvalue();
    document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1} , ${rgb2})`;
    console.log(`Applying Background Image: ${document.body.style.backgroundImage}`);
    // console.log(rgb1);

    
    
    // showing color to html every time the color generated
    text.innerHTML = `background-image: ${document.body.style.backgroundImage}`
    
    
    //todo changing button styles
    btn1.style.color = rgb1;
    btn1.style.border = `0.3em solid ${rgb1}`
    // spans.style.backgroundColor = 'red';
    btn1spans.forEach(span => {
        span.style.backgroundColor = rgb1;
    });
    // console.log(spans);
}

const handleButton2 = () => {
    rgb2 = hexvalue();
    console.log(rgb2);
    // btn2.innerText = rgb2
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    console.log(`Applied Background Image: ${document.body.style.backgroundImage}`);

    // showing color to html every time the color generated
    text.innerHTML = `background-image: ${document.body.style.backgroundImage}`

    
    //todo changing button styles
    btn2.style.color = rgb2;
    btn2.style.border = `0.3em solid ${rgb2}`
    // spans.style.backgroundColor = 'red';
    btn2spans.forEach(span => {
        span.style.backgroundColor = rgb2;
    });
    // console.log(spans);
}

btn1.addEventListener("click" , handleButton1)
btn2.addEventListener("click" , handleButton2)
text.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(text.innerText)
    console.log(`copied ${text.innerText}`);
    alert("Code Copied")
    
})

