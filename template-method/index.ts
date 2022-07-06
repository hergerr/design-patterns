import { Coffee } from "./implementation/Coffee";
import { Tea } from "./implementation/Tea";

const test = async () => {
  const tea: Tea = new Tea();
  const coffee: Coffee = new Coffee();

  console.log("Coffee");
  await coffee.prepareRecipe();

  console.log("\nTea: ");
  await tea.prepareRecipe();
};

test();
