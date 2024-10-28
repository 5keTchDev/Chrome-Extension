# YouTube Timestamp Bookmark

YouTube Timestamp Bookmark is a Chrome extension that allows users to bookmark specific timestamps in YouTube videos while watching. Users can save the current timestamp with a single click and easily revisit these bookmarked moments later.

## Features

- **Bookmark Timestamps**: Save the current timestamp of any playing YouTube video.
- **View Saved Bookmarks**: Access a list of your saved timestamps for easy navigation.
- **Quick Navigation**: Click on a saved bookmark to automatically open the YouTube video and play from the bookmarked point.

## Installation

1. **Clone or Download the Repository:**
   - Clone this repository using:
     ```bash
     git clone https://github.com/your-username/YouTube-Timestamp-Bookmark.git
     ```
   - Alternatively, download the repository as a ZIP file and extract it.

2. **Load the Extension in Chrome:**
   - Open Google Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right.
   - Click "Load unpacked" and select the folder where you cloned or extracted the repository.

3. **Start Using the Extension:**
   - The YouTube Timestamp Bookmark icon should now appear in your Chrome toolbar.
   - Go to any YouTube video and start bookmarking timestamps.


## Usage

1. **Saving a Bookmark:**
   - While watching a YouTube video, click the extension icon in the toolbar.
   - Click the "Save Current Timestamp" button to bookmark the current timestamp.

2. **Viewing and Navigating to Bookmarks:**
   - Click the extension icon to view your list of saved bookmarks.
   - Each bookmark will show the video URL and the timestamp.
   - Click on any bookmark to open the video and automatically navigate to the saved timestamp.
     

## Folder Structure

The extension's folder contains the following files:





## File Details

- **`manifest.json`**: Configures the extension, including permissions and scripts.
- **`background.js`**: Contains the background script that runs in the background and manages the extension's lifecycle.
- **`content.js`**: Interacts with YouTube pages to get the current video timestamp.
- **`popup.html`**: Defines the structure of the popup interface where users save and view bookmarks.
- **`popup.js`**: Handles the logic for saving bookmarks and interacting with Chrome's storage.
- **`styles.css`**: Provides basic styling for the popup interface.
- **`images/`**: Contains the extension icons in different sizes.

## Technical Details

- The extension uses Chrome's `storage.sync` API to save bookmarks across devices.
- The `content.js` script communicates with the extension's popup through `chrome.tabs.sendMessage`, allowing retrieval of the current YouTube video's timestamp.
- Bookmarks are stored as an array of objects, where each object contains the video URL and timestamp.

## Permissions

The extension requires the following permissions:
- **`activeTab`**: Allows the extension to interact with the active tab (i.e., the YouTube page).
- **`storage`**: Used for saving and syncing bookmarks across devices.

## Development

1. **Make Changes:**
   - Modify the code in any of the files to customize the extension.
2. **Reload the Extension:**
   - Go to `chrome://extensions/` and click the "Reload" button for this extension after making changes.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Screenshots

![Extension Popup](screenshots/popup.png)
_A screenshot of the extension's popup interface._

![Bookmarks List](screenshots/bookmarks.png)
_A screenshot showing saved bookmarks._

## Future Enhancements

- **Organize Bookmarks**: Categorize bookmarks by video.
- **Export/Import Bookmarks**: Allow users to export or import their saved bookmarks.
- **Notes for Bookmarks**: Add an option to attach notes to each bookmark.

## Acknowledgments

- The extension icon design is inspired by YouTube's brand colors and uses a minimalist style to represent video timestamps.

---

Feel free to modify the content according to your requirements and customize the screenshots or other sections as needed.
