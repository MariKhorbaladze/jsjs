///// davaleba 13

// 1. შევქმნათ ყველა მარტივი ტიპის ცვლადი რაც ვისწავლეთ
var userName = "Alex";
let adress = "Tbilisi";
let age = 23;
const isAvailable = "true";
console.log(userName, adress, age, isAvailable)

// 2. არითმეტიკული ოპერაციები მიმატება, გამოკლება, გაყოფა, გამრავლება ყველაფერი რაც ვისწავლეთ
     let x = 35;
     let y = 5;
     let sum = x + y;
     console.log(sum);

     let n = 25;
     let m = 23;
     let difference = n - m;
     console.log(difference);


     let a = 25;
     let b = 25;
     let multiplication = a * b;
     console.log(multiplication);


     let aa = 23;
     let xx = 23;
     let division = aa / xx;
     console.log(division);


// 3. სტრინგების კონკატენაცია + ით და სტრინგების კონკატენაცია `ბექტიკებით`
    let item = 1300;
    let person = 130;
    console.log("Hello we have " + item + " item for " + person + " and if you want we can send it.")
    console.log(`Hello we have ${item} for ${person} and if you want we can send it`)


// 4. მოცემულა მართკუთხედი სიგრძე ცვლადი = 7 და სიგანე = 5 (შექმენით 2 ცვლადი) გამოთვალეთ მართკუთხედის ფართობი ამ 2 ცვლადის გამოყენებით

      let length = 7;
      let width = 5;
      let area = length * width;
      console.log(area);

/////davaleba 14

// 1.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი, console.log გამოიტანეთ ამ მასივის ყველა ელემენტის ჯამი
    let numbers = [13, 5, 14, 18, 23];
    let summ = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
    console.log(sum);

// 2.შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი რომელსაც აქვს შემდეგი ველები (properties): name, age, address.
     const information = [ 
        {
            name: "Alex",
            age: 23,
            address: "Tbilisi",
        },
        {
            name: "Mari",
            age: 25,
            address: "Tbilisi",
        },
        {
            name: "Mari",
            age: 23,
            address: "Tbilisi",
        },
     ];


// 3. console.log ში გამოიტანეთ 3 სტრინგი "My name is (#2 დავალების 0 ინდექსზე მყოფი ობიექტის ველი name ის მნიშვნელობა)", My age is (#2 დავალების 0 ინდექსზე მყოფი   ობიექტის ველი age ის მნიშვნელობა)", "My address is (#2 დავალების 0 ინდექსზე მყოფი  ობიექტის ველი address ის მნიშვნელობა)"
            console.log(`My name is ${information[0].name}`);
            console.log(`My age is ${information[0].age}`);
            console.log(`My address is ${information[0].address}`);



// 4. დაწერეთ if / else statement სადაც შეამოწმებთ #2 დავალებაში  1 ინდექსზე მყოფი ობიექტში არსებულ age ველის მნიშვნელობას თუ ნაკლებია 19 ზე console.log ში დაბეჭდეთ "I am a teenager" დანარჩენ შემთხვევაში დაბეჭდეთ "I am an adult"
    if (information[1].age < 19) {
        console.log("I am a teenager");
    } else {
        console.log("I am an adult");
    };

// 5.  შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი,და შეეცადეთ console.log-ში გამოიტანოთ ამ მასივის ყველა ელემენტი
    let numbersInfo = [13, 23, 25, 235, 33]
    for (let i = 0; i < numbersInfo.length; i++) { 
        console.log(numbersInfo[i]);
    };



// 6. const currentDay = new Date().getDay(); currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით ,0 არის კვირა ,1 არის ორშაბათი და ასე შემდეგ, 0-6 მდე რიცხვს აბრუნებს სადაც 6 არის შაბათი .
// დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას კვირას 1 ის შემთხვევაში ორშაბათს და ასე შემდეგ 6მდე.
switch (new Date().getDate()) { 
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
  };


  /////davaleba 15 

// 1. დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
    for (let i = 0; i < 100; i++) { 
    console.log(i)
    };

// 2. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
    let i = 0;
    while (i < 50) {
    console.log(i);
    i +=1;
    };
// 3.შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა. ისე როგორც ლექციაზე გავაკეთეთ.
    const names = ["Gio", "Giorgi", "Luka", "Nika", "Alex"];
    console.log(names);
    names.push("Royal");
    console.log(names);
    names.unshift("Aleksandre");
    console.log(names);
    names.shift();
    console.log(names);
    names.pop();
    console.log(names);    



// 4. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე ამ ,მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i) მასივში ჩაწერა ხდება push მეთოდის საშუალებით ლექციის ფაილში გვიწერია
    const space = [];
    for (let i = 1; i < 10000; i++) {
    space.push(i * i);
    };

// 5.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი
    const number = [400, 134, 23, 24, 134];
    let numberSum = 0;
     for (let i = 0; i < number.length; i++) {
     numberSum += number[i];
 };
   
// 6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი.
 function evenOdd(num) {
    if (num % 2 === 0) {
      return false;
      } else {
        return true;
      }
};
    console.log(evenOdd(7));
    console.log(evenOdd(8));
 
 // 7.დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) და დააბრუნებს LowerCase (my name is john) სტრინგს
    const getTextToLowerCase = (message) => {
        const text = message.toLowerCase() ;
       return text;
    }
    
    console.log(getTextToLowerCase("MY NAME IS JOHN"));

// 8. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება   
function numberFilter(numbers) {
    return numbers.filter(numbers => numbers % 2 === 0);
    }
    const numbersArray = [13, 30, 225, 233, 245, 34, 23];
    console.log(numberFilter(numbersArray));


    ////davaleba bolo

// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს
    const getNumberInfo = (num) => { 
        if (num % 3 === 0) { 
         return true;
     } else { 
         return false;
     }
    }; 
console.log(getNumberInfo(5))
// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.
       function getCurrencySymbolFromCode (currency) { 
        switch (currency) {
            case "USD":
              return "$";
            case "EUR":
              return "€";
            case "GEL":
              return "ლ"
            default:
              return getCurrencySymbolFromCode;
        }
    };

    console.log(getCurrencySymbolFromCode("USD"));
    console.log(getCurrencySymbolFromCode("EUR"));
    console.log(getCurrencySymbolFromCode("GEL"));
 

// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.
    function toUpperCaseString(name) {
        return name.toUpperCase();
    }
    console.log(toUpperCaseString("my name is joe")); 



// 4.  დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.

const profit = (askPrice, bidPrice) => ((askPrice - bidPrice) / bidPrice) * 100;
console.log(profit(390, 150));





// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.
const numsArray = [13, 5, 14, 33,];      
const filteredEvenNumbers = numsArray.filter((num) => num % 2 === 0);

// 6. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.

const infos = [
    {
      name: "Alex",
      age: 23,
    },
    {
      name: "Mari",
      age: 24,
    },
  ];
  
  function findObjectByName(infos, nameToSearch) {
    for (let object of infos) {
        if (object.name === nameToSearch) {
            return object;
        }
    }
};
console.log(findObjectByName(infos, "Alex")); 
console.log(findObjectByName(infos, "Mari")) 



// დამატებითი დავალება 4
// შექმნით div;
//  div ტეგის შიგნითაც დაამატეთ p ტეგი;
// p ტეგს დამაატეთ კლასი text;
// p ტეგის შიგნით დაამატეთ ტექსტი "hello world"
// საბოლოოდ  html-ში ასეთი სტრუქტურა უნდა მიიღოთ
// <div>
// <p class="text">hello world</p>
// </div>
 const newDiv = document.createElement("div");
 const newP = document.createElement("p");
 newP.classList.add("text");
 newP.textContent =  "hello world";;
 newDiv.appendChild(newP);
 document.body.appendChild(newDiv);

