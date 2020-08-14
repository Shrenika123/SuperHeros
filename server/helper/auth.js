var heros = ["HULK", "THOR", "SUPERMAN", "ROBIN", "IRONMAN", "GHOSTRIDER", "CAPTAINAMERICA", "FLASH", "WOLVERINE", "BATMAN", "HULK", "BLADE", "PHANTOM", "SPIDERMAN", "BLACKWIDOW", "HELLBOY", "PUNISHER"]

var arr = {
    "1": "@.?", "2": "ABC", "3": "DEF", "4": "GHI", "5": "JKL", "6": "MNO", "7": "PQRS", "8": "TUV", "9": "WXYZ"
}

//
//decoding the values to string Ex:2:"ABC"
const decode = (val, arr) => {
    let arr1 = []
    let arrval = Object.keys(arr)

    for (var i = 0; i < val.length; i++) {
        let val3 = val[i]
        arrval.map((ele) => {
            const er = ele.toString()
            if (val3 === ele) {
                console.log(arr[ele])
                arr1.push(arr[ele])
            }

        })
    }
    return arr1
}

//checking if hero is present else throw error
const heroFun = (arr2) => {
    let arrFin = []
    for (let i = 0; i < heros.length; i++) {
        if (heros[i].length === arr2.length)
            arrFin.push(heros[i])
    }

    for (let m = 0; m < arrFin.length; m++) {
        let count = 0
        let hero = arrFin[m]
        loop1: for (let k = 0; k < arr2.length; k++) {
            if (!arr2[k].includes(hero[k])) {
                break loop1
            }
            else {
                // console.log(arr2[k], hero[k])
                count++
                if (count === arr2.length) {
                    return arrFin[m]
                }
            }
        }
    }
    throw new Error()
}

//main function
const auth = async (req, res, next) => {
    var val1;
    var minlen=4
    var maxlen=14
    try {
        let val = req.params.superheroId
        var my_string = val;
        var spaceCount = (my_string.split(" ").length - 1);
        console.log(val[0])
        console.log(val)
        if (val.includes("0 ") && (spaceCount === 1) &&(val.length>=minlen && val.length<=maxlen)) {
            var val3 = val.replace(/[0" "]/, "")
            console.log(val3)
            const arr2 = decode(val3, arr)
            val1 = heroFun(arr2)
            req.val = val1
        }
        else {
            throw new Error()

        }
        next()

    }

    catch (e) {
        console.log(e)
        res.status(404).send('you have missed the code or wrong hero')
    }
}

module.exports = auth