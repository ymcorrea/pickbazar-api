import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import {
  ChangePasswordDto,
  ForgetPasswordDto,
  LoginDto,
  OtpDto,
  OtpLoginDto,
  RegisterDto,
  ResetPasswordDto,
  SocialLoginDto,
  VerifyForgetPasswordDto,
  VerifyOtpDto,
} from "./dto/create-auth.dto";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  createAccount(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post("token")
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post("social-login-token")
  socialLogin(@Body() socialLoginDto: SocialLoginDto) {
    return this.authService.socialLogin(socialLoginDto);
  }

  @Post("otp-login")
  otpLogin(@Body() otpLoginDto: OtpLoginDto) {
    return this.authService.otpLogin(otpLoginDto);
  }

  @Post("send-otp-code")
  sendOtpCode(@Body() otpDto: OtpDto) {
    return this.authService.sendOtpCode(otpDto);
  }

  @Post("verify-otp-code")
  verifyOtpCode(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.authService.verifyOtpCode(verifyOtpDto);
  }

  @Post("forget-password")
  forgetPassword(@Body() forgetPasswordDto: ForgetPasswordDto) {
    return this.authService.forgetPassword(forgetPasswordDto);
  }

  @Post("reset-password")
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }

  @Post("change-password")
  @UseGuards(AuthGuard("jwt"))
  changePassword(@Body() changePasswordDto: ChangePasswordDto, @Request() req) {
    if (!req.user.email) {
      throw new UnauthorizedException("You must be logged in");
    }
    return this.authService.changePassword(changePasswordDto, req.user.email);
  }

  @Post("logout")
  async logout(): Promise<boolean> {
    return true;
  }

  @Post("verify-forget-password-token")
  verifyForgetPassword(
    @Body() verifyForgetPasswordDto: VerifyForgetPasswordDto,
  ) {
    return this.authService.verifyForgetPasswordToken(verifyForgetPasswordDto);
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("me")
  me(@Request() req) {
    if (!req.user.email) {
      throw new UnauthorizedException("You must be logged in");
    }
    return this.authService.findme(req.user.email);
  }

  // @Post('add-points')
  // addWalletPoints(@Body() addPointsDto: any) {
  //   return this.authService.me();
  // }

  @Post("contact-us")
  contactUs(@Body() addPointsDto: any) {
    return {
      success: true,
      message: "Thank you for contacting us. We will get back to you soon.",
    };
  }
}
