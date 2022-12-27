import {
  BadRequestException,
  ConflictException,
  Injectable,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import * as bycript from "bcryptjs";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import {
  AuthResponse,
  ChangePasswordDto,
  CoreResponse,
  ForgetPasswordDto,
  LoginDto,
  OtpDto,
  OtpLoginDto,
  OtpResponse,
  RegisterDto,
  ResetPasswordDto,
  SocialLoginDto,
  VerifyForgetPasswordDto,
  VerifyOtpDto,
} from "./dto/create-auth.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserInput: RegisterDto): Promise<AuthResponse> {
    const { name, email, password } = createUserInput;
    const salt = await bycript.genSalt();
    const hashPassword = await bycript.hash(password, salt);

    const user = this.usersRepository.create({
      email: email,
      name: name,
      password: hashPassword,
      salt: salt,
    });

    const existingUser = await this.findUserByEmail(email);
    console.log(existingUser);
    if (existingUser?.email) {
      throw new ConflictException("This email alrady taken!");
    }

    const result = await this.usersRepository.save(user);

    // genarate JWT token
    // const accessToken = await this.jwtService.sign(result.profile);

    if (result?.email) {
      return {
        token: "accessToken",
        permissions: ["super_admin", "customer"],
      };
    }
  }

  async login(loginInput: LoginDto): Promise<AuthResponse> {
    const { email, password } = loginInput;
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new ConflictException("User does not exist!");
    }
    const salt = user.salt;
    const hashPassword = await bycript.hash(password, salt);
    const db_password = user.password;

    if (!(hashPassword === db_password)) {
      throw new BadRequestException("Password does not match!");
    }

    // const accessToken = await this.jwtService.sign(user.profile);

    return {
      token: "accessToken",
      permissions: ["super_admin", "customer"],
    };
  }

  async changePassword(
    changePasswordInput: ChangePasswordDto,
  ): Promise<CoreResponse> {
    console.log(changePasswordInput);

    return {
      success: true,
      message: "Password change successful",
    };
  }

  async forgetPassword(
    forgetPasswordInput: ForgetPasswordDto,
  ): Promise<CoreResponse> {
    console.log(forgetPasswordInput);

    return {
      success: true,
      message: "Password change successful",
    };
  }

  async verifyForgetPasswordToken(
    verifyForgetPasswordTokenInput: VerifyForgetPasswordDto,
  ): Promise<CoreResponse> {
    console.log(verifyForgetPasswordTokenInput);

    return {
      success: true,
      message: "Password change successful",
    };
  }

  async resetPassword(
    resetPasswordInput: ResetPasswordDto,
  ): Promise<CoreResponse> {
    console.log(resetPasswordInput);

    return {
      success: true,
      message: "Password change successful",
    };
  }

  async socialLogin(socialLoginDto: SocialLoginDto): Promise<AuthResponse> {
    console.log(socialLoginDto);
    return {
      token: "jwt token",
      permissions: ["super_admin", "customer"],
    };
  }

  async otpLogin(otpLoginDto: OtpLoginDto): Promise<AuthResponse> {
    console.log(otpLoginDto);
    return {
      token: "jwt token",
      permissions: ["super_admin", "customer"],
    };
  }

  async verifyOtpCode(verifyOtpInput: VerifyOtpDto): Promise<CoreResponse> {
    console.log(verifyOtpInput);
    return {
      message: "success",
      success: true,
    };
  }

  async sendOtpCode(otpInput: OtpDto): Promise<OtpResponse> {
    console.log(otpInput);
    return {
      message: "success",
      success: true,
      id: "1",
      provider: "google",
      phone_number: "+919494949494",
      is_contact_exist: true,
    };
  }

  // Cheack email alrady exist?
  async findUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email: email },
    });
    return user;
  }
}
