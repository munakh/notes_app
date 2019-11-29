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
    var viewString = []
    for (var i = 0; i < this.view.array.length; i++) {
      viewString.push("<li><div>" + this.view.array[i] + "</div></li>")
    };

    viewString.unshift("<ul>")
    viewString.push("</ul>")
    // var string = ''
    // string += '<ul>'
    // this.view.array.forEach(element => string += "<li><div>" + element + "</div></li>");
    // // return "<li><div>" + this.view.array[i] + "</div></li>";
    // string += '</ul>'
    return viewString.join("");
  };

  exports.ListView = ListView;
})(this);

// var note = new Note("hello");
// var note1 = new Note("hi");
// var list = new NoteList;
// list.createAndStoreList(note);
// list.createAndStoreList(note1);
// var listview = new ListView(list);
// listview.viewList();
//
// // console.log(note)
// // console.log(note1)
// // console.log(list)
// // console.log(listview)
// console.log(listview.viewList());


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
