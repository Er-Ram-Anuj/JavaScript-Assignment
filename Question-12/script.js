// 1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.
let Day="Tuesday";
switch (Day){
    case "Monday":
        console.log("There are five dayes");
        break;
    
    case "Tuesday":
        console.log("There are four dayes");
        break;
    
    case "Wednesday":
        console.log("There are Three dayes");
        break;
    
    case "Thursday":
        console.log("There are Two dayes");
        break;
    
    case "Friday":
        console.log("There are One dayes");
        break;
    
    case "Saturday":
        console.log("There are Zero dayes");
    break;
    
    case "Sunday":
        console.log("There are Zero dayes");
        break;
    
    default :
        console.log("Invalid");

    }
