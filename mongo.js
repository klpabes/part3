// const mongoose = require("mongoose");

// if (process.argv.length < 3) {
//   console.log("give password as argument");
//   process.exit(1);
// }

// const password = process.argv[2];

// const url = `mongodb+srv://klpabes99:${password}@cluster0.rs1r1qm.mongodb.net/phonebookApp?retryWrites=true&w=majority`;

// mongoose.set("strictQuery", false);
// mongoose.connect(url);

// const personSchema = new mongoose.Schema({
//   name: String,
//   number: String,
// });

// const Person = mongoose.model("Person", personSchema);

// if (process.argv.length === 3) {
//   Person.find({}).then((res) => {
//     res.forEach((person) => {
//       const { name, number } = person;
//       console.log(name, number);
//     });
//     mongoose.connection.close();
//   });
// } else if (process.argv.length > 3) {
//   const person = new Person({
//     name: process.argv[3],
//     number: process.argv[4],
//   });

//   person.save().then((result) => {
//     const { name, number } = result;
//     console.log(`added ${name} ${number} to phonebook`);
//     mongoose.connection.close();
//   });
// }

// Note.find({ important: true }).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });
