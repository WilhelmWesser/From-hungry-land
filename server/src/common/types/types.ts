export {type DbClient} from './db/db'
export {RecipeQueryOptionType} from "./recipe/recipe"
export {type UserResponseDto, type UserSignInDto, type UserSignInResponseDto, type UserSignUpDto, type UserTokenData, type UserWithPassword} from './user/user'

export type ProductQueryOptionType = {
    take?: number | undefined,
    skip?: number | undefined,
    name?: string | undefined,
    filters?: string | string[] | undefined,
    userId?: number | undefined
}