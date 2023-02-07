export enum RecipeDifficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

enum RecipeRoutes{
    GET = "/:id",
    GETALL = "/",
    CHECK_RECIPE_INGREDIENTS = "/check/:id"
}

export {RecipeRoutes}