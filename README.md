## Calculator App

This is a simple calculator application built using HTML, CSS, and JavaScript. The app allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

### Features

- **Display**: Shows the current input and results.
- **Buttons**: Includes digits (0-9), arithmetic operators (+, -, *, /), and special function buttons (DEL, AC, =).
- **DEL Button**: Deletes the last character of the current input.
- **AC Button**: Clears the entire input.
- **Equals Button**: Evaluates the expression and displays the result.

### Code Overview

- **HTML**: Contains the structure of the calculator, including the display and buttons.
- **CSS**: Styles the calculator for a clean and user-friendly interface.
- **JavaScript**: Handles the logic for button clicks and updates the display accordingly.

### JavaScript Logic

1. **Display Element**: The input box where the current input and results are shown.
2. **Button Selection**: All buttons are selected and converted into an array.
3. **Event Listeners**: Each button has an event listener for the `click` event:
   - **DEL**: Removes the last character from the input.
   - **AC**: Clears the input.
   - **=**: Evaluates the expression using `eval()` and updates the display.
   - **Others**: Appends the button's value to the input.
