console.log("It works!");
pageLoader();

// Function to load the page and set event listeners
function pageLoader(){
    console.log('Loading the page with functionality...');

    // Add the country finder when the form submits
    const findCountryForm = document.querySelector('#find-country-form');
    findCountryForm.addEventListener('submit', e => findCountry(e));

    // Do I need a display country here????
    const displayContryCard = document.querySelector('#country-table');
    displayCountryCard.Element.append
}


function findCountry(e){
    e.preventDefault();
    const countryName = e.target.country.value;
    console.log(`Looking for ${countryName}...`);

    const url = `https://restcountries.com/v3.1/name/${countryName}`
    console.log(url);

    // Make API request with country name
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data))
    .catch(err => console.error(err))

    // Reset the country input to empty
    e.target.country.value = '';
}


// Callback function to display country info
function displayCountry(data){
    console.log(data)
    let table = document.getElementById('country-table');

    // Clear out the table of any current data
    table.innerHTML = '';

    // Create table header
    const thead = document.createElement('thead');
    table.append.apply(thead);
    let tr = document.createElement('tr');
    thead.append(tr);
    const tableHeadings = ['Name', 'Flag', 'Coat of Arms', 'Capital', 'Languages', 'Currencies'];
    tableHeadings.forEach( heading => {
        let th = document.createElement('th');
        th.scope = 'col';
        th.innerHTML = heading;
        tr.append(th)
    })

    let tbody = document.createElement('tbody');
    table.append(tbody);
    // Write a row for country in data
    for (let country of data){
        let tr = document.createElement('tr');
        tbody.append(tr);

        newDataCell(tr, country.name.common);
        newDataCell(tr, `<img class="img-fluid" src="${country.flags.png}">`);
        newDataCell(tr, `<img class="img-fluid" src="${country.coatOfArms.png}">`);
        newDataCell(tr, country.capital);
        newDataCell(tr, country.languages[0]);
        let currencies = []
        for (let key in country.currencies){
            currencies.push(country.currencies[key].name)
        }
        newDataCell(tr, currencies.join(", "));
    }
}

// Helper Function to create a new data cell for the table
function newDataCell(tr, value){
    let td = document.createElement('td');
    td.innerHTML = value ?? '-';
    tr.append(td)
}

// Helper Function to clear the table and buttons
function clearTable(table){
    table.innerHTML = '';
    const buttonsToClear = document.querySelectorAll('td');
    for (let btn of buttonsToClear){
        btn.remove()
    }
}

