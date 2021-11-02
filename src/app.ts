import express, { Application, Request, Response, NextFunction } from "express";
import feeds  from "routes/feeds";


export default function createServer() {
  const app: Application = express();

  app.use("/feeds", feeds);

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.send ("Hello world!");
  });

  return app;
}
