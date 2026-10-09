import "./js/custom-font-icons.js";



//Code by Elluminance
sc.SaveSlotChapter.inject({
  init() {
    this.parent();
    this.chapterGui.setMaxNumber(99);
  }
});
sc.MapModel.inject({
  onVarAccess(path, keys) {
    if(keys[0] == "location" && keys[1] == "currentMap") {
      return this.currentMap;
    }
    return this.parent(path, keys);
  }
});
//End code by Elluminance