const asideRight = document.querySelector(".aside-right")
asideRightObjact.forEach( e => {
    const asideImg = document.createElement("img")
    asideImg.src = e

    asideRight.appendChild(asideImg)
})


const dBox = document.querySelector(".boxs")
dailyImgs.forEach( e => {
    const dImg = document.createElement("img")
    dImg.src = e

    dBox.appendChild(dImg)
})

const cardTop = document.querySelector(".cards")

cardData.forEach(e => {
    const card = document.createElement("div")
    const cardImg = document.createElement("img")
    const text = document.createElement("div")
    const musicName = document.createElement("b") 
    const author = document.createElement("p") 
    
    card.classList.add("card")
    cardImg.src = e.img
    musicName.innerHTML = e.musicName
    author.innerHTML = e.author

    text.append(musicName, author)
    card.append(cardImg, text)
    cardTop.appendChild(card)
})

const cardBottom = document.querySelector(".cards2")
cardData2.forEach(e => {
    const card = document.createElement("div")
    const cardImg = document.createElement("img")
    const text = document.createElement("div")
    const musicName = document.createElement("b") 
    const author = document.createElement("p") 
    
    card.classList.add("card")
    cardImg.src = e.img
    musicName.innerHTML = e.musicName
    author.innerHTML = e.author

    text.append(musicName, author)
    card.append(cardImg, text)
    cardBottom.appendChild(card)
})