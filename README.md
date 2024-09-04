# Cyberjack

**Cyberjack** is a browser-based blackjack game that I built as a project to get into the Codeworks web development bootcamp. It’s a simple, silly take on blackjack, set in a futuristic world where you go head-to-head with the infamous GIGABYTE GARY in the BINARY BLUFF CASINO.

## Features

- **Play Against the Dealer**: It’s you versus GIGABYTE GARY, trying to get as close to 21 as possible without busting.
- **Hit or Stick**: Decide if you want to take another card (hit) or keep your current hand (stick).
- **Futuristic Aesthetic**: Features a retro cyberpunk theme with pixel fonts and cyber-futuristic dealer images.
- **Win or Lose**: See if you can beat GIGABYTE GARY and win, or lose and face his snarky remarks.

## How it Works

1. **Start a New Game**: Click the `NEW GAME` button to start playing.
2. **Deal the Cards**: Once the game begins, click `DEAL` to receive your hand and see GIGABYTE GARY’s hand.
3. **Hit Me or Stick**: Choose to take another card by clicking `HIT ME` or stick with your current hand by clicking `STICK`.
4. **Win or Lose**: If your hand’s score beats GIGABYTE GARY’s without going over 21, you win! If you bust or GIGABYTE GARY wins, you lose.
5. **Play Again**: After a win or loss, click `PLAY AGAIN` to reset and start a new round.

## Code Overview

### JavaScript

The core of the game is built in JavaScript, using jQuery to handle DOM manipulation and game logic:

- **Deck Creation**: A deck of cards is created with all 52 possible combinations of rank and suit.
- **Shuffling**: Uses the Fisher-Yates shuffle algorithm to randomize the deck.
- **Score Calculation**: Handles scoring based on card values, including special logic for Aces (which can be worth 1 or 11).
- **Game Logic**: Determines win or loss conditions based on player and dealer hands.

### CSS

The game’s look is created using CSS, with a focus on a retro cyberpunk theme. The fonts (`Pixelify` and `VT323`) give it that futuristic vibe, while neon-inspired colors enhance the cyber aesthetic.

### HTML

The HTML structure is minimal, consisting of a few containers for the game elements like the player’s hand, the dealer’s hand, and the game buttons. The page dynamically updates as the game progresses.

## Installation & Setup

It's playable via Github Pages: https://joshuaisaact.github.io/cyberjack/

To run Cyberjack locally:

1. Clone the repository:
   
   ```bash
   git clone https://github.com/your-repo/cyberjack.git
   ```
2. Navigate to the project folder:
   
   ```bash
   cd cyberjack
   ```
3. Open the `index.html` file in your browser:
   
   ```bash
   open index.html
   ```
   
   or use Live Server in VSCode to run the project.

## Future Enhancements

- **Multiplayer Mode**: Add support for playing against other players online.
- **Difficulty Levels**: Introduce different difficulty settings for GIGABYTE GARY to make him more or less challenging.
- **Sound Effects**: Add sound effects to enhance gameplay, such as card dealing sounds or cyberpunk background music.

## License

This project is licensed under the MIT License. 

---

Challenge GIGABYTE GARY in the BINARY BLUFF CASINO and see if you can master Cyberjack!
