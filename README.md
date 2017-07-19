# boilerplate-react
## 3
-babel
-webpack
-webpack-dev-server
-react
-express

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "clean": "rm -rf lib",
  "dev": "node ./src/index.dev.js",
  "develop": "rnpm run dev",
  "build": "npm run clean && babel src -d lib && webpack",
  "start": "npm run build && node ./lib/index.js"
}
```
