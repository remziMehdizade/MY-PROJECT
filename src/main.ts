import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const date1 = new Date('06/27/2019');
  const date2 = new Date('10/12/2022');

  const date= new Date()
  console.log(date2.getTime().toString())
  const Difference_In_Time = Math.round(date.getTime() - date2.getTime());

  console.log(60*60*24*1000*365*2022
    )
  // To calculate the no. of days between two dates
  const Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

  console.log(Difference_In_Days);
}
bootstrap();
