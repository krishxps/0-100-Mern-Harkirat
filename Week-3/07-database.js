// getting-started.js
const mongoose = require('mongoose');
const {uri} = require('../database.js');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
  console.log("Database connected");
}

const kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };
  
  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'Silence' });
  console.log(silence);

  const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

const kittens =  Kitten.find();
console.log(kittens);

Kitten.find({ name: /^fluff/ });
