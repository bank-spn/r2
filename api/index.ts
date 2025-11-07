// api/index.ts
import express, { Request, Response } from "express";

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.send("✅ Server is running");
});

app.get("/health", (_: Request, res: Response) => {
  res.json({ ok: true, message: "Server alive" });
});

app.use((_, res: Response) => {
  res.status(404).json({ ok: false, message: "Not found" });
});

export default app;