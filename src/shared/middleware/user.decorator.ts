import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

import { JWT_SECRET_KEY } from "../configs";
import { CurrentUser } from "../../user/core/interfaces/user.interface";

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  // if route is protected, there is a user set in auth.middleware
  if (!!req.user) {
    return !!data ? req.user[data] : req.user;
  }

  // in case a route is not protected, we still want to get the optional auth user from jwt
  const token = req.headers.authorization
    ? (req.headers.authorization as string).split(" ")
    : null;
  if (token && token[1]) {
    const decoded: CurrentUser = jwt.verify(token[1], JWT_SECRET_KEY);
    return !!data ? decoded[data] : decoded;
  }
});
