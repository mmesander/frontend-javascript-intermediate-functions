// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

//-----------------PLAN VAN AANPAK-----------------//
//[] Er moet een variabele gemaakt worden met het aantal cum laude studenten (een lege variabele)
//[] Er moet middels een loop gecheckt worden welke waarde hoger is dan 8
//[] elke keer als er aan de conditie wordt voldaan moet er 1 opgeteld worden bij de variable
//[] de variabele moet gelogd worden voor het totaal aantal cum laude studenten

console.log("Opdracht 1a:");
console.log("----------------------");

let cumLaudeStudents01 = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumLaudeStudents01++;
    }
}

console.log(cumLaudeStudents01);

console.log("----------------------");
console.log(" ");

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

console.log("Opdracht 1b:");
console.log("----------------------");

function cumLaude (gradesArray) {
    let numberOfStudents = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] >= 8) {
            numberOfStudents++;
        }
    }
    return numberOfStudents;
}

console.log(cumLaude(grades));

console.log("----------------------");
console.log(" ");

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

//-----------------PLAN VAN AANPAK-----------------//
//[x] Als eerste moet er een nieuwe variabele gemaakt worden met het de totale waarde van alle cijfers
//[x] Vervolgens moet de lengte van de array met grades berekend worden met de length property
//[x] de variabele met cijfers moet gedeeld worden door het aantal cijfers
//[x] dit moet teruggegeven worden

console.log("Opdracht 2a:");
console.log("----------------------");

let totalGrades = 0;
for (let i = 0; i < grades.length; i++) {
    totalGrades = totalGrades + grades[i];
}

console.log(totalGrades / grades.length);

console.log("----------------------");
console.log(" ");


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

console.log("Opdracht 2b:");
console.log("----------------------");

function averageGrade(grades) {
    let totalGrades = 0;
    for (let i = 0; i < grades.length; i++) {
        totalGrades = totalGrades + grades[i];
    }
    return (totalGrades / grades.length);
}

console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));

console.log("----------------------");
console.log(" ");

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

console.log("Opdracht 2c:");
console.log("----------------------");

console.log(Math.round(averageGrade(grades)*100)/100);

console.log("----------------------");
console.log(" ");

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

//-----------------PLAN VAN AANPAK-----------------//
//[x] Vervolgens moet een variabele met highest grade gemaakt worden (op 0)
//[x] Als eerste moet er door de array geloopt worden om te kijken wat de cijfers zijn
//[x] Wanneer er een cijfer wordt gevonden dat hoger is dan moet hij die waarde overschrijven
//[x] Na de loop moet deze variabele teruggegeven worden

console.log("Opdracht 3a:");
console.log("----------------------");

let highestGrade = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGrade) {
        highestGrade = grades[i];
    }
}

console.log(highestGrade);

console.log("----------------------");
console.log(" ");

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

console.log("Opdracht 3b:");
console.log("----------------------");

function getHighestGrade(grades) {
    let highestGrade = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > highestGrade) {
            highestGrade = grades[i];
        }
    }
    return highestGrade;
}

console.log(getHighestGrade(grades));
console.log(getHighestGrade([6, 4, 5]));
console.log(getHighestGrade([8, 9, 4, 6, 10]));

console.log("----------------------");
console.log(" ");