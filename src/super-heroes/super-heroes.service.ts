import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SuperHeroes, SuperHeroesDocument } from './schema/super-heroes.schema';

@Injectable()
export class SuperHeroesService {
  constructor(
    @InjectModel(SuperHeroes.name)
    private superHeroModel: Model<SuperHeroesDocument>,
  ) {}

  async getAll(): Promise<SuperHeroes[]> {
    return this.superHeroModel.find().exec();
  }

  async create(superHeroes: SuperHeroes) {
    const newSuperHeroes = new this.superHeroModel(superHeroes);
    return newSuperHeroes.save();
  }

  async getByid(id: string) {
    return await this.superHeroModel.findById(id).exec();
  }

  async update(id: string, superHeroes: SuperHeroes) {
    return await this.superHeroModel.findByIdAndUpdate(id, superHeroes, {
      new: true,
    });
  }

  async delete(id: string) {
    await this.superHeroModel.findByIdAndRemove(id);
  }
}
