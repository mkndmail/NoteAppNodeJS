const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Customise yargs's version
yargs.version("1.1.0");

// add, remove, read, list commands

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Title of your note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "description about the note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create a remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "type the title you want to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create a read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Enter a note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//Create a list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    notes.showAllNotes();
  },
});

// yargs.command({
//   command: "update",
//   describe: "Update a note",
//   builder: {
//     title: {
//       describe: "type the title you want to update",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler:  (argv)=> {
//     notes.removeNote(argv.title);
//   },
// });
yargs.parse();
