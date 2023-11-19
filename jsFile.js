function unesiBroj() {
var unosBroj = prompt("Unesite broj od 1 do 5:");
var broj = parseInt(unosBroj);
var tekstovi = ["● Nikad nemoj odustati, jer uvek postoji vreme i mesto kada će se plima promeniti.", 
"● Kreativan čovek motivisan je željom da postigne, a ne željom da pobedi druge.",
 "● Neka ti udica bude uvek bačena. U jezeru u kojem najmanje očekuješ, pojaviće se riba. ", 
 "● Preko noći postaje slavan samo onaj ko je danima neumorno radio.", 
 "● Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može."];

if (!isNaN(broj) && broj >= 1 && broj <= 5) {
    console.log(tekstovi[broj - 1]); 
    document.write(tekstovi[broj - 1]);
} else if (isNaN(broj)) {
    alert("Niste uneli broj!");
} else {
    alert("Morate uneti broj od 1-5!")
}
}
