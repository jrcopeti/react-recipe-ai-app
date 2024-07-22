import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

const systemInstructions =
  "You are an experienced chef who will provided recipe suggestion to normal people who wants to cook with ingredients they have at home"; // to be implemented

const functionData = {
  name: "recipeData",
  description: "Get recipe data",
  parameters: {
    type: "object",
    properties: {
      title: {
        type: "string",
        description: "Title of the recipe",
      },
      ingredients: {
        type: "array",
        description: "Ingredients of the recipe",
        items: {
          type: "string",
        },
      },
      steps: {
        type: "array",
        description: "Steps of the recipe",
        items: {
          type: "string",
        },
      },
    },
    required: ["title", "ingredients", "steps"],
  },
};

export const fetchResponseAI = async ({
  setIsLoading,
  setError,
  setRecipe,
  prompt,
}) => {
  try {
    setIsLoading(true);
    setError(null);
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemInstructions },
        { role: "user", content: prompt },
      ],
      tools: [{ type: "function", function: functionData }],
      tool_choice: { type: "function", function: { name: "recipeData" } },
      temperature: 0,
    });
    console.log("response:---", response);
    const data =
      response.choices?.[0].message.tool_calls?.[0]?.function.arguments;
    console.log("data:---", data);
    const parsedData = JSON.parse(data ?? "");
    console.log("parsed data:----", parsedData);

    if (parsedData === null) {
      return null;
    } else if (parsedData === undefined) {
      throw new Error("Recipe not found");
    } else {
      setRecipe({
        title: parsedData.title,
        ingredients: parsedData.ingredients,
        steps: parsedData.steps,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    setError(error);
  } finally {
    setIsLoading(false);
  }
};
