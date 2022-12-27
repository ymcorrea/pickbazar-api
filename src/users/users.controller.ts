import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUsersDto } from "./dto/get-users.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  getAllUsers(@Query() query: GetUsersDto) {
    return this.usersService.getUsers(query);
  }

  @Get(":id")
  getUser(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(":id")
  updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  removeUser(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  // @Post('unblock-user')
  // activeUser(@Body('id') id: number) {
  //   return this.usersService.activeUser(+id);
  // }

  // @Post('block-user')
  // banUser(@Body('id') id: number) {
  //   return this.usersService.banUser(+id);
  // }

  @Post("make-admin")
  makeAdmin(@Param("user_id") id: string) {
    return this.usersService.makeAdmin(id);
  }
}

@Controller("profiles")
export class ProfilesController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto) {
    console.log(createProfileDto);
  }

  @Put(":id")
  updateProfile(@Body() updateProfileDto: UpdateProfileDto) {
    console.log(updateProfileDto);
  }

  @Delete(":id")
  deleteProfile(@Param("id") id: number) {
    return this.usersService.remove(id);
  }
}
