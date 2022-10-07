import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SuperHeroes } from './schema/super-heroes.schema';
import { SuperHeroesService } from './super-heroes.service';

@Controller('super-heroes')
export class SuperHeroesController {
  constructor(private superHeroService: SuperHeroesService) {}

  @Get()
  async getAll() {
    return await this.superHeroService.getAll();
  }

  @Post()
  async createSuperHeroes(@Body() superHeroes: SuperHeroes) {
    const newBook = await this.superHeroService.create(superHeroes);
    return newBook;
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.superHeroService.getByid(id);
  }

  @Put('/:id')
  async updateSuperHero(
    @Param('id') id: string,
    @Body() superHeroes: SuperHeroes,
  ) {
    return await this.superHeroService.update(id, superHeroes);
  }

  @Delete('/:id')
  async deleteSuperHero(@Param('id') id: string) {
    await this.superHeroService.delete(id);
  }
}
