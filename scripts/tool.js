console.log("RUN TOOL SCRIPT");

const selectors = {
    opp:{
        data:'a-data',
        input:'a-pakken',
        result:'a-result'
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

    console.log(elements);
    // add event listner
    elements.input.addEventListener('change', ()=>{
        
        //get value from data
        let data = elements.input.innerText;


        
        console.log(data);
    })

    return true;
}


console.log(calcSurf(selectors.opp));