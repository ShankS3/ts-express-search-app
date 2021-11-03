import express, { Application, Request, Response, NextFunction } from "express";
import feeds  from "routes/feeds";
import cors from 'cors';


export default function createServer() {
  const app: Application = express();

  app.use(cors());
  app.use("/api/v1/feeds", feeds);

  app.get("/", (err: any, req: Request, res: Response, next: NextFunction) => {
      res
        .status(err.status)
        .json({message: err.message});
  });

  return app;
}
