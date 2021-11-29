//Lev2_1_js-vertiefung_loops_for-l
let returnArray = []

let imageArray = () => {
    for (let i = 0; i <= 100; i++) {
        if (i < 10) {
            returnArray.push(`image_00${i}.jpg`)
        } else if (i < 100) {
            returnArray.push(`image_0${i}.jpg`)
        } else {
            returnArray.push(`image_${i}.jpg`)
        }
    }
    console.log(returnArray)
}
imageArray()

//Lev2_2_js-vertiefung_loops_with_input
let loop = ["o"]
let check = () => {
    let input = document.getElementById("input").value
    let output = document.getElementById("output")
    for (let i = 0; i < Number(input); i++) {
        Number(input) * loop[i]
        output.innerHTML = `L${i}p`

    }
}