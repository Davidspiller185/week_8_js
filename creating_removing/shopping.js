const btn = document.querySelector('#addBtn')
const input = document.querySelector('#itemInput')
const ul = document.querySelector('#shoppingList')
btn.addEventListener('click', (e) =>{
    const value = input.value
    if(!value) return
    const li = document.createElement('li')
    const button = document.createElement('button')
    li.textContent = value
    button.textContent = 'מחק'   
    ul.appendChild(li)
    li.appendChild(button)
    li.addEventListener('click',(e) =>{
        li.remove()
    })
    input.value = ""
})


const array = ['ביצים','חלב','לחם']
const html = array.map(item =>
    `<li>${item}</li>`
).join('')
ul.innerHTML = html
