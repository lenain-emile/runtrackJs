function jsonValueKey(jsonString, key) {
    try {
        let jsonObject = JSON.parse(jsonString); 
        return jsonObject[key] !== undefined ? jsonObject[key] : "Clé introuvable";
    } catch (error) {
        return "json non valide";
    }
}


let jsonString = '{"name": "Jean", "age": 30, "city": "Marseille"}';
console.log(jsonValueKey(jsonString, "city"));
console.log(jsonValueKey(jsonString, "name")); 
console.log(jsonValueKey(jsonString, "age")); 
console.log(jsonValueKey(jsonString, "pays")); 
console.log(jsonValueKey("Texte invalide", "city")); 