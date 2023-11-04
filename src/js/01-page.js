import headerTmp from "../templates/header.hbs"

const refs = {
    header: document.querySelector("header"),
    main: document.querySelector(".cards"),
    footer: document.querySelector("footer")
}

const header = headerTmp()

document.body.insertAdjacentHTML("afterbegin", header)

