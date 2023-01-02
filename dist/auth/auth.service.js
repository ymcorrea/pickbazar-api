"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const bycript = __importStar(require("bcryptjs"));
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async register(createUserInput) {
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
        if (existingUser === null || existingUser === void 0 ? void 0 : existingUser.email) {
            throw new common_1.ConflictException("This email alrady taken!");
        }
        const result = await this.usersRepository.save(user);
        const profile = {
            id: result.id,
            name: result.name,
            email: result.email,
        };
        const accessToken = await this.jwtService.sign(profile);
        if (result === null || result === void 0 ? void 0 : result.email) {
            return {
                token: accessToken,
                permissions: ["super_admin", "customer"],
            };
        }
    }
    async login(loginInput) {
        const { email, password } = loginInput;
        const user = await this.findUserByEmail(email);
        if (!user) {
            throw new common_1.ConflictException("User does not exist!");
        }
        const salt = user.salt;
        const hashPassword = await bycript.hash(password, salt);
        const db_password = user.password;
        if (!(hashPassword === db_password)) {
            throw new common_1.BadRequestException("Password does not match!");
        }
        const profile = {
            id: user.id,
            name: user.name,
            email: user.email,
        };
        const accessToken = await this.jwtService.sign(profile);
        return {
            token: accessToken,
            permissions: ["super_admin", "customer"],
        };
    }
    async changePassword(changePasswordInput, email) {
        const { oldPassword, newPassword } = changePasswordInput;
        const user = await this.findUserByEmail(email);
        if (!user) {
            throw new common_1.ConflictException("User does not exist!");
        }
        const salt = user.salt;
        const hashPassword = await bycript.hash(oldPassword, salt);
        const db_password = user.password;
        if (!(hashPassword === db_password)) {
            throw new common_1.BadRequestException("Password does not match!");
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
    async forgetPassword(forgetPasswordInput) {
        console.log(forgetPasswordInput);
        return {
            success: true,
            message: "Password change successful",
        };
    }
    async verifyForgetPasswordToken(verifyForgetPasswordTokenInput) {
        console.log(verifyForgetPasswordTokenInput);
        return {
            success: true,
            message: "Password change successful",
        };
    }
    async resetPassword(resetPasswordInput) {
        console.log(resetPasswordInput);
        return {
            success: true,
            message: "Password change successful",
        };
    }
    async socialLogin(socialLoginDto) {
        console.log(socialLoginDto);
        return {
            token: "jwt token",
            permissions: ["super_admin", "customer"],
        };
    }
    async otpLogin(otpLoginDto) {
        console.log(otpLoginDto);
        return {
            token: "jwt token",
            permissions: ["super_admin", "customer"],
        };
    }
    async verifyOtpCode(verifyOtpInput) {
        console.log(verifyOtpInput);
        return {
            message: "success",
            success: true,
        };
    }
    async sendOtpCode(otpInput) {
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
    async findme(email) {
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
    async findUserByEmail(email) {
        const user = await this.usersRepository.findOne({
            where: { email: email },
        });
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map