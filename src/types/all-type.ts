export type Fact = {
  description: string,
  factId: number,
  title: string,
};

export type Recipe = {
  additions1: string[];
  additions2: string[];
  additions3: string[];
  cookTime: string;
  description: string;
  directions: string[];
  imageUrl: string;
  ingredients: string[];
  makingAmount: string;
  name: string;
  prepTime: string;
  recipeId: number;
  tips: string[];
  totalTime: string;
};

export type Combination = {
  combinationId: number;
  name: string;
  tag: string[];
};

export type History = {
  description: string;
  mileStoneId: number;
  year: number;
};
