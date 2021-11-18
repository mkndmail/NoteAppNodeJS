const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  return "Your notes...";
};

// Adds a note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  console.log(duplicateNote);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.white.bgGreen("Note added successfully"));
    saveNotes(notes);
  } else {
    console.log(chalk.bgRed("Duplicate note"));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
};

const showAllNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.bold(note.title));
    console.log(chalk.blue(note.body));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  } else {
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();
    const dataObject = JSON.parse(dataString);
    return dataObject;
  } catch (e) {
    console.log(e);
    return [];
  }
};
module.exports = {
  addNote: addNote,
  getNotes: getNotes,
  removeNote: removeNote,
  showAllNotes: showAllNotes,
  readNote: readNote,
};
