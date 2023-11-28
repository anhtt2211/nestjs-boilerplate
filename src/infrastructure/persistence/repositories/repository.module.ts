import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { DiTokens } from "@shared/configs";
import { UserEntity } from "@user/core";
import { UserRepository } from ".";

@Global()
@Module({
  imports: [{ forwardRef: () => TypeOrmModule.forFeature([UserEntity]) }],
  providers: [
    {
      provide: DiTokens.UserRepository,
      useClass: UserRepository,
    },
  ],
  exports: [DiTokens.UserRepository],
})
export class RepositoryModule {}
