var panCollection = prompt("Колко тигана има в кухнята?")
var potCollection = prompt("Колко тенджери има в кухнята?")
var kitchenWidth = prompt("Колко сантиметра е широка кухнята?")
var kitchenLength = prompt("Колко сантиметра е дълга кухнята?")
var kitchenHeigth = prompt("Колко сантиметра е висока кухнята?")
var headChefName = prompt("Как се казва главният готвач?")
var chefs = prompt("Колко готвачи работят в кухнята?")
var waiterCollection = prompt("Колко сервитьори работят в ресторанта?")
var sauceChef = prompt("Как се казва отговорника на сосовете?")
var kitchenMinTemperature = prompt("Каква е минималната температура в кухнята?")
var kitchenMaxTemperature = prompt("Каква е максималната температура в кухнята?")
var bankAccountAmount = prompt("Колко парички имате в банковата си сметка?")
var openingTime = prompt("В колко часа отваряте?")
var closingTime = prompt("В колко часа затваряте?")

// Optional questions, to be asked only if the user aknowledges his commitment to answer them
var optionalQuestionsQuery = prompt("Желаете ли да отговорите на допълнителни въпроси?") 
if (optionalQuestionsQuery === "да", "Да"){
  var isRefrigeratorOwned = prompt("Разполагате ли с хладилник?")
  var isGasStoveOwned = prompt("Разполагате ли с газов котлон?")
  var isConvectionOvenOwned = prompt("Разполагате ли с конвектомат?")
  var isElectricalGrillnOwned = prompt("Разполагате ли с електрическа скара?")
  var isKitchenHoodOwned = prompt("Разполагате ли с аспиратор?")
}
else {
  exit()
}

do {foodDishType = prompt("Какво ястие желаете да ви приготвя? Месно ястие, Вегетарианско ястие или Десерт")
    
} while (!(foodDishType === "Месно ястие" || foodDishType === "Вегетарианско ястие" || foodDishType === "Десерт"))
if (foodDishType === "Месно ястие"){
    meatPortionSize = prompt("Каква порция по размер желаете?")
    if (meatPortionSize === "малка порция"){
        alert("Вие поръчахте малка порция от 450 грама, благодарим Ви за поръчката.")
    } else if (meatPortionSize === "средна порция"){
        alert("Вие поръчахте средна порция от 750 грама, благодарим Ви за поръчката.")
    } else if (meatPortionSize === "голяма порция"){
        alert("Вие поръчахте голяма порция от 950 грама, благодарим Ви за поръчката.")
    } else {
        alert("Няма такава порция.")
    }
   
    do {meatDonenessLevel = prompt("До каква степен желаете да Ви е изпечено месото? RARE, MEDIUM или WELL DONE?")
    
    } while (!(meatDonenessLevel === "RARE" || meatDonenessLevel === "MEDIUM" || meatDonenessLevel === "WELL DONE"))
    if (meatDonenessLevel === "RARE"){
        isGasStoveOwned = false
        isElectricalGrillnOwned = true
        kitchenTemperature = kitchenMinTemperature 
         = 36
        //  в кухнята няма газов котлон;
        // в кухнята има електрическа скара;
        // температурата на въздуха е в интервала от 36 до 48 градуса;
        // има аспиратор;
        // избрана е малка порция.
    } elif (meatDonenessLevel === "MEDIUM"){
        // За да можете да приготвите MEDIUM месо трябва,

        // да е налице едно от следните условия:

        // в кухнята има конвектомат;
        // в кухнята има персонал от точно 5 човека;
        // избрана е средна порция;
        // името на главния готвач е Иван.
    } elif (meatDonenessLevel === "WELL DONE"){
        // За да можете да приготвите WELL DONE месо трябва, едно от тези условия да е изпълнено:

        // кухнята работи до 22:00;
        // отговорникът на сосовете се казва Петър или Радо. И едно от тези условия:
        // кухнята е с квадратура 45 квадратни метра;
        // в кухнята има точно 3 тигана или точно 2 тенджери
    }
    }
