import { observable, action, computed, makeObservable } from "mobx";

class BookmarkStore {
  @observable bookmarks = [];

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
