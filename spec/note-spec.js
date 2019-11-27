function testingReturnNoteEqualsThisText() {
  var note = new Note(this.text);
  assert.isTrue(note.returnNote() === note.text);
};

testingReturnNoteEqualsThisText();
