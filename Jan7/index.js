let countries = ["India", "Indonesia", "Maldives", "Maxico", "Morocco", "Nepal", "Netherland", "Newziland", "Prau", "Russia", "Romania", "South Africa", "Swizerland", "Thailand", "Turiky", "Uganda", "Ukaran", "UN", "United State of America"];

let container = document.querySelector('.container');
let selectBtn = document.querySelector('.selectCountry');
let dropDownList = document.querySelector('.list-search-container');
let searchInput = document.querySelector('#search');
let lists = document.querySelector('.list');

selectBtn.addEventListener('click', ()=>{
    container.classList.toggle('active');
})

function addCountry(selectedCountry){
    lists.innerHTML = "";
    countries.forEach((country)=>{
        let isSelected = selectedCountry==country?"selected":"";
        let listItem = '<li class="'+ isSelected +'">' + country + '</li>';
        lists.insertAdjacentHTML('beforeend',listItem);
    })
    addClick();
}
addCountry();

function addClick(){
    lists.querySelectorAll('li').forEach(listItem=>{
        listItem.addEventListener('click', ()=>{
            updateSelectCountry(listItem);
        })
    })
}

function updateSelectCountry(listItem){
    searchInput.value = "";
    selectBtn.firstElementChild.innerHTML = listItem.innerHTML;
    container.classList.remove('active');
    addCountry(listItem.innerHTML);
}

searchInput.addEventListener('keyup', ()=>{
    let searchintVal = searchInput.value.toLowerCase();
    let filteredCounteries = countries.filter(country=>
    {
        return country.toLocaleLowerCase().startsWith(searchintVal);
    }).map(country=>{
        return '<li>' + country + '</li>';
    }).join("");
    lists.innerHTML = filteredCounteries;
    addClick();
})

document.body.addEventListener('click', function(e) {
    e.target.classList.remove('active');
  });
