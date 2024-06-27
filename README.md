# React Redux Tailwind CSS Card Project

This project is a fully responsive e-commerce website built with React, Redux, and Tailwind CSS. It displays a set of cards with headings, content, timings, and images, and includes functionality for pagination and card removal.

## Table of Contents

- [Project Setup](#project-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-redux-tailwind-card-project.git
   cd react-redux-tailwind-card-project
2. **Install dependencies**
    ``` bash
    npm install
    
3. **Run the project:**
   ``` bash
   npm run dev
   
## Project Structure 
```bash
src/
 components/
   - Card.js
   - CardList.js
   - LoadingScreen.js
  redux/
    - store.js
    - cardsSlice.js
    - App.js
    - index.js
    - index.css
public/
  - images/
    - image1.jpg
    - image2.jpg
    - image3.jpg
    - image4.jpg
    - image5.jpg
    - image6.jpg
 index.html
README.md
````

 ## features
```` bash
    Responsive Design: The application is fully responsive, ensuring a seamless experience across devices.
    State Management: Uses Redux for state management.
    Pagination: Allows navigation through pages of cards.
    Card Removal: Users can remove a card from the view, and a new card is shifted in from the next page.
    Loading Screen: Displays a loading screen for 5 seconds on startup.
````
