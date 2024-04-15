import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";


export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    
  };
};