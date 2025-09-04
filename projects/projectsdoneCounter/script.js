const counter=document.querySelectorAll('.counter');
counter.forEach((counter)=>{
    counter.innerHTML=0;

    const updatecounter=()=>{
        const targetcount= +counter.getAttribute('data-target');  //+ is used to covert string to number
        const startingcount=+counter.innerHTML
        const incr=targetcount/100; 

        if(startingcount<targetcount){
            counter.innerHTML=`${Math.round(startingcount+incr)}`;
            setTimeout(updatecounter,10)
        }
        else{
            counter.innerHTML=targetcount;
        }
    }

    updatecounter();
})