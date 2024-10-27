document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveButton");
  const bookmarkList = document.getElementById("bookmarkList");

  // Load saved bookmarks
  loadBookmarks();

  // Save current timestamp when the button is clicked
  saveButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getCurrentTime" }, (response) => {
        if (response.time !== null) {
          const bookmark = {
            url: tabs[0].url,
            time: response.time
          };
          saveBookmark(bookmark);
        }
      });
    });
  });

  // Load bookmarks from storage
  function loadBookmarks() {
    chrome.storage.sync.get(["bookmarks"], (result) => {
      const bookmarks = result.bookmarks || [];
      bookmarks.forEach(addBookmarkToList);
    });
  }

  // Save a bookmark to storage
  function saveBookmark(bookmark) {
    chrome.storage.sync.get(["bookmarks"], (result) => {
      const bookmarks = result.bookmarks || [];
      bookmarks.push(bookmark);
      chrome.storage.sync.set({ bookmarks }, () => {
        addBookmarkToList(bookmark);
      });
    });
  }

  // Add a bookmark to the list
  function addBookmarkToList(bookmark) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `${bookmark.url}&t=${bookmark.time}s`;
    link.textContent = `Bookmark at ${formatTime(bookmark.time)}`;
    link.target = "_blank";
    listItem.appendChild(link);
    bookmarkList.appendChild(listItem);
  }

  // Format time as mm:ss
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }
});