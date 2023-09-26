export default function validateCPF (value : string) {
    let soma = 0
    let resto = 0
    value = value.replace(/[\D]+/g, '')
    if (value === '00000000000') return false
    if (value.length !== 11) return false
    for (let index = 1; index < 10; index++ ) {
        const subtrair = 11
        soma += Number(value[index - 1]) * (subtrair - index) // 210
    } 

    // Multiplicamos por 10 e pegamos o resto
    resto = (10 * soma) % 11 
    if (resto === 10 || resto === 11)  resto = 0
    
    if (Number(value.slice(-2, -1)) !== resto) return false

    soma = 0

    for (let indexLast = 1; indexLast < 11; indexLast ++) {
        const subtrair = 12
        soma += Number(value[indexLast - 1]) * (subtrair - indexLast)
    }

    resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0
    
    if (Number(value.slice(-1)) !== resto) return false
    else return true
}
