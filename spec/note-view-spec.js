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


  assert.isTrue(listview.viewList() === "<ul><li><div>" + list.array[0] + "</div></li></ul>");

};

testingViewList();

function testingViewListwhenEmpty() {
  var list = new NoteList;
  var listview = new ListView(list);
  listview.viewList();

  assert.isTrue(listview.viewList() === "<ul></ul>");
};

testingViewListwhenEmpty();
