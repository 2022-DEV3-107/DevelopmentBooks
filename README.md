# DevelopmentBooks

The DevelopmentBooks is a web app that is developed depending on the expectations described in this analysis: https://github.com/stephane-genicot/katas/blob/master/DevelopmentBooks.md

This project is developed with React v18.

The project is created with `create-react-app` with TypeScript template.

Node v18 and npm is used to create and install project and project dependencies.

## Installation

The DevelopmentBooks uses NPM to create a local development environment
which includes local json-server installation as a dummy backend.

You only need the Node.js v18 is installed in your computer to start development.

To install Node.js please see: https://nodejs.org/en/

## Run Locally

#### Backend

In the frontend folder run the following npm command to start json-server backend:

```bash
  npm run server
```

#### Backend (Alternative)

Axios mock adapter is also integrated. You can activate the mock adapter by changing the .env variable to true If you want to use a mock adapter rather than using json-server:

```bash
  REACT_APP_MOCK_REQUESTS=true
```

#### Frontend

In the frontend folder run the following npm command to start project in development mode:

```bash
  npm run start
```

Use the following links to navigate to the indivudal components of the DevelopmentBooks locally:

1. Frontend: http://localhost:3000
2. Backend (json-server): http://localhost:3001

## Project Structure

### Components

**Atoms** are the simplest components, such as buttons, loaders, and headers. They can be found everywhere, whether in organisms, molecules or even directly on pages. Atoms can have multiple states, which can be changed with the help of passed props.

**Molecules** are made up of atoms and can have business logic, but they cannot influence the global state of the application. It receives event handlers via props. An item in your shopping cart at an online store is an example of a molecule.

**An organism** is a combination of molecules and atoms that has its own business logic that affects the global state of the application but remains independent. An organism can be embedded at any point in an application. An example of an organism is a shopping cart.

### Recommended Development Tools

I highly recommend following VS Code extensions and settings to better the development experience.

#### Prettier for VS Code

Prettier is an opinionated code formatter for VS Code. It enforces a consistent style by parsing your code
and re-printing it with its own rules that take the maximum line length into account,
wrapping code when necessary.

1 - Install Prettier for VS Code: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

2 - Enable Format on Save setting for VS Code:
Open VS Code settings and search for format on save and then enable this setting or add the following to your settings.json file:
`"editor.formatOnSave": true`

#### Tailwind extensions for VS Code

1 - PostCSS Language Support  
PostCSS Language Support adds support for modern and experimental CSS within Visual Studio Code.

Install post css extension for vs code : https://marketplace.visualstudio.com/items?itemName=csstools.postcss

2 - Tailwind CSS IntelliSense  
Tailwind CSS IntelliSense enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.

Install Intellisense extension : https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

3 - Configure IntelliSense autocomplete on VSCode for Tailwind Styled Components  
Add these user settings (How to edit VSCode settings: https://code.visualstudio.com/docs/getstarted/settings)

```
"tailwindCSS.includeLanguages": {
    "typescript": "javascript", // if you are using typescript
    "typescriptreact": "javascript"  // if you are using typescript with react
},
"editor.quickSuggestions": {
    "strings": true // forces VS Code to trigger completions when editing "string" content
},
"tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)", // tw`...`
    "tw\\.[^`]+`([^`]*)`", // tw.xxx<xxx>`...`
    "tw\\(.*?\\).*?`([^`]*)" // tw(Component)<xxx>`...`
]
```
