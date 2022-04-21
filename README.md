# Svelte template

This is my personal svelte template which supports the following features,
- Sass
- Typescript

__NOTE__:  
This template also use a `/scss` directory for global css which can be used as a design system.

# Installation

```bash
npx degit solvedbiscuit71/svelte-template <your-project-name>
```

And move into that directory,
```bash
cd <your-project-name>
```

After cd into your project folder, install the dependencies
```bash
npm install
```

Then, start the development server by
```bash
npm run dev
```

## What does `npm run dev` do ?

It run the `npm run watch:svelte` and `npm run watch:scss` in parallel for compiling both scss and svelte.

__Note__: The scss it watches belong to the `/scss` folder in the project directory.