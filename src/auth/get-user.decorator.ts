import { createParamDecorator } from "@nestjs/common";

export const GetUser = createParamDecorator((data, req) => {
  const request = req.switchToHttp().getRequest();
  return request.user;
});
