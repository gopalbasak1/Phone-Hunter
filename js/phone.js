const loadPhone = async(searchField) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchField}`);
    const data = await res.json();
    const phones = data.data;

    //console.log(phones);
    displayPhones(phones)
}

const displayPhones = phones =>{
    //console.log(phones);
    const phoneContainer = document.getElementById('phone-container');

    //clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    phones.forEach(phone =>{
        console.log(phone);

        const phoneCard = document.createElement('div');
        phoneCard.classList= `card  bg-base-100 shadow-xl p-4`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name
          }</h2>
          <p>${phone.brand}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
}

//handle search button
const handleSearch = ()=>{
  const searchField = document.getElementById('input-field').value;
  //console.log(searchField);
  loadPhone(searchField);
}



//loadPhone();