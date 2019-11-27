(function(exports) {
  function ListView(list) {
    this.view = list;
    // this.noteList = []
    // start = "<ul>"
    // end = "</ul>"
  };

  ListView.prototype.returnView = function(){
    return this.view;
  };

  ListView.prototype.viewList = function(){
    
    return "<li><div>" + this.view.array + "</div></li>"
  };

  exports.ListView = ListView;
})(this);

var note = new Note("hello");
var note1 = new Note("hi");
var list = new NoteList;
list.createAndStoreList(note);
list.createAndStoreList(note1);
var listview = new ListView(list);
listview.viewList();

// console.log(note)
// console.log(note1)
// console.log(list)
// console.log(listview)
console.log(listview.viewList())
console.log(listview.returnView())
//
// var list = new NoteList;
// var note = new Note(this.text);
// list.createAndStoreList(note);
// var notelist = new ListView(this.view);

//

// var notelist = new ListView(note);
// console.log(notelist.viewList());


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
