import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { myDataSource } from "../config/db.config";
import { ResourceEntity } from "../entities/resource.entity";
import { ExceptionResponse } from "../exceptions/common.exception";
import { BaseResponse } from "../responses/base.repsonse";

class ResourceController {
  private resourceRepo: Repository<ResourceEntity>
  constructor() {
    this.resourceRepo = myDataSource.getRepository(ResourceEntity)
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const newResource = this.resourceRepo.create({
      title: 'New resource',
      description: 'Create new resource'
    })
    try {
      await this.resourceRepo.save(newResource)
      res.status(200).json(new BaseResponse({}))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    const param = req.params
    try {
      const resource = await this.resourceRepo.find({where: param})
      res.status(200).json(new BaseResponse({data: resource}))
    } catch (e) {
      next(e)
    }
  }

  async getDetail(req: Request, res: Response, next: NextFunction) {
    const param = req.params
    try {
      const resource = await this.resourceRepo.findOne({where: param})
      if(!resource) throw new ExceptionResponse(400, 'Resource not found')
      res.status(200).json(new BaseResponse({data: resource}))
    } catch (e) {
      next(e)
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const body: {id: number, title: string, description: string} = req.body
    try {
      await this.resourceRepo.update({id: body.id}, {title: body.title, description: body.description})
      res.status(200).json(new BaseResponse({}))
    } catch (e) {
      next(e)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const body: {id: number, title: string, description: string} = req.body
    try {
      await this.resourceRepo.delete({id: body.id})
      res.status(200).json(new BaseResponse({}))
    } catch (e) {
      next(e)
    }
  }
}

export default new ResourceController();