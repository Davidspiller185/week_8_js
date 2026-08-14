// const thumb = document.querySelectorAll('.thumb')
// const preview = document.querySelector('#preview')
// const previewName = document.querySelector('#previewName')
// thumb.forEach( thumb =>{
//     thumb.addEventListener('click', (e) => {
//     const selected = document.querySelector('.thumb .selected')
//     if (selected){
//         selected.classList.remove('.selected')
//     }
//     e.currentTarget.classList.add('.selected')

//     previewName.textContent = e.currentTarget.dataset.name
//     preview.classList.add('visible')

// })})


// document.addEventListener('keydown', (e) =>{
//     const selected = document.querySelector('.thumb .selected')
//     if (e.key === "Escape"){
//         if(selected){
//             selected.classList.remove('.selected')
//             preview.classList.remove('visible')
//         }
//         if (e.key === "ArrowRight"){

//         }
//         const array = Array.from(thumb)
//         const index = array.indexOf(selected)
//         const next = thumb[index+1]
//         if(next){
//             selected.classList.remove('selected')
//             next.classList.add('selected')
//             previewName.textContent = next.dataset.name
//         }
//         if(e.key === "ArrowLeft"){
//             const array = Array.from(thumb)
//             const index = array.indexOf(selected)
//             const  prevent = thumb[index-1]
//             if(prevent){
//                 selected.classList.remove('selected')
//                 prevent.classList.add('selected')
//                 previewName.textContent = prevent.dataset.name
//             }
//         }


//     }
// })


const searchForm = document.querySelector('#searchForm')
const search = document.querySelector('#search')
const thumb = document.querySelectorAll('.thumb')

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()



const text = search.value

thumb.forEach(thumb => {
if(thumb.dataset.name.includes(text)){
    thumb.style.display = ""
}
else{
    thumb.style.display = 'none'
}
})
})


