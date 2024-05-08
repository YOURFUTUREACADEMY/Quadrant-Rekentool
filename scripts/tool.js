console.log("RUN TOOL SCRIPT");

const selectors = {
    surf:{
        data:'data',
        input:'a-input',
        result:'a-result'
    },
    number:{
        data:'data',
        input:'n-input',
        result:'n-result'
    }
}


function getElements(selectors = undefined){

    if(typeof(selectors) != 'object'){
        return false;
    }

    // get keys
    const keys = Object.keys(selectors);


    //get elements
    let elements = {};
    
    for(const i in keys) {
        const key = keys[i];
        elements[key] = document.getElementById(selectors[key]);
    }


    //check if element where retrieved
    for (const key in elements) {
        if(!elements[key]){
            return false;
        }
    }

    return elements;
}



function calcSurf(selectors = undefined){

    const elements = getElements(selectors);

    if(elements == false){
        return false;
    }

    // add event listner
    elements.input.addEventListener('change', (e)=>{
        
        //get surface value from data
        let data = elements.data.innerText;

        //clean data
        const surface = data.match(/^\d+/)[0];


        //get packadges value from input
        const number = e.target.value;

        //calc surface
        const result = Math.floor((number * surface));

        //set result to data field
        elements.result.innerText  = result + " m2";

    })

    return true;
}


function calcNumber(selectors = undefined){

    const elements = getElements(selectors);

    if(elements == false){
        return false;
    }

    // add event listner
    elements.input.addEventListener('change', (e)=>{
        
        //get surface value from data
        let data = elements.data.innerText;

        //clean data
        const surface = data.match(/^\d+/)[0];
        
        console.log(surface);

        //get packadges value from input
        console.log(e.target.value);
        const number = e.target.value;

        //calc surface
        const result = Math.ceil((number / surface) * 1.1);

        //set result to data field
        elements.result.innerText  = result;

    })

    return true;
}

calcSurf(selectors.surf);
console.log(calcNumber(selectors.number));