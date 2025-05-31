# Keeper App 📝

Keeper App is a React-based note-taking web application inspired by Google Keep. It allows users to create, view, and delete simple notes with a modern, animated Material UI interface. This project demonstrates React component architecture, state management with hooks, and the use of Material UI for a polished user experience.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [How It Works](#how-it-works)
- [Dependencies](#dependencies)
- [Installation & Usage](#installation--usage)
- [Example Usage](#example-usage)
- [Customization & Extensions](#customization--extensions)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

---

## Demo

> **Live Demo:** [Keeper App](https://avaneesh40585.github.io/Keeper-App/)

![Keeper-app-demo](https://github.com/user-attachments/assets/1871fc35-dbb4-4129-b049-03a6c35975f2)

---


## Features

- **Add Notes:** Enter a title and content, then click the floating action button to add a note.
- **Delete Notes:** Remove any note instantly with a single click.
- **Animated UI:** Uses Material UI’s Fab and Zoom for smooth button animations.
- **Expandable Input:** The note input area expands on click for a focused writing experience.
- **Auto-Updating Footer:** Footer always displays the current year.
- **Material Icons:** Modern icons for add, delete, and checklist enhance the UI.

---

## Folder Structure
```
keeper-app/
├── public/
│   ├── index.html          # Root HTML file where the React app mounts
│   └── styles.css          # Global CSS styles for the app
├── src/
│   ├── components/
│   │   ├── App.jsx         # Main component: manages notes state and app layout
│   │   ├── CreateArea.jsx  # Component for creating and submitting new notes
│   │   ├── Note.jsx        # Displays individual notes with delete functionality
│   │   ├── Header.jsx      # App header with title and icon
│   │   └── Footer.jsx      # Footer displaying the current year
│   └── index.js            # Entry point that renders the React app
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

---

## How It Works

1. **App Initialization**  
   The React application starts by rendering the `<App />` component inside the root DOM node. This is handled in `src/index.js` using React 18’s `createRoot` API.

2. **State Management in App.jsx**  
   The main logic resides in the `App` component, which uses React’s `useState` hook to maintain an array of notes. Each note is an object containing a `title` and `content`.

3. **Adding Notes**  
   - The `CreateArea` component provides a form with a textarea and an expandable title input.
   - It manages its own local state for the note being typed.
   - When the user clicks the floating "+" button, `CreateArea` calls the `onAdd` callback (from `App`) with the new note.
   - The `App` component’s `addNote` function appends this note to the notes array, triggering a re-render to display the updated list.

4. **Displaying Notes**  
   - The `App` component maps over the notes array and renders a `Note` component for each note.
   - Each `Note` displays the note’s title and content, styled with Material UI components.

5. **Deleting Notes**  
   - Each `Note` includes a delete button (a Material UI floating action button with a trash icon).
   - Clicking this button calls the `onDelete` callback with the note’s index.
   - The `App` component’s `deleteNote` function removes the note from the array, updating the state and UI instantly.

6. **User Interface and Animations**  
   - Material UI’s `Fab` (floating action button) and `Zoom` components provide smooth, visually appealing button animations.
   - The input area expands dynamically to enhance the writing experience.

7. **Footer**  
   - The `Footer` component displays the current year automatically using JavaScript’s `Date` object, ensuring it always stays up to date.

---

## Dependencies

These are the essential dependencies required for this project:

- [`react`](https://reactjs.org/) - Core library for building user interfaces
- [`react-dom`](https://react.dev/) - React DOM rendering
- [`@mui/material`](https://mui.com/) - Material UI components for React
- [`@mui/icons-material`](https://mui.com/material-ui/material-icons/) - Material UI SVG icons
- [`@emotion/react`](https://emotion.sh/docs/@emotion/react) - Required peer dependency for MUI styling
- [`@emotion/styled`](https://emotion.sh/docs/styled) - Required peer dependency for MUI styling

All dependencies are listed in your `package.json` and will be installed automatically.

---

## Installation & Usage

### Prerequisites

- Node.js (v16 or newer recommended)
- npm (v8+) or yarn

### Installation Steps

1. **Clone the repository:**
```git clone https://github.com/your-username/keeper-app.git cd keeper-app```

2. **Install dependencies:**
```npm install``` or ```yarn install```

3. **Start the development server:**
```npm start``` or ```yarn start```

4. **Open your browser and visit:**  
[http://localhost:3000](http://localhost:3000)

You should now see the Keeper App running locally.  
**No extra configuration is required.** All functionality will work out of the box!

---

## Example Usage

- Click the "Take a note..." area to expand and enter a note.
- Fill in the title and content, then click the "+" button to add your note.
- Your notes will appear below the input area.
- Click the trash icon on any note to delete it instantly.

---

## Customization & Extensions

- **Persistence:**  
To keep notes after refreshing, you can add localStorage or connect to a backend API.

- **Styling:**  
Update the CSS or tweak Material UI themes for a personalized look.

- **Extra Features:**  
Add note editing, search, color labels, or user authentication for more advanced note management.

---

## Contributing

Contributions, issues, and feature requests are welcome!  
Fork the repo, create a branch, and submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- Inspired by [Google Keep](https://keep.google.com/)
- Built with [React](https://reactjs.org/) and [Material UI](https://mui.com/)

---

## Contact

For any questions or suggestions, feel free to open an issue or contact me.

---

**Enjoy Keeper app!**






















