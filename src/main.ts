import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);

  prismaService.enableShutdownHooks(); // Remove the argument here

  await app.listen(3000);
}
bootstrap();
