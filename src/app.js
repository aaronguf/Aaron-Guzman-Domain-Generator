//write your code here
function generador() {
  let pronoun = ["the", "our", "them", "your"];
  let adj = ["great", "big", "awesome", "wonderfull", "tasty"];
  let noun = ["jogger", "racoon", "feet", "belly", "ear"];

  let combinations = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        combinations.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  return combinations;
}
console.log(generador());
