import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { RedisService } from "../../../../redis/redis.service";
import { UserPort } from "../../../core";
import { UserRO } from "../../../core/interfaces";
import { FindUserByEmailQuery } from "../impl";
import { USER_REPOSITORY } from "../../../../shared/configs";

@QueryHandler(FindUserByEmailQuery)
export class FindUserByEmailQueryHandler
  implements IQueryHandler<FindUserByEmailQuery>
{
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserPort,

    private readonly redisCacheService: RedisService
  ) {}

  async execute({ email }: FindUserByEmailQuery): Promise<UserRO> {
    const result = await this.redisCacheService.get(email);

    if (result) {
      return result;
    } else {
      const user = await this.userRepository.findOne({ email });

      return { user };
    }
  }
}
