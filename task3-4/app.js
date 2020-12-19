// Task 3, 4 - Currency Converter
// https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Currency-Converter.md
// ========================================================
const key='b44d871eea40d2fd8fe5'
function swap(){
    let curr1=document.getElementById('cur1')
    let curr2=document.getElementById('cur2')
    let inputcur1=document.getElementById('inputcur1')
    let inputcur2=document.getElementById('inputcur2')
    let placeholder=0;

    placeholder=curr1.value;
    curr1.value=curr2.value;
    curr2.value=placeholder;

    placeholder=inputcur1.value;
    inputcur1.value=inputcur2.value;
    inputcur2.value=placeholder;
}

function Recipe(url) {
    return fetch(url)
        .then(response => response.json())
  }

async function getExchange(){
    let inputcur1=document.getElementById('inputcur1').value
    let inputcur2=document.getElementById('inputcur2').value
    let curr1=document.getElementById('cur1').value
    let curr2=document.getElementById('cur2')

    var url = `https://free.currconv.com/api/v7/convert?q=${inputcur1}_${inputcur2}&compact=ultra&apiKey=${key}`;
    let response = await Recipe(url);
    response=parseInt(response[`${inputcur1}_${inputcur2}`]);
  
        
    curr2.value=curr1*response;
    console.log(curr2)
    console.log(response)
}

async function exchange(){


}