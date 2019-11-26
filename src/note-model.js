(function(exports) {
  function Note(text) {
    this.text = text
  }

  Note.prototype.returnNote = function(){
    return this.text;
  }

  exports.Note = Note;
})(this);

var note = new Note("note 1");
console.log(note.text);

// console.log(note("hi"));
