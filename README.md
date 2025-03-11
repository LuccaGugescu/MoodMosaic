# MoodMosaic  
**A Mood-Tracking App That Turns Your Emotions into Art**  

<img src="https://github.com/user-attachments/assets/4f548b80-2628-40dd-9e52-15928789a921" alt="MoodMosaic Banner" width="300"  />

MoodMosaic is a unique app that blends mental health tracking with creative expression. Built with **React Native** and **Expo**, it allows users to log their daily emotions and transforms them into beautiful, personalized digital art pieces. Whether it's a mosaic, painting, or animation, MoodMosaic turns your emotional journey into a visual masterpiece.  

---

![image](https://github.com/user-attachments/assets/4ae3b7b2-ce98-499c-97e0-ce5529f45a2f)


## Features  
- [ ] **Daily Mood Logging**: Easily log your mood each day with a simple and intuitive interface.  
- [ ] **Emotion-Based Art Generation**: The app creates unique digital art (e.g., mosaics, paintings, animations) based on your mood data.  
- [ ] **Mood Mosaic Timeline**: Visualize your emotional journey over weeks or months with a stunning "mood mosaic."  
- [ ] **Therapeutic & Engaging**: Combines mental health awareness with creativity, making self-reflection both meaningful and enjoyable.  
- [ ] **Customizable Art Styles**: Choose from various art styles to personalize your mood art.  

---

## Why MoodMosaic?  
MoodMosaic is more than just a mood tracker—it's a creative companion that helps you understand and express your emotions in a visually captivating way. By turning your feelings into art, MoodMosaic makes mental health tracking a fun and rewarding experience.  

---

## Built With  
- **React Native**: A powerful framework for building cross-platform mobile apps.  
- **Expo**: A toolchain that simplifies React Native development with built-in features like hot reloading and easy deployment.  

---

## Project Structure  
Here’s an overview of the project structure:  

```  
MoodMosaic/
├── assets/               # Contains images, icons, fonts, and other static files
├── app/                  # Main app directory (Expo Router structure)
│   ├── (tabs)/           # Tab-based navigation (optional, if using tabs)
│   │   ├── index.js      # Main tab navigator
│   │   ├── mood.js       # Mood logging screen
│   │   └── gallery.js    # Art gallery screen
│   ├── _layout.js        # Root layout for the app (shared styles, navigation container)
│   ├── index.js          # Entry point for the app (home screen or initial route)
│   └── [user].js         # Dynamic route example (e.g., user profile)
├── src/                  # Source code for the app
│   ├── components/       # Reusable UI components (e.g., buttons, cards)
│   ├── constants/        # Constants (e.g., colors, API endpoints)
│   ├── context/          # React Context providers (e.g., theme, user state)
│   ├── hooks/            # Custom React hooks
│   ├── screens/          # App screens (e.g., mood logging, art gallery)
│   ├── utils/            # Utility functions (e.g., mood-to-art algorithms)
│   └── styles/           # Global styles and themes
├── .expo/                # Expo-specific configuration files
├── .gitignore            # Specifies files to ignore in version control
├── app.json              # Expo app configuration
├── babel.config.js       # Babel configuration
├── package.json          # Dependencies and project metadata
├── README.md             # Project documentation
└── metro.config.js       # Metro bundler configuration (if needed)
```  

---

## How It Works  
1. **Log Your Mood**: Open the app daily and select your current mood (e.g., happy, sad, calm, excited).  
2. **Generate Art**: The app uses your mood data to create a unique piece of digital art.  
3. **Explore Your Mood Mosaic**: Over time, your mood entries are compiled into a visual timeline, showcasing your emotional journey.  
4. **Reflect & Share**: Use your mood art as a tool for self-reflection or share it with others to spread awareness about mental health.  

---

## Getting Started  
To run MoodMosaic locally, follow these steps:  

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/your-username/MoodMosaic.git  
   ```  

2. **Install Dependencies**:  
   ```bash  
   cd MoodMosaic  
   npm install  
   ```  

3. **Run the App**:  
   ```bash  
   expo start  
   ```  

4. **Launch on Your Device**:  
   - Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal.  
   - Alternatively, run the app on an emulator or simulator.  

---

## Contributing  
We welcome contributions! If you'd like to help improve MoodMosaic, please follow these steps:  
1. Fork the repository.  
2. Create a new branch for your feature or bug fix.  
3. Submit a pull request with a detailed description of your changes.  

---

## License  
MoodMosaic is licensed under the MIT License. See [LICENSE](LICENSE) for more details.  

---

**Turn your emotions into art with MoodMosaic—where mental health meets creativity!** 🎨✨
