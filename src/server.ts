import express, { Application, Request, Response, NextFunction } from "express";
import feeds  from "routes/feeds";


export default function createServer() {
  const app: Application = express();

  app.use("/feeds", feeds);

  app.get("/", (err: any, req: Request, res: Response, next: NextFunction) => {
      res
        .status(err.status)
        .json({message: err.message});
  });

  return app;
}
