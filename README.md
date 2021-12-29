# React Novel

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Story Params

### `background` (string)

Background key in resources.json

### `personLeft`, `personCenterLeft`, `personCenter`, `personCenterRight`, `personRight` (string)

Person key in resources.json with position

### `personSpriteLeft`, `personSpriteCenterLeft`, `personSpriteCenter`, `personSpriteCenterRight`, `personSpriteRight` (string)

Person sprite name in resources.json with position

### `speaker` (string)

Speaker of text. Person key in resources.json or "player" value

### `text` (string)

Text by speaker

### `jumpLabel` (string)

Set Label for jump by commands jumpTo or jumpSelect.
Warning! Item with jumpLabel should have all story params. Otherwise, during the jump, the parameter value before the jump may be saved

### `jumpTo` (string)

Jump to jumpLabel item by name

### `jumpSelect` (array)

Show selector. Jump to jumpLabel item by name on click option of selector. Array type, contain objects with params `jumpTo` and `text`