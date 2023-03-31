// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

//-----------------PLAN VAN AANPAK-----------------//
//[x] Het indexnummer van @ bepalen met indexOf()
//[x] De @ opslaan in een variabele zodat ermee gewerkt kan worden
//[x] een formule maken voor het domein met substring()
//[x] het domein teruggeven in een return value
//[x] testen of het werkt!

console.log("Opdracht 1:");
console.log("----------------------");

function getEmailDomain(email){
    const indexNumber = email.indexOf("@");
    const domain = email.substring(indexNumber + 1);
    return domain;
}

console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));
console.log(getEmailDomain("jij@debestenakijker.nl"));

console.log("----------------------");
console.log(" ");

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

//-----------------PLAN VAN AANPAK-----------------//
//[x] Het indexnummer van @ bepalen met indexOf()
//[x] De @ opslaan in een variabele zodat ermee gewerkt kan worden
//[x] een formule maken voor het domein met substring()
//[x] een if else if else chain maken met een variabele om te bepalen wat de afzender voor vogel is
//[x] de waarde van de bovenstaande variabele als return value meegeven

console.log("Opdracht 2:");
console.log("----------------------");

function typeOfEmail(email) {
    const indexNumber = email.indexOf("@");
    const domain = email.substring(indexNumber + 1).toLowerCase();
    if (domain === "novi-education.nl") {
        return "Student";
    } else if (domain === "novi.nl") {
        return "Medewerker";
    } else {
        return "Extern";
    }
}

const emailResult01 = typeOfEmail("n.eeken@novi-education.nl");
const emailResult02 = typeOfEmail("t.mellink@novi.nl");
const emailResult03 = typeOfEmail("novi.nlaapjesk@outlook.com");
const emailResult04 = typeOfEmail("a.wiersma@outlook.com");

console.log(emailResult01);
console.log(emailResult02);
console.log(emailResult03);
console.log(emailResult04);

console.log("----------------------");
console.log(" ");

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

//-----------------PLAN VAN AANPAK-----------------//
//[] Checken of @ voorkomt in de input
//[] Checken of , voorkomt in de input
//[] Checken wat het laatste waarde is
//[x] Als die laatste waarde overeenkomt met . dan false teruggeven
//[x] Wanneer er true false en false wordt meegegeven dan is de waarde true, zo niet dan false

console.log("Opdracht 3:");
console.log("----------------------");

function checkEmailValidity(email) {
    const checkSymbol01 = email.includes("@");
    const checkSymbol02 = email.includes(",");
    const emailLength = email.length;
    const lastIndex = email.substring(emailLength - 1);
    if (checkSymbol01 === true && checkSymbol02 === false && lastIndex !== ".") {
        return true;
    } else {
        return false;
    }
}

const checkEmail01 = checkEmailValidity("n.eeken@novi.nl");
const checkEmail02 = checkEmailValidity("tessmellink@novi.nl");
const checkEmail03 = checkEmailValidity("n.eekenanovi.nl");
const checkEmail04 = checkEmailValidity("n.eeken@novinl.");
const checkEmail05 = checkEmailValidity("tessmellink@novi,nl");

console.log(checkEmail01);
console.log(checkEmail02);
console.log(checkEmail03);
console.log(checkEmail04);
console.log(checkEmail05);


console.log("----------------------");
console.log(" ");