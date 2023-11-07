import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { USER_REPOSITORY } from "../../shared/configs";
import { UserEntity } from "../../user/core";
import { UserRepository } from "./repositories";

@Global()
@Module({
  imports: [{ forwardRef: () => TypeOrmModule.forFeature([UserEntity]) }],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
  exports: [USER_REPOSITORY],
})
export class InfrastructureModule {}
