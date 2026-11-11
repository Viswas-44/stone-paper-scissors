# Stone Paper Scissors Game

## About the Project

Stone Paper Scissors is a simple interactive game developed using React and Express.js.

The project contains a home page with a Start Game button. After clicking the button, the user can play Stone Paper Scissors against the computer.

The game consists of 5 rounds. The player or computer who reaches 3 points first wins the game.

## Technologies Used

- HTML
- CSS
- JavaScript
- React.js
- Vite
- Express.js

## Features

- Simple and user-friendly interface.
- Home page with Start Game button.
- Player can choose Stone, Paper or Scissors.
- Computer generates random choices.
- Displays player and computer scores.
- Best of 5 rounds.
- Displays the final winner.

## Installation and Setup

### 1. Create a Vite React Project

```bash
npm create vite@latest stone-paper-scissors -- --template react
```

### 2. Move into the Project Folder

```bash
cd stone-paper-scissors
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Express

```bash
npm install express
```

### 5. Run the Project

```bash
npm run dev
```

## Project Structure

```text
stone-paper-scissors/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── game.jsx
│   ├── home.jsx
│   ├── home.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── server.js
├── index.html
├── package.json
└── README.md
```

## How to Play

1. Open the application.
2. Click on the Start Game button.
3. Select Stone, Paper or Scissors.
4. The computer randomly selects its choice.
5. Scores are updated based on the winner.
6. The first player to reach 3 points wins.

## Conclusion

This project demonstrates the use of React components, React Hooks, Vite and Express routing to develop a simple interactive web application.
