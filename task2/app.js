// Use bootstrap to make projects nice, if you don't want to loose time on writing CSS

// ========================================================
// Task 2 - Meal Searching App
/*
 We need one input field, where we type search term and as soon as we hit enter it fetches meals and displays them bellow search
*/
// https://www.themealdb.com/api.php
// ========================================================


async function search(){
  let searchtext=document.getElementsByClassName('form-control')[0];
  console.log(searchtext.value)
  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext.value}`;
  

  function Recipe(url) {
    return fetch(url)
        .then(response => response.json())
  }
  const response = await Recipe(url);

  response.meals.forEach(meal => {
    let answers=document.getElementById('answers');
    let ansdiv=document.createElement('div');
    let img=document.createElement('img');
    img.src=meal.strMealThumb;
    let p=document.createElement('p');
    p.innerHTML=meal.strInstructions;
    ansdiv.append(img)
    ansdiv.append(p)
    answers.append(ansdiv)
  });
  
}

