# Persistent Notes App

A React Native (Expo) notes app that saves data on the device,
so notes are still there after the app is fully closed and reopened.

## Features
- Create a note
- Read saved notes automatically when the app opens
- Update (edit) an existing note
- Delete a note
- Data saved locally with AsyncStorage

## How it works
Notes are stored as an array of objects like `{ id, text }`.
AsyncStorage only stores strings, so:
- `JSON.stringify()` converts the array to a string before saving
- `JSON.parse()` converts it back to an array when loading

A `useEffect` hook loads the saved notes once when the app starts.
Every create, edit, or delete updates both the screen (state) and storage,
so they always stay in sync.

## Files
- `App.js` - main screen, state, and CRUD logic
- `StorageService.js` - functions to save and load notes
- `NoteItem.js` - one note row with Edit and Delete buttons
- `styles.js` - colors and styling

## How to run
1. Install dependencies: `npm install`
2. Install the storage package: `npx expo install @react-native-async-storage/async-storage`
3. Start the app: `npx expo start`
4. Open it with the Expo Go app or an emulator

## How to test persistence
Add a few notes, edit one, delete one, then fully close and reopen the app. The notes should still be there.