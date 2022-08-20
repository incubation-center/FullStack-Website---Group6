import { observable, action, computed, makeObservable } from "mobx";

class BookmarkStore {
  @observable bookmarks = [
    { id: 1, title: "Kokos Curry", calories: 320, time: 45 },
    { id: 11, title: "Kokos Curry", calories: 320, time: 45 },
    { id: 12, title: "Kokos Curry", calories: 320, time: 45 },
  ];

  constructor() {
    makeObservable(this);
  }

  @action isBookmarked = (id) => {
    return this.bookmarks.some((b) => b.id === id);
  };

  @action
  addBookmark = (bookmark) => {
    this.bookmarks.push(bookmark);
  };

  @action
  removeBookmark = (bookmark) => {
    this.bookmarks = this.bookmarks.filter((b) => b.id !== bookmark.id);
  };

  @computed
  get bookmarkCount() {
    return this.bookmarks.length;
  }
}

export default new BookmarkStore();
