export const MARCAS = [

    { id: 1, nombre: 'Ford'},
    { id: 2, nombre: 'Citroen'},
    { id: 3, nombre: 'Peugeot'}

]



const YEARMAX = new Date().getFullYear()
export const YEARS = Array.from( new Array(20), (valor, index) => YEARMAX - index)



export const PLANES = [
    { id: 1, nombre: "Basico"},
    { id: 2, nombre: "Completo"}
]
// export let YEARS = []
// for (let i=(YEARMAX - 20); i < YEARMAX; i++ ) {
//     YEARS.push(i)
// }

// console.log(YEARS)