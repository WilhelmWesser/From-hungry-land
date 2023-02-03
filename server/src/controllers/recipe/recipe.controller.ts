import {recipeService} from "../../services/services"
import {Request, Response} from "express";
import {RecipeQueryOptionInterface} from "@/common/interfaces/recipe.query.option/recipe.query.option.interface";



class RecipeController{

    async getRecipe (req: Request<{id:number}>, res: Response):Promise<void>{
        try {
            res.json(await recipeService.get(req.params.id))
        }catch (e){
            res.status(500).json(e.message)
        }

    }

    async getAllRecipes (req: Request<any, any, any, RecipeQueryOptionInterface>, res: Response):Promise<void>{
        try {
            res.json(await recipeService.getAll(req.query))
        }catch (e){
            res.status(500).json(e.message)
        }
    }
}

export const recipeController = new RecipeController();