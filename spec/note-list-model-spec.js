function testingReturnNoteEqualsThisText() {
  var mylist = new NoteList();
  assert.isTrue(mylist.returnList() === mylist.list);
};

testingReturnNoteEqualsThisText();

function testingCreatingandStoringList() {
  // var note = new Note("Hello");
  var mylist = new NoteList();
  var note = new Note("Hello");
  var note1 = new Note("Hi");
  // var listitem = new Note("Hello");
  mylist.createAndStoreList(note);
  mylist.createAndStoreList(note1);

  assert.isTrue(mylist.returnList()[0] === "Hello");
  assert.isTrue(mylist.returnList()[1] === "Hi");

};

testingCreatingandStoringList();

// function testingCreateAndStoreList() {
//
// }
