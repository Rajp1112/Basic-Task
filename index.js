const counteNumber = document.querySelectorAll('.counteNumber');

const speed = 3;

counteNumber.forEach((curElm)=>{

    const updateNumber = ()=>{
        const targetNumber = parseInt(curElm.dataset.number);
        // console.log(targetNumber);
        const initialData = parseInt(curElm.innerText );
        // console.log(initialData);
        
        const incrementData = Math.trunc(targetNumber/speed);
        console.log(incrementData);

        if (initialData < targetNumber) {
            curElm.innerText= `${initialData + incrementData}k+`;
            setTimeout(updateNumber,50);
        }
        
    }


    updateNumber();
})