(function(exports) {
  function NoteController(list) {
    note = new Note(this.text);
    list = new NoteList;
    list.createAndStoreList(note);
    listview = new ListView(list);
    // console.log(listview)
    // element.innerHTML = listview.viewList();
    // console.log(element.innerHTML);
  };

  NoteController.prototype.returnHTML = function(){
    element = document.getElementById("app");
    element.innerHTML = listview.viewList();
    return element.innerHTML;
    // return element.innerHTML;
  };

  exports.NoteController = NoteController;
})(this);

// var note = new Note("testtyy");
// var list = new NoteList;
// list.createAndStoreList(note);
// var listview = new ListView(list);
// // listview.viewList(list);
// var controller = new NoteController(listview)
// listview.viewList(list);
// // var element = document.getElementById("app");
// // element.innerHTML = listview.viewList();
// console.log(controller.returnHTML);
// var element = document.get.ElementById("app");
// console.log(element);
//
// var note = new Note("test2");
// var list = new NoteList;
// list.createAndStoreList(note);
// var listview = new ListView(list);
// var element = new NoteController(list);
// console.log(listview.returnNote());
//
// note.addNote();
// console.log(note.printNote());
