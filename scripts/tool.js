// selectos for function
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


function getData(element){

        //get surface value from data
        let data = element.innerText;

        //clean data
        return data.match(/^\d+/)[0];

}


function calcSurf(selectors = undefined){
    
    const elements = getElements(selectors);

    if(elements == false){
        return false;
    }
        
    //get surface data
    const surface = getData(elements.data);


    //get packadges value from input
    const number = elements.input.value;

    //calc surface
    const result = Math.floor((number * surface));

    //set result to data field
    elements.result.innerText  = result + " m2";

    return true;
}


function calcNumber(selectors = undefined){

    const elements = getElements(selectors);

    if(elements == false){
        return false;
    }
        
    //get surface per pack data
    const surface = getData(elements.data);

    //get surface value from input
    const number = elements.input.value;

    //calc number of packs
    const result = Math.ceil((number / surface) * 1.1);

    //set result to data field
    elements.result.innerText  = result;

    return true;
}

// set values on load
calcSurf(selectors.surf);
calcNumber(selectors.number);

// selectors for event listners
const inputs = {
    surf:selectors.surf.input,
    number:selectors.number.input,
}

const elements = getElements(inputs);

// set surface event
if(elements.surf){
    elements.surf.addEventListener('change', ()=>{
        calcSurf(selectors.surf);
    });
}


// set number event
if(elements.number){
    elements.number.addEventListener('change', ()=>{
        calcNumber(selectors.number);
    });
}




// for data manipulation and test only -> NOT FOR ACTUAL PROJECT 
const data = document.getElementById("change-data");

if(data){

    data.addEventListener('blur',(e)=>{
        
        const dataEle = document.getElementById("data");

        if(dataEle){

            dataEle.innerText = e.target.value + 'm2';

        }

        calcSurf(selectors.surf);
        calcNumber(selectors.number);
    })
}