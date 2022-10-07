import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperHeroesModule } from './super-heroes/super-heroes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gabrielgnacio:error151091@cluster0.qzamp.mongodb.net/AngularNestjsDemoDB?retryWrites=true&w=majority',
    ),
    SuperHeroesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
