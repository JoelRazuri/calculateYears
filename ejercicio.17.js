/* 
    Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de 
    hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

const calculateYears = (date = undefined) => {
    if (date === undefined) return console.warn("No ingresaste una fecha");
    if (!(date instanceof Date)) return console.error("El tipo de dato ingresado no es una fecha válida");

    let todayMinusNow = new Date().getTime() - date.getTime(),
        yearstToMS = 1000 * 60 * 60 * 24 * 365;
    let years = Math.floor(todayMinusNow/yearstToMS);

    return (Math.sign(years) === -1)
        ? console.info(`Faltan ${Math.abs(years)-1} años para el ${date.getFullYear()}`)
        : (Math.sign(years) === 1)
            ? console.info(`Han pasado ${years} años desde ${date.getFullYear()}`)
            : console.info(`Estamos en el año actual ${date.getFullYear()}`);
}


console.info("EJERCICIO 17")
calculateYears();
calculateYears({});
calculateYears(false);
calculateYears(new Date());
calculateYears(new Date(1998,9,19));
calculateYears(new Date(2030,9,19));
