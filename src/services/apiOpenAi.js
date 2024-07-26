import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

const systemInstructions =
  "You are an advanced recipe assistant designed to generate creative and suitable dinner ideas based on a set of user-specified criteria. Your task is to provide detailed and relevant dinner suggestions that align with the parameters provided in the user inputs.";

const functionData = {
  name: "recipeData",
  description: "Get recipe data",
  parameters: {
    type: "object",
    properties: {
      title: {
        type: "string",
        description: "A creative and descriptive name for the recipe.",
      },
      description: {
        type: "string",
        description:
          "A brief summary of the dish, highlighting key ingredients",
      },
      preparationTime: {
        type: "string",
        description:
          "Total time required to prepare and cook the dish, in minutes or hours if necessary",
      },
      difficultyLevel: {
        type: "string",
        description:
          "The level of difficulty in preparing the dish, such as easy, medium, or hard",
      },
      dietaryOptions: {
        type: "array",
        description: "Dietary options for the recipe",
        items: {
          type: "string",
        },
      },
      ingredients: {
        type: "array",
        description:
          "A list of ingredients required for the recipe, specifying which ingredients are from the user’s inventory and which might need to be added. Include common or flexible substitutions if needed.",
        items: {
          type: "string",
        },
      },
      instructions: {
        type: "array",
        description:
          "Step-by-step preparation directions. Ensure clarity and ease of following, and include any shortcuts or time-saving tips if necessary.",
        items: {
          type: "string",
        },
      },
      servingSize: {
        type: "string",
        description:
          "Indicate the number of servings this recipe provides based on the number of guests",
      },
      tips: {
        type: "string",
        description:
          "Additional information, tips, or suggestions related to the recipe",
      },
      query: {
        type: "string",
        description:

          "Only two keywords are allowed where the first is the cooking method and the second is the main ingredient. Only space is allowed. Do not include any special characters or numbers.",

      },
    },

    required: [
      "title",
      "description",
      "preparationTime",
      "ingredients",
      "instructions",
      "servingSize",
      "tips",
      "query",
    ],
  },
};

export const fetchResponseAi = async (prompt) => {
  try {
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
      return parsedData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
