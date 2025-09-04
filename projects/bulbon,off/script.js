const btn=document.querySelector('.btn');
const body=document.querySelector('body');
const audioon=document.querySelector('#audioon');
const audiooff=document.querySelector('#audiooff');


btn.addEventListener('click',()=>{
    const check=body.classList.toggle('on');
    
    if(check==true){
        audioon.play();
    }
    else{
        audiooff.play();
    }
});