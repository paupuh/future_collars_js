
const number = 100;
const text = "Paulina";
const logic = true;
const empty = null;
const args = [1, 2];

const obj = {
      firstField: "obj",
};

console.log(typeof args);
// stała number powinna być typu Number
// stała text powinna być typu String
// stała logic powinna być typu Boolean
// stała empty powinna być wartością pustą (null) lub niezainicjalizowana (undefined)
// stała args powinna być typu Array (`typeof` de facto zwroci `"object"` wynika to z implementacji Array w JS)
// stała obj powinna być obiektem oraz posiadać jedno pole o nazwie `firstField` z wartością "obj"
// Uwaga! Jeśli korzystasz z przygotowanego repozytorium, nie usuwaj nigdy module.exports z istniejącego pliku, to bardzo ważne w kontekście testów automatycznych, testujących Twoje rozwiązanie. Powodzenia!