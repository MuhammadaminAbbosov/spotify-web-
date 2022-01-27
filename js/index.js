const asideRight = document.querySelector(".aside-right")
asideRightObjact.forEach((e) => {
    const asideImg = document.createElement("img")
    asideImg.src = e

    asideRight.appendChild(asideImg)
})