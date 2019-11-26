function testingReturnNoteEqualsThisText() {
  var note = new Note();
  assert.isTrue(note.returnNote == this.text);
};

testingReturnNoteEqualsThisText();
