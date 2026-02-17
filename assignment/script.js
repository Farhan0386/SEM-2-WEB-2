const from= document.querySelector('.form');
from.addEventListener('submit', (e) => {
    e.preventDefault();
    let.log(eventTitle.value);
    let.log(eventDate.value);
    let.log(category.value);
    let.log(description.value);

})

from.addEventListener('submit', (e) => {
   let title=eventTitle.value;
   let date=eventDate.value;
   let categoryValue=category.value;
   let descriptionValue=description.value;

 const card=document.createElement('div');
 card.classList.add('card');
    card.innerHTML=` 
    <h3>${title}</h3>
    <p>${date}</p>
    <button>${categoryValue}</button>
    <p>${descriptionValue}</p>
    `;
    events.appendChild(card);
    const dlt=card.querySelector('.dlt');
    dlt.addEventListener('click', () => {
        card.remove();
    }

})

document.querySelector('.clear').addEventListener('click', () => {
    document.querySelector('.card').remove();
    events.innerHTML='';
}