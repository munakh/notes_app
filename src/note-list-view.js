(function(exports) {
  function ListView(notelist) {
    this.list = notelist
    // this.noteList = []
    // start = "<ul>"
    // end = "</ul>"
  };

  ListView.prototype.viewList = function(){
    // var noteList = new ListView(list);
    // var list = new NoteList;
    // var note = new Note(note);
    // list.createAndStoreList(note);
      // for (index = 0; index < this.list.length; index++)
    return "<li><div>" + list.array[0] + "</div></li>"
      // }
  };

  exports.ListView = ListView;
})(this);


var list = new NoteList;
var note = new Note("hello");
list.createAndStoreList(note);
var notelist = new ListView(note);
console.log(notelist.viewList());


// console.log(mylist);
// console.log(note);
// console.log(note.text)
// console.log(view)

// var view = new NoteList;
// var note = new Note("hello");
// var note1 = new Note("hi");
// mylist.createAndStoreList(note);
// mylist.createAndStoreList(note1);
// var listview = new ListView(note);
// console.log(view.list[0]);
// console.log(this.list);
// console.log(listview.viewList());
// console.log(listview.viewList());
//
