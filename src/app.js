class Pokemon {

  constructor(name) {
    this.name = name;
    this.types = [];
  }

  returnName() {
    return this.name;
  }

  setTypes(name) {
    this.types.push(name);
  }

  returnTypes() {
    this.types.forEach(element => {
      element
    });
  }

}