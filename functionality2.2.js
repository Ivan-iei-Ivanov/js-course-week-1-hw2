var fryingPanCollection = prompt("Колко тигана има в кухнята?");
var potCollection = prompt("Колко тенджери има в кухнята?");
var kitchenWidth = prompt("Колко сантиметра е широка кухнята?");
var kitchenLength = prompt("Колко сантиметра е дълга кухнята?");
var kitchenHeigth = prompt("Колко сантиметра е висока кухнята?");
const KITCHEN_AREA = kitchenWidth * kitchenLength;
const KITCHEN_VOLUME = kitchenWidth * kitchenLength * kitchenHeigth
var headChefName = prompt("Как се казва главният готвач?");
var chefCollection = prompt("Колко готвачи работят в кухнята?");
var waiterCollection = prompt("Колко сервитьори работят в ресторанта?");
var sauceChef = prompt("Как се казва отговорника на сосовете?");
var kitchenMinTemperature = parseInt(
  prompt("Каква е минималната температура в кухнята?")
);
var kitchenMaxTemperature = parseInt(
  prompt("Каква е максималната температура в кухнята?")
);
var bankAccountAmount = prompt("Колко парички имате в банковата си сметка?");
var openingTime = parseFloat(prompt("В колко часа отваряте?"));
var closingTime = parseFloat(prompt("В колко часа затваряте?"));

// Optional questions, to be asked only if the user aknowledges his commitment to answer them
var optionalQuestionsQuery = prompt(
  "Желаете ли да отговорите на допълнителни въпроси?"
);
if (optionalQuestionsQuery === "да" || optionalQuestionsQuery === "Да") {
  var hasRefrigerator = prompt("Разполагате ли с хладилник?");
  var hasGasStove = prompt("Разполагате ли с газов котлон?");
  var hasConvectionOven = prompt("Разполагате ли с конвектомат?");
  var hasElectricGrill = prompt("Разполагате ли с електрическа скара?");
  var hasKitchenHood = prompt("Разполагате ли с аспиратор?");
} else {
  exit();
}

do {
  foodDishType = prompt(
    "Какво ястие желаете да ви приготвя? Месно ястие, Вегетарианско ястие или Десерт"
  );

  const MEAL_TYPES = {
    MEAT: "Месно ястие",
    VEGETARIAN: "Вегетарианско ястие",
    DESSERT: "Десерт",
  };
} while (
  !(
    foodDishType === MEAL_TYPES.MEAT ||
    foodDishType === MEAL_TYPES.VEGETARIAN ||
    foodDishType === MEAL_TYPES.DESSERT
  )
);
if (foodDishType === MEAL_TYPES.MEAT) {
  portionSize = prompt(
    "Каква порция по размер желаете? Малка, средна или голяма"
  );

  const MEAT_PORTION_SIZE = {
    SMALL: "малка порция",
    MEDIUM: "средна порция",
    LARGE: "голяма порция",
  };

  if (portionSize === MEAT_PORTION_SIZE.SMALL) {
    alert(
      "Вие поръчахте малка порция от 450 грама, благодарим Ви за поръчката."
    );
  } else if (portionSize === MEAT_PORTION_SIZE.MEDIUM) {
    alert(
      "Вие поръчахте средна порция от 750 грама, благодарим Ви за поръчката."
    );
  } else if (portionSize === MEAT_PORTION_SIZE.LARGE) {
    alert(
      "Вие поръчахте голяма порция от 950 грама, благодарим Ви за поръчката."
    );
  } else {
    alert("Няма такава порция.");
  }

  const COOKING_LEVELS = {
    RARE: "RARE",
    MEDIUM: "MEDIUM",
    WELL_DONE: "WELL_DONE",
  };
  do {
    donenessLevel = prompt(
      "До каква степен желаете да Ви е изпечено месото? RARE, MEDIUM или WELL DONE?"
    );
  } while (
    !(
      donenessLevel === COOKING_LEVELS.RARE ||
      donenessLevel === COOKING_LEVELS.MEDIUM ||
      donenessLevel === COOKING_LEVELS.WELL_DONE
    )
  );

  // Check if can cook RARE
  if (
    !conditions.hasGasStove &&
    conditions.hasElectricGrill &&
    conditions.kitchenMinTemperature >= 36 &&
    conditions.kitchenMaxTemperature <= 48 &&
    conditions.hasKitchenHood &&
    conditions.MEAT_PORTION_SIZE === SMALL
  ) {
    canCookRare = true;
  }
  // Check if can cook MEDIUM
  else if (
    conditions.hasConvectionOven ||
    conditions.chefCollection === 5 ||
    conditions.portionSize === PORTION_SIZES.MEDIUM ||
    conditions.headChefName === "Иван"
  ) {
    canCookMedium = true;
  }
  // Check if can cook WELL DONE
  else if (
    (conditions.closingTime >= 22 ||
      ["Петър", "Радо"].includes(conditions.sauceChef)) &&
    (conditions.KITCHEN_AREA === 45 ||
      conditions.fryingPanCollection === 3 ||
      conditions.potCollection === 2)
  ) {
    canCookWellDone = true;
  }
} else if (foodDishType === MEAL_TYPES.VEGETARIAN) {
  do {
    var vegetarianMealType = prompt(
      "Моля въведете вида на вегетарианското ястие измежду вегетарианско, веганско и пескатерианско. "
    );

    const VEGETARIAN_MEAL_OPTION = {
      VEGETARIAN_OPTION: "ВЕГЕТАРИАНСКО",
      VEGAN_OPTION: "ВЕГАНСКО",
      PESCATERIAN_OPTION: "ПЕСКАТЕРИАНСКО",
    };
  } while (
    !(
      vegetarianMealType === VEGETARIAN_OPTION ||
      vegetarianMealType === VEGAN_OPTION ||
      vegetarianMealType === PESCATERIAN_OPTION
    )
  );
  // Check if can cook VEGETARIAN_OPTION
  if (
    !conditions.hasConvectionOven === false ||
    conditions.hasElectricGrill === false ||
    conditions.hasKitchenHood === false
  ) {
    canCookVegetarianOption = true;
  }
  // Check if can cook VEGAN_OPTION
  if (
    !conditions.hasRefrigerator &&
      conditions.headChefName === "Манол" &&
      (conditions.waiterCollection >= 3 || conditions.waiterCollection < 11) &&
      conditions.waiterCollection != 7
  ) {
    canCookVeganOption = true;
  }
  // Check if can cook PESCATERIAN_OPTION
  if (
    !(conditions.hasElectricGrill ||
      conditions.optionalQuestionsQuery === true) &&
      (KITCHEN_VOLUME < 13  || 
      bankAccountAmount < 158_000)
  ) {
    canCookPescaterianOption = true;
  }







}
