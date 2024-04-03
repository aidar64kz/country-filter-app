## Country Filter App

#### About:

An application used to filter country from GraphQL server, built with React, GraphQL, TypeScript, and TailwindCSS.

#### Example:

In this app mobile version, special styles for components were not considered. Depending on requirements, a semi-minimalistic approach was implemented.

## Project Screen Shot(s)
![image](https://github.com/aidar64kz/country-filter-app/assets/63362087/fd32854a-ea7a-4fdc-b03b-dca50ce55c8d)
![image](https://github.com/aidar64kz/country-filter-app/assets/63362087/dd11d165-2267-415c-9043-524d6aba6b94)
![image](https://github.com/aidar64kz/country-filter-app/assets/63362087/980f1f58-f59f-473d-a5ec-a4f9653fe885)





## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm run start`  

EXTRA NOTES:
One thing you may have noticed is that in a Vite project, index.html is front-and-central instead of being tucked away inside public. This is intentional: during development Vite is a server, and index.html is the entry point to your application.

Vite treats index.html as source code and part of the module graph. It resolves <script type="module" src="..."> that references your JavaScript source code. Even inline <script type="module"> and CSS referenced via <link href> also enjoy Vite-specific features. In addition, URLs inside index.html are automatically rebased so there's no need for special %PUBLIC_URL% placeholders.
