
console.log("Masukkan nilai jari-jari=")
process.stdin.on('data', (data) => {
const rString = data.toString().trim()
// console.log(rstring)
const r = Number(rString)
// console.log(r)

let phi = 0

if(r % 7 == 0){
     phi = 22/7
}else{
     phi = 3.14
}

const luas = phi*r*r
const keliling = 2*phi*r

console.log("Luas lingkaran : "+luas)
console.log("Keliling lingkaran : "+keliling)

process.exit();
})