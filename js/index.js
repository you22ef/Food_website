/// <reference types="../@types/jquery"/>


let data;
let navOpen = 0;


$('.toggler .open-close-icon').on('click',  function()
{
    toggle();
    
});


$('.search .row .i1').on('keyup',  async function()
{   
    if(!$('.contact').hasClass('d-none'))
    {
        $('.contact').addClass('d-none');
    }
    
    let value = $(this).val().toLowerCase();
    data = await getData(value);
    await DispalyItems(data);
    $('.items').removeClass('d-none');
});

$('.search .row .i2').on('keyup', async function()
{
    if(!$('.contact').hasClass('d-none'))
    {
        $('.contact').addClass('d-none');
    }
    let value = $(this).val().toLowerCase();
    data = await getDataFirst(value);
    await DispalyItems(data);
    $('.items').removeClass('d-none');
});

$('#Categories').on('click', async function()
{
    if(!navOpen)
    {
        toggle();

    }
    if(!$('.details').hasClass('d-none'))
    {
        $('.details').addClass('d-none');
    }
    if(!$('.areas').hasClass('d-none'))
    {
        $('.areas').addClass('d-none');
    }
    if(!$('.search').hasClass('d-none'))
    {
        $('.search').addClass('d-none');
    }
    if(!$('.contact').hasClass('d-none'))
    {
        $('.contact').addClass('d-none');
    }
    
    await DispalyCtegories();
    if($('.items').hasClass('d-none'))
    {
        $('.items').removeClass('d-none');
    }
});

$('#Search').on('click', function()
{
    if(!navOpen)
    {
        toggle();
        
    }
    if(!$('.details').hasClass('d-none'))
    {
        $('.details').addClass('d-none');
    }
    if(!$('.areas').hasClass('d-none'))
    {
        $('.areas').addClass('d-none');
    }
    if(!$('.contact').hasClass('d-none'))
    {
        $('.contact').addClass('d-none');
    }
    if($('.search').hasClass('d-none'))
    {
        $('.search').removeClass('d-none');
    }
    $('.items').addClass('d-none');
});
$('#Area').on('click', async function()
{
    if(!navOpen)
    {
        toggle();
        
    }
    if(!$('.details').hasClass('d-none'))
    {
        $('.details').addClass('d-none');
    }
    if($('.areas').hasClass('d-none'))
    {
        $('.areas').removeClass('d-none');
    }
    if(!$('.search').hasClass('d-none'))
    {
        $('.search').addClass('d-none');
    }
    if(!$('.contact').hasClass('d-none'))
    {
        $('.contact').addClass('d-none');
    }
    await DisplayAreas();
    if($('.items').hasClass('d-none'))
    {
        $('.items').removeClass('d-none');
    }
    
});
$('#Ingredients').on('click', async function()
{
    if(!navOpen)
    {
        toggle();
        
    }
    if(!$('.details').hasClass('d-none'))
    {
        $('.details').addClass('d-none');
    }
    if(!$('.areas').hasClass('d-none'))
    {
        $('.areas').addClass('d-none');
    }
    if(!$('.search').hasClass('d-none'))
    {
        $('.search').addClass('d-none');
    }
    if(!$('.contact').hasClass('d-none'))
    {
        $('.contact').addClass('d-none');
    }
    await DisplayIngrediants();
    if($('.items').hasClass('d-none'))
    {
        $('.items').removeClass('d-none');
    }
    
});

$('#Contact').on('click', async function()
{
    if(!navOpen)
    {
        toggle();
        
    }
    if(!$('.details').hasClass('d-none'))
    {
        $('.details').addClass('d-none');
    }
    if(!$('.areas').hasClass('d-none'))
    {
        $('.areas').addClass('d-none');
    }
    if($('.search').hasClass('d-none'))
    {
        $('.search').removeClass('d-none');
    }
    if($('.contact').hasClass('d-none'))
    {
        $('.contact').removeClass('d-none');
    }
    if(!$('.items').hasClass('d-none'))
    {
        $('.items').addClass('d-none');
    }
    
});

function toggle()
{
    $('.contain').animate({width :'toggle'},600);
    if(navOpen)
    {   
        $('.i5').animate({top :'0'},600);
        $('.i1').animate({top :'0'},700);
        $('.i2').animate({top :'0'},800);
        $('.i3').animate({top :'0'},900);
        $('.i4').animate({top :'0'},1000);
        $('.navbar .footer').animate({left :'0'},600);
        
    }
    else
    {
        $('.nav-item').animate({top :'200px'},600); 
        $('.navbar .footer').animate({left :'-100px'},600);
    }

    if($('.toggler .open-close-icon').hasClass('fa-align-justify'))
    {
        $('.toggler .open-close-icon').removeClass('fa-align-justify');
        $('.toggler .open-close-icon').addClass('fa-x');
        navOpen = 0;
    }
    else
    {
        $('.toggler .open-close-icon').removeClass('fa-x');
        $('.toggler .open-close-icon').addClass('fa-align-justify');
        navOpen = 1;
        
    }
}


async function getDataFirst(name) 
{

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`;

    try {
        const response = await fetch(url);
        data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getData(name ="") 
{

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    try {
        const response = await fetch(url);
        data = await response.json();
        
        return data;
    } catch (error) {
        
        console.error(error);
    }
}

async function filterByCategory(Category) 
{

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`;

    try {
        const response = await fetch(url);
        data = await response.json();
        DispalyItems(data);
        
    } catch (error) {
        console.error(error);
    }
    
}
async function filterByAreas(Area) 
{

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`;

    try {
        const response = await fetch(url);
        data = await response.json();
        DispalyItems(data);
        
    } catch (error) {
        console.error(error);
    }
    
}

async function getCategory() 
{

    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

    try {
        const response = await fetch(url);
        data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


async function DispalyItems(data)
{
    $('.spinner-container').fadeIn();

    
    if(!data)
    {
        data = await getData();
        
    }
    
    
    let cartona = '';
    try {
        for (let i = 0; i < data.meals.length; i++) 
        {
            cartona +=`<div class="col-lg-3 c-img">
                            <div class="image">
                                <div class="cover d-flex  align-items-center">
                                <h3 class="ms-2">${data.meals[i].strMeal}</h3>
                                </div>
                                <img src="${data.meals[i].strMealThumb}"  alt="strMealThumb">
                            </div>
                        </div>`;
        }
        $('.items').html(cartona);
        $('.spinner-container').fadeOut();
        
    } catch (error) {
        
        $('.spinner-container').fadeOut();
    }
       
        
         

    DispalyDetails(data);
        
        
        
}

async function DispalyCtegories()
{
    $('.spinner-container').fadeIn();
    let data = await getCategory();
    let cartona = '';
    for (let i = 0; i < data.categories.length; i++) 
    {
        cartona +=`<div class="col-lg-3 c-img">
                        <div class="image ">
                            <div class="cover  overflow-hidden d-flex flex-column justify-content-center align-items-center">
                            <h3 class="ms-2">${data.categories[i].strCategory}</h3>
                            <p class="text-center px-3">${data.categories[i].strCategoryDescription.split(' ').slice(0,20).join(' ')}</p>
                            </div>
                            <img src="${data.categories[i].strCategoryThumb}"  alt="strCategoryThumb">
                        </div>
                    </div>`;
    }
    $('.items').html(cartona);
    $('.spinner-container').fadeOut();
    $('.c-img .image').on('click',  function()
    {
        if(!navOpen)
        {
            toggle();

        }
        let value = $(this).find('h3').text();
        console.log(value);
        filterByCategory(value);
    });
    
}

async function getMealById(id)
{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    try {
        const response = await fetch(url);
        data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


async function DispalyDetails(data) {

    
   
    let card = document.querySelectorAll('.items .image');
    let len = card.length;

    for (let i = 0; i < len; i++) {
        card[i].addEventListener('click', async (e) => {
            if(!navOpen)
            {
                toggle();

            }
            $('.spinner-container').fadeIn();

            if(!$('.search').hasClass('d-none'))
            {
                $('.search').addClass('d-none');
            }
            let mealDetails = data.meals[i];

            
            if (!mealDetails.strInstructions || !mealDetails.strArea || !mealDetails.strCategory) {
                mealDetails = await getMealById(data.meals[i].idMeal);
                mealDetails = mealDetails.meals[0]; 
            }

            let cartona = `
                <div class="container d-flex justify-content-center align-items-center">
                    <div class="row">
                        <div class="col-xxl-4">
                            <div class="image2">
                                <img src="${mealDetails.strMealThumb}" alt="strMealThumb">
                            </div>
                            <div class="text-img">
                                <h1 class="text-white fs-2 mt-1">${mealDetails.strMeal}</h1>
                            </div>
                        </div>
                        <div class="col-xxl-8 text text-white">
                            <h1 class="h2">Instructions</h1>
                            <p>${mealDetails.strInstructions}</p>
                            <h3><span class="fw-bold">Area :</span> ${mealDetails.strArea}</h3>
                            <h3><span class="fw-bold">Category :</span> ${mealDetails.strCategory}</h3>
                            <h3><span class="fw-bold">Recipes :</span></h3>
                            <div class="recipes ms-2 d-flex flex-wrap"></div>
                            <h3 class="mt-3"><span class="fw-bold">Tags :</span></h3>
                            <div class="tags ms-2 d-flex flex-wrap"></div>
                            <div class="buttons mt-4 mb-5">
                                <a target="_blank" href="${mealDetails.strSource}" class="btn btn-success">Source</a>
                                <a target="_blank" href="${mealDetails.strYoutube}" class="btn btn-danger">Youtube</a>
                            </div>
                        </div>
                    </div>
                </div>`;

            
            let cartona2 = '';
            let counter = 1;
            let ingredient = mealDetails[`strIngredient${counter}`];

            while (ingredient) {
                let recipe = `${mealDetails[`strMeasure${counter}`]} ${ingredient}`;
                cartona2 += `
                    <div class="text m-0 me-3 mb-2 rounded-1 mt-2">
                        <p class="rounded-2 m-0">${recipe}</p>
                    </div>`;
                counter++;
                ingredient = mealDetails[`strIngredient${counter}`];
            }

            
            let cartona3 = '';
            if (mealDetails.strTags) {
                let tags = mealDetails.strTags.split(",");
                for (let tag of tags) {
                    cartona3 += `
                        <div class="text m-0 me-2 rounded-1 mt-2">
                            <p class="rounded-2 text-center m-0">${tag}</p>
                        </div>`;
                }
            }

            $('.details').removeClass('d-none');
            $('.items').addClass('d-none');
            $('.details').html(cartona);
            $('.details .recipes').html(cartona2);
            $('.tags').html(cartona3);
            $('.spinner-container').fadeOut();
            
        });
    }
}


async function getAreas()
{
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;


    try {
        const response = await fetch(url);
        data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function DisplayAreas()
{
    $('.spinner-container').fadeIn();
    data = await getAreas();
    let cartona = '';
    for (let i = 0; i < data.meals.length; i++) 
    {
        cartona +=`<div class="col-md-3  area">
                        <div  class="rounded-2 pointer text-center text-white">
                                <i class="fa-solid  fa-house-laptop fa-4x"></i>
                                <h3>${data.meals[i].strArea}</h3>
                        </div>
                    </div>`;
    }
    $('.items').html(cartona);
    $('.spinner-container').fadeOut();
    $('.it .items .area').on('click',  function()
    {
        if(!navOpen)
        {
            toggle();

        }
        let value = $(this).find('h3').text();
        filterByAreas(value);
    });
}


async function getIngrediants()
{
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;


    try {
        const response = await fetch(url);
        data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


async function filterByIngrediants(Ingrediant) 
{

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingrediant}`;

    try {
        const response = await fetch(url);
        data = await response.json();
        DispalyItems(data);
        
    } catch (error) {
        console.error(error);
    }
    
}

async function DisplayIngrediants() {
    try {
        $('.spinner-container').fadeIn();
        const data = await getIngrediants();
        let cartona = '';

        for (let i = 0; i < 20; i++) {
            const description = data.meals[i].strDescription || ''; 
            const shortDescription = description.split(' ').slice(0, 20).join(' ');

            cartona += `
                <div class="col-md-3">
                    <div class="rounded-2 text-white text-center ingre ">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${data.meals[i].strIngredient}</h3>
                        <p>${shortDescription}</p>
                    </div>
                </div>`;
        }

        $('.items').html(cartona);
        $('.spinner-container').fadeOut();

        $('.it .items .ingre').on('click', function() {
            if(!navOpen)
            {
                toggle();

            }
            let value = $(this).find('h3').text();
            filterByIngrediants(value);
        });
    } catch (error) {
        console.error('Error fetching ingredients:', error);
    }
}

function validateInput(input) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(010|011|012|015)\d{8}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    let isValid = true;
    
    switch(input.id) {
        case 'nameInput':
            if (!nameRegex.test(input.value)) {
                document.getElementById('nameAlert').classList.remove('d-none');
                
            } else {
                document.getElementById('nameAlert').classList.add('d-none');
            }
            break;
        
        case 'emailInput':
            if (!emailRegex.test(input.value)) {
                document.getElementById('emailAlert').classList.remove('d-none');
                
            } else {
                document.getElementById('emailAlert').classList.add('d-none');
            }
            break;
            
        case 'phoneInput':
            if (!phoneRegex.test(input.value)) {
                document.getElementById('phoneAlert').classList.remove('d-none');
                
            } else {
                document.getElementById('phoneAlert').classList.add('d-none');
            }
            break;
            
        case 'ageInput':
            if (input.value < 1 || input.value > 100) {
                document.getElementById('ageAlert').classList.remove('d-none');
                
            } else {
                document.getElementById('ageAlert').classList.add('d-none');
            }
            break;
            
        case 'passwordInput':
            if (!passwordRegex.test(input.value)) {
                document.getElementById('passwordAlert').classList.remove('d-none');
                
            } else {
                document.getElementById('passwordAlert').classList.add('d-none');
            }
            break;
            
        case 'repasswordInput':
            const passwordInput = document.getElementById('passwordInput');
            if (input.value !== passwordInput.value) {
                document.getElementById('repasswordAlert').classList.remove('d-none');
                
            } else {
                document.getElementById('repasswordAlert').classList.add('d-none');
            }
            break;
    }
    
    
    const inputs = document.querySelectorAll('.form-control');
    isValid = Array.from(inputs).every(input => {
        switch(input.id) {
            case 'nameInput': return nameRegex.test(input.value);
            case 'emailInput': return emailRegex.test(input.value);
            case 'phoneInput': return phoneRegex.test(input.value);
            case 'ageInput': return input.value >= 1 && input.value <= 100;
            case 'passwordInput': return passwordRegex.test(input.value);
            case 'repasswordInput': return input.value === document.getElementById('passwordInput').value;
            default: return true;
        }
    });
    
    document.getElementById('submitBtn').disabled = !isValid;
}

document.getElementById('nameInput').addEventListener('input', (e) => validateInput(e.target));
document.getElementById('emailInput').addEventListener('input', (e) => validateInput(e.target));
document.getElementById('phoneInput').addEventListener('input', (e) => validateInput(e.target));
document.getElementById('ageInput').addEventListener('input', (e) => validateInput(e.target));
document.getElementById('passwordInput').addEventListener('input', (e) => validateInput(e.target));
document.getElementById('repasswordInput').addEventListener('input', (e) => validateInput(e.target));




toggle();

DispalyItems(data);


