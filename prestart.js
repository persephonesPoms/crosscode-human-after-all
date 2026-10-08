import "./js/custom-font-icons.js";


sc.SaveSlotChapter.inject({
  init() {
    this.parent();
    this.chapterGui.setMaxNumber(99);
  }
});