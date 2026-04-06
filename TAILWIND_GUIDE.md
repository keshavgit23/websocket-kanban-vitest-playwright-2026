1. Install Stable version:-
``bash
npm install -D tailwindcss@3.4.1 postcss autoprefixer

2. Run this:-
``bash
npx tailwindcss init -p

3. After that

You’ll get:

**tailwind.config.js**
**postcss.config.js**

4. Inside tailwind.config.js

content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],

5. src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;