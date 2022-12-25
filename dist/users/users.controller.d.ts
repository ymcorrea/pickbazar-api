import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { GetUsersDto } from './dto/get-users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): import("./entities/user.entity").User;
    getAllUsers(query: GetUsersDto): Promise<import("./dto/get-users.dto").UserPaginator>;
    getUser(id: string): import("./entities/user.entity").User;
    updateUser(id: string, updateUserDto: UpdateUserDto): import("./entities/user.entity").User;
    removeUser(id: string): string;
    activeUser(id: number): import("./entities/user.entity").User;
    banUser(id: number): import("./entities/user.entity").User;
    makeAdmin(id: string): import("./entities/user.entity").User;
}
export declare class ProfilesController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createProfile(createProfileDto: CreateProfileDto): void;
    updateProfile(updateProfileDto: UpdateProfileDto): void;
    deleteProfile(id: number): string;
}
