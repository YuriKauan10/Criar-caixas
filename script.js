
const body = document.querySelector("body")
const btn = document.querySelector('#btn')
const div = document.querySelector(".pai")

btn.addEventListener('click', (e) => {
    const filhoDiv = document.createElement("div")
    filhoDiv.classList.add('filho')
    div.append(filhoDiv)
})

div.addEventListener('click', (e) => {
    let {target} = e
    if(target.classList.contains('pai') ){}
    else{target.style.background = 'orange'}
})






