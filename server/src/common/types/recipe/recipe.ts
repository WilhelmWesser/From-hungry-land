import {RecipeDifficulty} from "@/common/enums/enums";
import {ProductTagDTO} from "@/common/types/user/user";
export type ProductDTO = {
    id: number;
    name: string;
    imgUrl: string;
    productTag: ProductTagDTO;
};

export type RecipeDtoType = {
    id:number,
    name:string,
    instruction:string
    imgUrl:string
    difficult: RecipeDifficulty

    productRecipes: ProductDTO[]


}

export type RecipeQueryOptionType = {
    take?:number,
    skip?:number,
    searchQuery?:string
    difficulty?:RecipeDifficulty[] | RecipeDifficulty
    isPossibleRecipes?:boolean
}


