// const title = document.querySelector('#title')
// console.log(title.textContent)
// title.textContent = 'שלום DOM!'
// console.log(title.textContent)

// const id = document.getElementById('box')
// id.innerHTML = '<p><strong>חשוב</strong> קראו עד הסוף</p>'
// console.log(id.innerHTML)

// const message = document.getElementById('msg')
// console.log(message.textContent)
// console.log(message.innerText)


const tags = ['JavaScript','DOM','HTML']
const html = tags.map(tag =>`<li>${tag}</li>`).join('')
const ul = document.getElementById('tags')
ul.innerHTML = html



