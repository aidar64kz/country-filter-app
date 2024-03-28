## Country Filter App

#### About:

An application used to filter country from GraphQL server, built with React, GraphQL, TypeScript, and TailwindCSS.

#### Example:

In this app mobile version, special styles for components were not considered. Depending on requirements, a semi-minimalistic approach was implemented.

## Project Screen Shot(s)
![image](https://github.com/aidar64kz/country-filter-app/assets/63362087/1bb0e59e-55e3-4593-9a2b-c65941e735a8)
![image](https://github.com/aidar64kz/country-filter-app/assets/63362087/97d08795-0cfe-4be4-bc8b-54be9810bb85)
![image](https://github.com/aidar64kz/country-filter-app/assets/63362087/6f769b9e-fa02-4d82-872c-c0c88cca6e51)




## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm run dev`  

EXTRA NOTES:
One thing you may have noticed is that in a Vite project, index.html is front-and-central instead of being tucked away inside public. This is intentional: during development Vite is a server, and index.html is the entry point to your application.

Vite treats index.html as source code and part of the module graph. It resolves <script type="module" src="..."> that references your JavaScript source code. Even inline <script type="module"> and CSS referenced via <link href> also enjoy Vite-specific features. In addition, URLs inside index.html are automatically rebased so there's no need for special %PUBLIC_URL% placeholders.
