function testingReturnList() {
  var list = new NoteList();
  assert.isTrue(list.returnList() === list.array);
};

testingReturnList();

function testingCreateAndStoreList() {
  // var note = new Note("Hello");
  var list = new NoteList();
  var note = new Note("Hello");
  // var listitem = new Note("Hello");
  list.createAndStoreList(note);
  assert.isTrue(list.returnList()[0] === "Hello");

};

testingCreateAndStoreList();

// function testingCreateAndStoreList() {
//
// }
