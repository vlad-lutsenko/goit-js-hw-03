"use strict";

const countProps = function(obj) {
  return Object.entries(obj).length;
};
// була задача зробити функцію яка б повертала кількість властивостей об’єкту. саме тому (масив властивостей).ленгтс
// не можу зрозуміти питання до ентріз. почну перебирати об’єкт - це збільшить мені кількість коду, а так - все лаконічно.

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
