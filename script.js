
// input entries  / data
const inpAmount = document.getElementById("amount")
const inpCustomTip = document.getElementById("customtip")
const inpPeople = document.getElementById("people")
let inpButtons = document.querySelectorAll(".btn") 
inpButtons = Array.from(inpButtons)

let message = document.querySelector(".message")

// output entries 
const perPeraonTip = document.querySelector(".result-person")
const totalTip = document.querySelector(".result-total")

// buttons 
const reset = document.querySelector(".reset-btn")


// Eventlisners
inpAmount.addEventListener("input",totalAmount)
inpPeople.addEventListener("input",totalPeople)
inpCustomTip.addEventListener("input",tipCustom)
inpButtons.forEach(button => {
    button.addEventListener("click", buttonspercentage)

})

reset.addEventListener("click",Reset)

// variables
inpAmount.value = ""
inpPeople.value = "1"
perPeraonTip.innerHTML = "$ " + (0.0).toFixed(2) 
totalTip.innerHTML = "$ " + (0.0).toFixed(2) 


let billTotal = 0.0
let peopleTotal = 1
let tipPercent = 0.0

function totalAmount() {
    billTotal = parseFloat(inpAmount.value)
    calculateTip()
}

function totalPeople() {
    peopleTotal = parseFloat(inpPeople.value)

    if (peopleTotal <= 0) {
        message.style.display = "block"
    } else {
        message.style.display = "none"

    }
    calculateTip()
}

function tipCustom() {
    tipPercent = parseFloat(inpCustomTip.value / 100)
    calculateTip()
}

function buttonspercentage(event) {
    inpButtons.forEach(button => {
        button.classList.remove("activeone")
        if (event.target.innerHTML == button.innerHTML) {
            button.classList.add("activeone")
            tipPercent = parseFloat(button.innerHTML) / 100
        }
    })
    calculateTip()
}


function calculateTip() {
    if (peopleTotal >= 1) {
        let tip_percon = (billTotal * tipPercent) / peopleTotal
        let tip_total = (billTotal + tip_percon) / peopleTotal

        perPeraonTip.textContent  = `$  ${tip_percon.toFixed(2)}`
        totalTip.textContent = `$ ${tip_total.toFixed(2)}`
}
}

function Reset() {
    inpAmount.value = ""
    totalAmount()
    inpPeople.value = "1"
    totalPeople()
    perPeraonTip.innerHTML = "$ " + (0.0).toFixed(2) 
    totalTip.innerHTML = "$ " + (0.0).toFixed(2) 
}