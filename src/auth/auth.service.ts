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

    const profile = {
      id: result.id,
      name: result.name,
      email: result.email,
    };

    // genarate JWT token
    const accessToken = await this.jwtService.sign(profile);

    if (result?.email) {
      return {
        token: accessToken,
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

    const profile = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    // genarate JWT token
    const accessToken = await this.jwtService.sign(profile);

    return {
      token: accessToken,
      permissions: ["super_admin", "customer"],
    };
  }

  async changePassword(
    changePasswordInput: ChangePasswordDto,
    email: string,
  ): Promise<CoreResponse> {
    const { oldPassword, newPassword } = changePasswordInput;

    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new ConflictException("User does not exist!");
    }

    const salt = user.salt;
    const hashPassword = await bycript.hash(oldPassword, salt);
    const db_password = user.password;

    if (!(hashPassword === db_password)) {
      throw new BadRequestException("Password does not match!");
    }

    const newSalt = await bycript.genSalt();
    const newHashPassword = await bycript.hash(newPassword, newSalt);

    user.salt = newSalt;
    user.password = newHashPassword;
    await this.usersRepository.save(user);
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
  async findme(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email: email },
    });

    const userProfile = {
      id: user.id,
      name: user.name,
      email: user.email,
      profile: user.profile,
    };

    return userProfile;
  }

  // Cheack email alrady exist?
  async findUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email: email },
    });
    return user;
  }
}
