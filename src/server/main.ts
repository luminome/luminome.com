import express from "express";
import ViteExpress from "vite-express";

const app = express();
const port = Number(process.env.PORT) || 3000;
// const mode = process.env.NODE_ENV || 'production';

// ViteExpress.config({
//   mode: mode,
//   vitePort: port,
//   printViteDevServerHost: true
// });


app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});

// app.get("/", () => {
//   console.log('what');
// });

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on ${port}...`)
);
