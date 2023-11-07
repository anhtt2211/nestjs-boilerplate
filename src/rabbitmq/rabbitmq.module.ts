import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { USER_QUEUE, USER_RMQ_CLIENT } from "../shared/configs";

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_RMQ_CLIENT,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBIT_URL],
          queue: USER_QUEUE,
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class RabbitMqModule {}
