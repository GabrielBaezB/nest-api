import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperHeroesModule } from './super-heroes/super-heroes.module';

@Module({
  imports: [
    MongooseModule.forRoot(

      ),
    SuperHeroesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
