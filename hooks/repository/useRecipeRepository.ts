import {useSQLiteContext} from "expo-sqlite";

type CreateRecipeDto = {
    name: string;
    description?: string;
    ingredients: string[];
}

export function useRecipeRepository() {
    const database = useSQLiteContext();

    const createRecipe = async (recipe: CreateRecipeDto) => {

        await database.runAsync(
            "INSERT INTO recipes (name, description) VALUES (?,?);",
            [recipe.name, recipe.description || ""]
        );
    }

    return {
        createRecipe: createRecipe,
    }
}