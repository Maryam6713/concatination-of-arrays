//------For concat both arrays-------//

//------- Array of fathers------------//
var fathers = ["Amir", "Ansar", "Imran"];

//---------- Array of children names-----------//
var names = [["Maryam", "Fatima" , "Ayesha", "Yousuf"], ["Mehak", "Ahtisham" , "Kashan"], ["Azan", "Ibrahim" , "Ismail"]];

//----------- Array of families----------//
 var families = [];

for (var i = 0; i < fathers.length; i++) {
    var family = fathers[i] + ": " + names[i].join(", ");
    families.push(family);
    
}

var family1 = families.slice(0,1)
var family2 = families.slice(1,2)
var family3 = families.slice(2,3)

families.push(families[0])

console.log(family1);
console.log(family2);
console.log(family3);