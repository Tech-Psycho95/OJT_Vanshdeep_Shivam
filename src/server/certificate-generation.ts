import { Request, Response } from "express";

export const generateCertificate = (req: Request, res: Response) => {
  res.send("Certificate generator connected");
};
