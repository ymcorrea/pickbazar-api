import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { AuthResponse, ChangePasswordDto, CoreResponse, ForgetPasswordDto, LoginDto, OtpDto, OtpLoginDto, OtpResponse, RegisterDto, ResetPasswordDto, SocialLoginDto, VerifyForgetPasswordDto, VerifyOtpDto } from "./dto/create-auth.dto";
export declare class AuthService {
    private usersRepository;
    private readonly jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    register(createUserInput: RegisterDto): Promise<AuthResponse>;
    login(loginInput: LoginDto): Promise<AuthResponse>;
    changePassword(changePasswordInput: ChangePasswordDto): Promise<CoreResponse>;
    forgetPassword(forgetPasswordInput: ForgetPasswordDto): Promise<CoreResponse>;
    verifyForgetPasswordToken(verifyForgetPasswordTokenInput: VerifyForgetPasswordDto): Promise<CoreResponse>;
    resetPassword(resetPasswordInput: ResetPasswordDto): Promise<CoreResponse>;
    socialLogin(socialLoginDto: SocialLoginDto): Promise<AuthResponse>;
    otpLogin(otpLoginDto: OtpLoginDto): Promise<AuthResponse>;
    verifyOtpCode(verifyOtpInput: VerifyOtpDto): Promise<CoreResponse>;
    sendOtpCode(otpInput: OtpDto): Promise<OtpResponse>;
    findUserByEmail(email: string): Promise<User>;
}
