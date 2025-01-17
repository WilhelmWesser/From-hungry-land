import {UserRepository} from "@/repositories/repositories";
import {type UserResponseDto, type UserSignUpDto, UserWithPassword} from "@/common/types/types";
import {User} from "@/db/entities/user.entity";
import {UserProductsDTO} from "@/common/types/user/user";

class UserService {
    constructor(private repository: UserRepository) {
    }

    public getById(id: number): Promise<UserResponseDto | null> {
        return this.repository.getById(id);
    }

    public getByIdWithProducts(id: number): Promise<User | null> {
        return this.repository.getByIdWithProducts(id)
    }

    public getByEmail(email: string): Promise<UserResponseDto | null> {
        return this.repository.getByEmail(email);
    }

    public getByEmailWithPassword(email: string): Promise<UserWithPassword | null> {
        return this.repository.getByEmailWithPassword(email);
    }

    public create(userDto: UserSignUpDto): Promise<UserResponseDto> {
        return this.repository.create(userDto);
    }

    public async getUserProducts(id: number): Promise<UserProductsDTO> {
        return await this.repository.getUserProducts(id);
    }

    public async addProductToUser(userId: number, productId: number): Promise<void> {
         await this.repository.addProductToUser(userId, productId);
    }

    public async removeProductFromUser(userId: number, productId: number): Promise<void> {
        await this.repository.removeProductFromUser(userId, productId);
    }

}

export {UserService}