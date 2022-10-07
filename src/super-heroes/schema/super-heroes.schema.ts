import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuperHeroesDocument = SuperHeroes & Document;

@Schema({ collection: 'SuperHeroes' })
export class SuperHeroes {
  @Prop()
  name: string;

  @Prop()
  franchise: string;

  @Prop()
  powers: string;

  @Prop()
  imageUrl: string;
}

export const SuperHeroesSchema = SchemaFactory.createForClass(SuperHeroes);
