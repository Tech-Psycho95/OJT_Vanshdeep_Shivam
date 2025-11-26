const homeBtn = document.getElementById("homeBtn")
const accountBtn = document.getElementById("accountBtn")
const learnBtn = document.getElementById("learnBtn")
const aboutBtn = document.getElementById("aboutBtn")

const accountDropdown = document.getElementById("accountDropdown")
const learnDropdown = document.getElementById("learnDropdown")
const aboutDropdown = document.getElementById("aboutDropdown")

const clickable = document.querySelectorAll(".click-animate")

homeBtn.addEventListener("click", () => {
    window.location.href = "index.html"
})

accountBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    learnDropdown.style.display = "none"
    aboutDropdown.style.display = "none"
    accountDropdown.style.display =
        accountDropdown.style.display === "flex" ? "none" : "flex"
})

learnBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    accountDropdown.style.display = "none"
    aboutDropdown.style.display = "none"
    learnDropdown.style.display =
        learnDropdown.style.display === "flex" ? "none" : "flex"
})

aboutBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    accountDropdown.style.display = "none"
    learnDropdown.style.display = "none"
    aboutDropdown.style.display =
        aboutDropdown.style.display === "flex" ? "none" : "flex"
})

accountDropdown.addEventListener("click", (e) => e.stopPropagation())
learnDropdown.addEventListener("click", (e) => e.stopPropagation())
aboutDropdown.addEventListener("click", (e) => e.stopPropagation())

window.addEventListener("click", () => {
    accountDropdown.style.display = "none"
    learnDropdown.style.display = "none"
    aboutDropdown.style.display = "none"
})

clickable.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.add("pop")
        setTimeout(() => {
            item.classList.remove("pop")
        }, 180)
    })
})
