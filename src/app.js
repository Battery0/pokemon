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
    console.log(this.types);
    // this.types.forEach(element => {
    //   coneole.log(element);
    // });


  }

}