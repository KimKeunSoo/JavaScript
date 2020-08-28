var person = {
  name: "keunsoo",
  getName: function () {
    return this.name;
  },
  setName: function (arg) {
    this.name = arg;
  },
};

var student = Object.create(person);

student.setName("me");

console.log(student.getName()); //	me
