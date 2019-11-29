function testingNoteController() {
  var note = new Note(this.text);
  var list = new NoteList;
  list.createAndStoreList(note);
  var listview = new ListView(list);
  var controller = new NoteController(list);
  controller.returnHTML();

  assert.isTrue(element.innerHTML === "<ul><li><div>" + note.text + "</div></li></ul>");
}

testingNoteController();
