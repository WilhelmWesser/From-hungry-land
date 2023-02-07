import {RoleResponseDto} from "@/common/types/role/role";


type UserWithPassword = {
    id: number
    nickname: string
    email: string
    password: string
    role: RoleResponseDto
}

export {type UserWithPassword};