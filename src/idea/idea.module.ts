import { Module } from '@nestjs/common';
import { IdeaController } from './idea.controller';
import { IdeaService } from './idea/idea.service';

@Module({
  controllers: [IdeaController],
  providers: [IdeaService]
})
export class IdeaModule {}