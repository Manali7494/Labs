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

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (name === this.name) {
      return this;
    }

    for (let vamp of this.offspring) {
      let search = vamp.vampireWithName(name);

      if (search) {
        return search;
      }
    }

    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let vampSum = 0;

    for (let vamp of this.offspring) {
      vampSum += vamp.totalDescendents + 1;
    }

    return vampSum;
  }
  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millenialVamps = []; // 1

    if (this.yearConverted > 1980) {
      millenialVamps.push(this); // 2
    }

    for (let vamp of this.offspring) {
      millenialVamps = millenialVamps.concat(vamp.allMillennialVampires);
    }

    return millenialVamps;
  }
}
module.exports = Vampire;
