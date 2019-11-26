(function(exports) {
  function NoteList() {
    this.array = [];
  };

  NoteList.prototype.returnList = function(){
    return this.array;
  };

  NoteList.prototype.createAndStoreList = function(note){
    this.array.push(note.text);
    // return note.text
  };

  exports.NoteList = NoteList;
})(this);

var list = new NoteList;
var note = new Note("hello");
var note1 = new Note("hi");
list.createAndStoreList(note);
list.createAndStoreList(note1);
console.log(list.returnList());
//
// var list = new NoteList;
// var note = new Note(note);
