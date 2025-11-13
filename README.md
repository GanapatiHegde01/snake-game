# 🐍 Snake Game

<div align="center">

![Snake Game](https://img.shields.io/badge/Game-Snake-green?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 🎮 A Classic Snake Game Built with Vanilla JavaScript

*Navigate the snake, eat food, and grow longer while avoiding collisions!*

</div>

---

## 🌟 Features

| Feature | Description | Status |
|---------|-------------|--------|
| 🎯 **Dynamic Grid** | Responsive game board that adapts to screen size | ✅ |
| 🍎 **Animated Food** | Pulsing food with smooth scaling animation | ✅ |
| 🏆 **Score System** | Real-time scoring with persistent high score | ✅ |
| ⏱️ **Timer** | Live game timer tracking your session | ✅ |
| 🔊 **Sound Effects** | Audio feedback for eating and collisions | ✅ |
| 🎨 **Modern UI** | Clean, dark theme with smooth animations | ✅ |
| 📱 **Responsive** | Works on different screen sizes | ✅ |

---

## 🚀 Quick Start

### 📋 Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required!

### 🎯 How to Play

1. **Clone or Download** the repository
2. **Open** `index.html` in your browser
3. **Click** "Start Game" to begin
4. **Use Arrow Keys** to control the snake:
   - ⬆️ **Up Arrow** - Move Up
   - ⬇️ **Down Arrow** - Move Down
   - ⬅️ **Left Arrow** - Move Left
   - ➡️ **Right Arrow** - Move Right

---

## 🎮 Game Mechanics

### 🐍 Snake Movement
- Snake moves continuously in the current direction
- Changes direction based on arrow key input
- Cannot reverse directly into itself

### 🍎 Food System
- Green animated food appears randomly on the grid
- Eating food increases score by **10 points**
- Snake grows by one segment when food is consumed
- New food spawns immediately after consumption

### 💥 Game Over Conditions
- **Boundary Collision**: Snake hits the game board edges
- **Self Collision**: Snake runs into its own body
- Game displays final score and restart option

### 🏆 Scoring System
- **+10 points** per food consumed
- High score automatically saved in browser storage
- Timer tracks session duration

---

## 🛠️ Technical Implementation

### 📁 Project Structure
```
snake-game/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Styling and animations
├── ⚡ script.js           # Game logic and mechanics
└── 🔊 sounds/
    ├── eating.wav         # Food consumption sound
    └── smash.mp3          # Collision sound effect
```

### 🔧 Core Technologies

#### **HTML5**
- Semantic structure with game board and UI elements
- Modal system for game states (start/game over)
- Audio elements for sound effects

#### **CSS3**
- CSS Grid for dynamic game board layout
- CSS Variables for consistent theming
- Keyframe animations for food pulsing effect
- Responsive design with flexbox

#### **JavaScript (ES6+)**
- Dynamic grid generation based on screen size
- Real-time snake movement and collision detection
- Local storage for persistent high scores
- Event-driven architecture for user input

---

## 🎨 Visual Design

### 🌙 Dark Theme
- **Background**: Deep black (`#0c0c0c`)
- **Snake**: Light gray (`#e6e6e6`) circles
- **Food**: Animated green (`#00e300`) with scaling effect
- **UI Elements**: Subtle borders and rounded corners

### ✨ Animations
- **Food Pulsing**: Continuous scale animation (0.6x to 0.7x)
- **Button Hover**: Scale transform on interaction
- **Modal Transitions**: Smooth backdrop blur effects

---

## 🔊 Audio Features

| Sound | Trigger | File |
|-------|---------|------|
| 🍎 **Eating** | Food consumption | `eating.wav` |
| 💥 **Collision** | Game over events | `smash.mp3` |

---

## 🎯 Game Configuration

### ⚙️ Customizable Settings
```javascript
const blockHeight = 50;    // Grid cell height
const blockWidth = 50;     // Grid cell width
const gameSpeed = 400;     // Movement interval (ms)
const scorePerFood = 10;   // Points per food item
```

### 🎮 Controls
- **Arrow Keys**: Snake direction control
- **Start Button**: Begin new game
- **Restart Button**: Reset after game over

---

## 🚀 Future Enhancements

- [ ] 🎵 Background music toggle
- [ ] 🏅 Multiple difficulty levels
- [ ] 🎨 Snake head with directional eyes
- [ ] 🍎 Special food types with bonus points
- [ ] 📱 Touch controls for mobile devices

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- 📖 Improve documentation

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### 🎮 Ready to Play?

**[Start Playing Now!](index.html)**

*Made with ❤️ by Ganapati Hegde*

---

**⭐ Star this repo if you enjoyed the game!**

</div>