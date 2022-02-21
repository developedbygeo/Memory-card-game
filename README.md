# Memory Card Game

<div style="display: flex">
<img src='./public/sample-v.png' height='550px' width='300px' alt='mobile viewport - portrait mode'/>
<img style="align-self: center" src='./public/sample-h.png' height='250px' width='550px'alt='mobile viewport - landscape mode'/>
</div>

<br>
<br>

A React-based, fully responsive memory card game. The **main goal** is to earn points, by clicking on images that have _not_ been clicked before. Each time you do, the images **shuffle**. However, if an image is clicked on twice, you lose.

This project was a lovely chance to practise with Redux Toolkit, Styled Components and custom React hooks. It features state-persisting themes and API-fetched dog images. For a detailed overview, please have a look at the [**Features**](#features) & [**Tech**](#tech) section.

## Installation

As this project was bootstrapped with React, the following scripts are available:

**Install** the dependencies:

```
npm install
```

Run the app in **development** mode:

```
npm start
```

Launch the **test server** in the interactive watch mode:

```
npm test
```

## <a id='features'></a>Features

- Gallery-shuffling based on the Fisher-Yates algorithm.
- Custom Redux thunk middleware to handle the HTTP requests.
- Notification system for the HTTP request status.
- Fallback UI.
- Dynamic modal dialogues.
- State-persisting themes.
- API-fetched images.
- Fully-responsive in both landscape & portrait mode.

## <a id='tech'></a>Tech

- React
- Redux Toolkit
- Styled Components
- FontAwesome

For a more detailed overview of the development & production dependencies, please check `package.json`.

## Live Version

<https://developedbygeo.github.io/Memory-card-game/>

## Contributing

Contributions are certainly welcome. Please feel free to open an issue/PR if there is something you would like to be changed.

## Acknowledgements

This project would not have been created if it was not for **Dog Ceo - Dog Api**. A massive thank you as well to The Odin Project for their guidance and quality material.

## License

[MIT](./LICENSE.md)
