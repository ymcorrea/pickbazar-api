import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "somrifejfiujme",
    });
  }

  async validate(payload: any) {
    const { email } = payload;
    const user = await this.authService.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return {
      email: user.email,
      id: user.id,
      name: user.name,
    };
  }
}
