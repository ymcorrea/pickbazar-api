import { CreateProfileDto } from "./dto/create-profile.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUsersDto } from "./dto/get-users.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): import("./entities/user.entity").User;
    getAllUsers(query: GetUsersDto): Promise<import("./dto/get-users.dto").UserPaginator>;
    getUser(id: string): import("./entities/user.entity").User;
    updateUser(id: string, updateUserDto: UpdateUserDto): import("./entities/user.entity").User;
    removeUser(id: string): string;
    makeAdmin(id: string): import("./entities/user.entity").User;
}
export declare class ProfilesController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createProfile(createProfileDto: CreateProfileDto): void;
    updateProfile(updateProfileDto: UpdateProfileDto): void;
    deleteProfile(id: number): string;
}
