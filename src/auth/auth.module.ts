import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "src/orders/entities/order.entity";
import { Profile } from "src/users/entities/profile.entity";
import { User } from "src/users/entities/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile, Order]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: "somrifejfiujme",
      signOptions: {
        expiresIn: 3600 * 24 * 7,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule, TypeOrmModule],
})
export class AuthModule {}
