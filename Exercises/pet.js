function Pet(name, age, breed, adopted) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.adopted = adopted;
}

Pet.prototype.displayInfo = function() {
    return `<strong>Name:</strong> ${this.name}, <strong>Age:</strong> ${this.age}, <strong>Breed:</strong> ${this.breed}, <strong>Name:</strong> ${this.adopted ? 'Adopted' : 'Available for adoption'}`;
}

document.getElementById("petForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let breed = document.getElementById("breed").value;
    let status = document.getElementById("status").value;
    let newPet = new Pet(name, age, breed, status === "adopted");
    let petElement = document.createElement("div");
    document.getElementById("petList").appendChild(petElement);
    document.getElementById("petForm").reset();
});