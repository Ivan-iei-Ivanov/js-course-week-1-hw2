var panCollection = prompt("Колко тигана има в кухнята?")
var potCollection = prompt("Колко тенджери има в кухнята?")
var kitchenWidth = prompt("Колко сантиметра е широка кухнята?")
var kitchenLength = prompt("Колко сантиметра е дълга кухнята?")
var kitchenHeigth = prompt("Колко сантиметра е висока кухнята?")
var chefName = prompt("Как се казва главният готвач?")
var cookCollection = prompt("Колко готвачи работят в кухнята?")
var waiterCollection = prompt("Колко сервитьори работят в ресторанта?")
var sauceResponsiblePersonName = prompt("Как се казва отговорника на сосовете?")
var kitchenMinTemperature = prompt("Каква е минималната температура в кухнята?")
var kitchenMaxTemperature = prompt("Каква е максималната температура в кухнята?")
var bankAccountAmount = prompt("Колко парички имате в банковата си сметка?")
var openingTime = prompt("В колко часа отваряте?")
var closingTime = prompt("В колко часа затваряте?")

// Optional questions, to be asked only if the user aknowledges his commitment to answer them
var optionalQuestionsQuery = ("Желаете ли да отговорите на допълнителни въпроси?") 
if (optionalQuestionsQuery === "да", "Да"){
  var isRefrigeratorOwned = ("Разполагате ли с хладилник?")
  var isGasStoveOwned = ("Разполагате ли с газов котлон?")
  var isConvectionOvenOwned = ("Разполагате ли с конвектомат?")
  var isElectricalGrillnOwned = ("Разполагате ли с електрическа скара?")
  var isKitchenHoodOwned = ("Разполагате ли с аспиратор?")
}
else {
  exit()
}