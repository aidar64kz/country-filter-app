## Country Filter App

#### About:

An application used to filter country from GraphQL server, built with React, GraphQL, TypeScript, and TailwindCSS.

#### Example:

In this app mobile version, special styles for components were not considered. Depending on requirements, a semi-minimalistic approach was implemented.

## Project Screen Shot(s)
![image](https://github.com/aidar64kz/country-filter-app/assets/63362087/2a6c4d1f-6a43-4340-aa14-0b2f49f7ad0a)
  
![image](https://github.com/aidar64kz/country-filter-app/assets/63362087/17b9c521-2921-462a-afb0-ab95d2e3d84f)

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
