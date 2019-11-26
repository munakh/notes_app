function testingViewList() {
  var list = new NoteList;
  var note = new Note("hello");
  list.createAndStoreList(note);
  var notelist = new ListView(note);

  assert.isTrue(notelist.viewList() === "<li><div>hello</div></li>");

};

testingViewList();
