function testingReturnView() {
  var array = new ListView(this.view);
  assert.isTrue(array.returnView() === array.view);
};

testingReturnView();

function testingViewList() {
  var note = new Note(this.text);
  var list = new NoteList;
  list.createAndStoreList(note);
  var listview = new ListView(list);
  listview.viewList();


  assert.isTrue(listview.viewList() === "<li><div>" + list.array + "</div></li>");

};

testingViewList();
