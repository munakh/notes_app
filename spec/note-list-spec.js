function testingReturnList() {
  var list = new NoteList();
  assert.isTrue(list.returnList() === list.array);
};

testingReturnList();

function testingCreateAndStoreList() {
  // var note = new Note("Hello");
  var list = new NoteList();
  var note = new Note(this.text);
  var note1 = new Note(this.text);
  // var listitem = new Note("Hello");
  list.createAndStoreList(note);
  assert.isTrue(list.returnList()[0] === note.text);
  assert.isTrue(list.returnList()[1] === note1.text);

};

testingCreateAndStoreList();

// function testingCreateAndStoreList() {
//
// }
