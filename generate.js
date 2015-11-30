module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");

  return {
    posts: _.times(100, function (n){
      return {
        userId: n,
        id: n,
        title: faker.hacker.phrase(),
        body: faker.lorem.paragraphs()
      }
    }
  )};
}