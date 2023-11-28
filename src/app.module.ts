import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { MediaModule } from "@media/media.module";
import { UserModule } from "@user/user.module";
import { InfrastructureModule } from "@infrastructure/infrastructure.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    MediaModule,
    InfrastructureModule,
  ],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
