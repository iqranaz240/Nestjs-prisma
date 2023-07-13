import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { PostService } from './post.service';

@Module({
  controllers: [AppController],
  providers: [PrismaService, UserService, PostService], // Register the PrismaService provider
})
export class AppModule {}
