function load() {
  // 객체 선언
  person = function () {
    this.name;
    this.age;

    this.init = function (_name, _age) {
      this.name = _name;
      this.age = _age;
    };
    this.sayHello = function () {
      var newage = addage(this.age);

      alert(this.name + " Hello " + newage + "살");
    };

    function addage(_age) {
      return _age + 5;
    }
  };

  var p1 = new person();
  p1.init("hongwon", 25);

  var p2 = new person();
  p2.init("eunjoo", 31);

  p1.sayHello();
  p1.age = 40;
  p1.sayHello();

  p2.sayHello();
}

// p1, p2 ...가 새로운 데이터 셋
// sayHello가 drow
