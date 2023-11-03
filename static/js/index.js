console.log("It works!");
pageLoader();

// Function to load the page and set event listeners
function pageLoader(){
    console.log('Loading the page with functionality...');

    // Get the nav links and add the changeView event listener
    const navLinks = document.getElementsByClassName('nav-link');
    for (let link of navLinks){
        link.addEventListener('click', changeView)
    }

    // Add the country finder when the form submits
    const findCountryForm = document.querySelector('#find-country-form');
    findCountryForm.addEventListener('submit', e => findCountry(e));
}


function getCountry(e){
    e.preventDefault();
    const countryName = e.target.country.value;
    console.log(`Looking for ${countryName}...`);

    const url = `https://restcountries.com/v3.1/name/${countryame}`
    console.log(url);

    // Make API request with country name
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error9err)

    // Reset the country input to empty
    e.target.country.value = '';
}




// Create a function to make this a Single Page App (SPA) by swapping visible divs
function changeView(e){
    // Turn off the element(s) that are visible
    const toTurnOff = document.getElementsByClassName('is-visible');
    for (let element of toTurnOff){
        element.classList.replace('is-visible', 'is-invisible');
        let navLink = document.getElementsByName(element.id)[0];
        navLink.classList.remove('active');
    }
    // Turn on the element based on the link we clicked
    let idToTurnOn = e.target.name;
    const toTurnOn = document.getElementById(idToTurnOn);
    toTurnOn.classList.replace('is-invisible', 'is-visible');
    e.target.classList.add('active');
}



// // Function to get brewery data
// function findCountry(e){
//     e.preventDefault();
//     // Get the value from the country Input
//     const countryName = document.getElementsByName('country')[0].value;
//     console.log(`Looking for ${countryName}...`);

//     const url = `https://restcountries.com/v3.1/name/{countryName}`
//     console.log(url);

//     // Make API request with city name
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayCountry(data))
//         .catch(err => console.error(err))
// }


// // Callback function for findBreweries that will insert breweries into the table
// function displayCountry(data){
//     let table = document.getElementById('country-table');

//     // Clear out the table of any current data
//     clearTable(table);

//     // Create the brewery table headers
//     const thead = document.createElement('thead');
//     table.append(thead);
//     let tr = document.createElement('tr');
//     thead.append(tr);
//     const tableHeadings = ['Name', 'Flag', 'Coat of Arms', 'Capital', 'Languages', 'Currencies'];
//     tableHeadings.forEach( heading => {
//         let th = document.createElement('th');
//         th.scope = 'col';
//         th.innerHTML = heading;
//         tr.append(th)
//     })

//     let tbody = document.createElement('tbody');
//     table.append(tbody);
//     // write a row for each brewery in data
//     for (let country of data){
//         let tr = document.createElement('tr');
//         tbody.append(tr);

//         newDataCell(tr, `<a href=${https://restcountries.com/v3.1/name/} target="_blank">${country.name}</a>`);
//         newDataCell(tr, country.countryName);
//         newDataCell(tr, country.flag);
//         newDataCell(tr, country.coatOfArms);
//         newDataCell(tr, brewery.capital);
//         newDataCell(tr, brewery.languages);
//         newDataCell(tr, brewery.currencies);
//     }
// }

    // // Add a next button if there is data
    // if (data.length === 10){
    //     let nextButton = document.createElement('button');
    //     nextButton.classList.add('prev-next-btn', 'btn', 'btn-primary');
    //     nextButton.innerHTML = 'Next';
    //     nextButton.addEventListener('click', e => findCountries(e));
    //     table.after(nextButton);
    // }

//     // Add a previous button for all pages page 1
//     if (pageNumber > 1){
//         let prevButton = document.createElement('button');
//         prevButton.classList.add('prev-next-btn', 'btn', 'btn-danger');
//         prevButton.innerHTML = 'Prev';
//         prevButton.addEventListener('click', e => findCountries(e))
//         table.after(prevButton);
//     }
// }


//         // Helper Function to create a new data cell for the table
// function newDataCell(tr, value){
//     let td = document.createElement('td');
//     td.innerHTML = value ?? '-';
//     tr.append(td)
// }

// // Helper Function to clear the table and buttons
// function clearTable(table){
//     table.innerHTML = '';
//     const buttonsToClear = document.querySelectorAll('.prev-next-btn');
//     for (let btn of buttonsToClear){
//         btn.remove()
//     }
// }