class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numVampire = 0;

    if (this.creator !== null) {
      let creator = this.creator;
      while (creator !== null) {
        numVampire++;
        creator = creator.creator;
      }
    }
    return numVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (
      this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal
    ) {
      return false;
    } else {
      return true;
    }
  }
}
module.exports = Vampire;
