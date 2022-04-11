let list = document.getElementById('ingredients');
document.querySelector('.next').addEventListener('click', nextRecipe)

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.meals[0].strMeal;
      document.querySelector('img').src = data.meals[0].strMealThumb;
      document.querySelector('h3').innerText = data.meals[0].strInstructions;
      document.querySelector('#linkToRecipe').href = data.meals[0].strSource
      document.querySelector('#linkToYT').href = data.meals[0].strYoutube
      document.querySelector('.country').innerText = `Country of Origin: ${data.meals[0].strArea}, Category: ${data.meals[0].strCategory}`
      let i = 1;
      while (i <= 20){
        if (data.meals[0][`strIngredient${i}`] != "" && data.meals[0][`strIngredient${i}`] != null){
          let listItem = document.createElement('li')
          listItem.innerText = `${data.meals[0][`strMeasure${i}`]} ${data.meals[0][`strIngredient${i}`]}`;
          list.appendChild(listItem)
        }
        i++;
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


function nextRecipe(){
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.meals[0].strMeal;
    document.querySelector('img').src = data.meals[0].strMealThumb;
    document.querySelector('h3').innerText = data.meals[0].strInstructions;
    document.querySelector('#linkToRecipe').href = data.meals[0].strSource
    document.querySelector('#linkToYT').href = data.meals[0].strYoutube
    document.querySelector('.country').innerText = `Country of Origin: ${data.meals[0].strArea}, Category: ${data.meals[0].strCategory}`
    list.innerText =' '
    let i = 1;
    while (i <= 20){
      if (data.meals[0][`strIngredient${i}`] != "" && data.meals[0][`strIngredient${i}`] != null){
        let listItem = document.createElement('li')
        listItem.innerText = `${data.meals[0][`strMeasure${i}`]} ${data.meals[0][`strIngredient${i}`]}`;
        list.appendChild(listItem)
      }
      i++;
    }
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
