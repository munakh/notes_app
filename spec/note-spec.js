function testingReturnNoteEqualsThisText() {
  var note = new Note("hello");
  assert.isTrue(note.returnNote() === "hello");
};

testingReturnNoteEqualsThisText();
