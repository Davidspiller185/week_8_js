// const playerRow = document.querySelectorAll(".player-row")
// playerRow.forEach(el=> {
//     const selectorName = el.querySelector(".name")
//     const selectorScore = el.querySelector(".score")
//     console.log(selectorName.textContent,selectorScore.textContent)
// }
// )

// const playerRow = document.querySelectorAll('.player-row')
// let tottal = 0
// playerRow.forEach(el =>{
//     tottal+=Number(el.dataset.score)
// })

// const id = document.getElementById("total-score")
// id.textContent = tottal
// console.log(id.textContent)


const playerRow = document.querySelectorAll('.player-row')
const array = Array.from(playerRow)
const filter = array.filter(el => {
    const selectorScore = el.querySelector('.score')
    return selectorScore.textContent>15
}
)

console.log(filter.length)




