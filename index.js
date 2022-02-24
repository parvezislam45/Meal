const searchFood = () => {
    const searchField = document.getElementById('search-Field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    // console.log(url);
    fetch(url)
    .then( res => res.json())
    .then (data => displaySearchResult(data.meals));
}
const displaySearchResult = meals => {
const searchResult = document.getElementById('search-result');
meals.forEach (meal => {
    // console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
            <div onclick="loadmealDetails(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice (0, 200)}</p>
                </div>
            </div>
    `;
    searchResult.appendChild(div)
})
}
const loadmealDetails =mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then (res => res.json())
        .then (data => displayMealDetail(data.meals [0]))
}
const displayMealDetail = meal => {
    console.log(meal);
    const mealDetail = document.getElementById('meal-Details')
    const div = document.createElement('div')
    div.classList.add ('card')
    div.innerHTML = `
    <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice (0, 150)}</p>
              <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          `;
          mealDetail.appendChild(div);
}
