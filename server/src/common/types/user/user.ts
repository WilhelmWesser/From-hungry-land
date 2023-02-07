
import {RoleResponseDto} from "../role/role";

export {type UserTokenData} from './user-token-data.type'
export {type UserWithPassword} from './user-with-password.type'

export type ProductTagDTO = {
    id: number;
    name: string;
};

export type ProductDTO = {
    id: number;
    name: string;
    imgUrl: string;
    productTag: ProductTagDTO;
};

export type UserProductsDTO = {
    id: number,
    products: ProductDTO[]
}

type UserResponseDto = {
    id: number
    nickname: string
    email: string
    role: RoleResponseDto
}

type UserSignInDto = {
    email: string;
    password: string;
}


type UserSignInResponseDto = {
    token: string;
    user: UserResponseDto;
}

type UserSignUpDto = {
    nickname: string;
    email: string;
    password: string;
}

export {type UserSignUpDto}

export {type UserSignInResponseDto}

export {type UserSignInDto};

export {type UserResponseDto}
