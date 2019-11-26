(function(exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.returnList = function(){
    return this.list;
  }

  NoteList.prototype.createAndStoreList = function(note){
    var mylist = new NoteList;
    var note = new Note(note);
    this.list.push(note.text);
    return note.text
  }

  exports.NoteList = NoteList;
})(this);

var mylist = new NoteList;
var note = new Note("hello");
console.log(mylist.createAndStoreList(note.text));
var note1 = new Note("hi");
console.log(mylist.createAndStoreList(note1.text));
console.log(mylist.returnList());
