# Google Sheets Clone

This project is a web application that mimics the user interface and core functionalities of Google Sheets, focusing on mathematical functions and data quality operations.

## Features

- **Mathematical Functions**: 
  - Sum
  - Average
  - Max
  - Min
  - Count

- **Data Quality Functions**: 
  - Trim
  - Upper
  - Lower
  - Remove Duplicates
  - Find and Replace

- **User Interface**: 
  - Interactive spreadsheet layout
  - Toolbar for function application
  - Responsive design

## Project Structure

```
google-sheets-clone
├── public
│   ├── index.html          # Main HTML document
│   └── styles
│       └── main.css       # CSS styles for the application
├── src
│   ├── components
│   │   ├── Cell.js        # Represents an individual cell
│   │   ├── Sheet.js       # Represents the entire spreadsheet
│   │   └── Toolbar.js     # UI controls for actions
│   ├── utils
│   │   ├── mathFunctions.js # Mathematical functions
│   │   ├── dataQualityFunctions.js # Data quality operations
│   │   └── uiInteractions.js # UI interaction management
│   ├── App.js             # Main application component
│   └── index.js           # Entry point of the application
├── package.json            # npm configuration file
├── webpack.config.js       # Webpack configuration
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd google-sheets-clone
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Use the toolbar to apply mathematical and data quality functions to the selected cells.
- Interact with the spreadsheet by clicking on cells to edit their content.
- Utilize the find and replace feature to manage data efficiently.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.