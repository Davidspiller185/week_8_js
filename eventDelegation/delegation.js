const ul = document.querySelector('#shoppingList')
ul.addEventListener('click', (e) =>{
    const li =e.target.closest('.item')
    if(!li) return
    li.classList.toggle('done')
    console.log(e.target,e.currentTarget)
    
})


const btn = document.querySelector('#addBtn')
const input = document.querySelector('#newItemInput')
btn.addEventListener('click', (e) =>{
    const value = input.value
    const newLi = document.createElement('li')
    newLi.textContent = value
    ul.appendChild(newLi)
})

