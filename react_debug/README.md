# To-Do List App - Debugging Documentation

## Project Overview

This project is a simple To-Do List app built with React. The app allows users to add, toggle, and delete tasks, with each task reflecting its completion status. Additionally, the app includes a dark theme for improved user experience.

---

## Debugging Process

### Issue 1: Incorrect Task Completion State

- **Identified Problem**: The "completed" state for each task wasn’t being toggled correctly.

#### Steps Taken:
1. Used **React DevTools** to inspect the state of the task components.
2. Found that the `completed` state wasn’t updating when the "Toggle" button was clicked.

#### Solution:
- Updated the `setTodos` function to ensure it correctly toggled the `completed` state for each task.
- Adjusted the UI to visually reflect the completion status, such as adding a strikethrough effect for completed tasks.

#### Verification:
- Verified the fix by inspecting the state in **React DevTools** and ensuring the UI was correctly updated when a task was toggled.

---

### Issue 2: Missing Props in Child Component

- **Identified Problem**: The `TodoItem` component wasn’t receiving the `todo` prop correctly.

#### Steps Taken:
1. Used **React DevTools** to inspect the component tree and noticed that the `todo` prop wasn’t passed to the `TodoItem` component.
2. Checked the parent component (`TodoList`) to ensure the `todo` prop was being passed correctly.

#### Solution:
- Corrected the prop passing in the parent component (`TodoList`) so that each `TodoItem` component received the necessary `todo` prop.

#### Verification:
- After fixing the prop passing, checked the UI to confirm the correct data was displayed for each task.

---

## Dark Mode Style

The app has been styled using a **dark mode theme** for a better user experience. Here are the key style changes:

- **Background Colors**:
  - Dark gray background for the app and main container.
  
- **Text Colors**:
  - Light text colors to ensure readability against the dark background.
  - Completed tasks are shown with a strikethrough and a lighter gray color.

- **Button Styles**:
  - Buttons are styled with dark colors and hover effects for a consistent look:
    - Toggle button: Dark blue with hover effect.
    - Delete button: Red with hover effect.
    - Add task button: Green with hover effect.

- **Input Field**:
  - The input field for adding new tasks has a dark background with white text to maintain the theme.

---

## Installation

To run this app locally, follow these steps:

1. Clone the repository from GitHub.
2. Navigate to the project directory in your terminal.
3. Install the necessary dependencies by running the command `npm install`.
4. Start the development server using `npm run dev`.
5. Open the app in your browser.

---

## Conclusion

The debugging process focused on resolving issues related to the task completion state and prop passing. The final app now includes both functional improvements and a dark mode theme, providing a more user-friendly and visually appealing experience.

---

### Notes:

- **React DevTools** was essential in debugging the issues with state and props.
- The app is now fully functional, allowing users to add, toggle, and delete tasks with a smooth dark-themed user interface.