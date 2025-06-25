# Meme Generator
**Meme Generator** is a fun and interactive app built as part of the _React Basics_ module in the [Scrimba Frontend Developer Career Path](https://scrimba.com/home). It allows users to create custom memes with their own top and bottom text, using a random meme image fetched from an API. 
When the app loads, it fetches a list of popular meme templates from the [Imgflip API](https://imgflip.com/api) using fetch inside a useEffect hook. This list is stored in state and used to randomly select a meme image when the user clicks a button. Users can input custom top and bottom text which updates live on the image as they type. This is achieved using controlled form inputs that sync their values with React's component state using the useState hook.

> [View it live here](https://vanya-vb.github.io/meme-generator/)

## Features
- Live preview of meme text as you type
- Integration with external meme API
- Random meme image selection
- Responsive and dynamic UI

## What I learned
This project helped me deepen my understanding of:

- Using useState() to manage complex objects
- Controlled components and form handling in React
- Managing side effects and API integration
- Using the useEffect() hook for fetching data on mount

## Tech stack
- Vite
- React
- JS
- CSS
- JSX
- [Imgflip API](https://imgflip.com/api)

> 🎓 This project was created as part of my learning journey on the Scrimba platform.