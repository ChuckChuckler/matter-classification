let matterType;
let maxTime;
let currentTime;
let currentscore = 0;
let highscore = 0;
let multiplyer = 1;
let chosen;
let intervalCountdown;
let userGlobal;
let colorMode = "dark";

if(localStorage.getItem("highscore") == null){
    localStorage.setItem("highscore", 0);
}

highscore = localStorage.getItem("highscore");

document.getElementById("highScore").innerText = `High Score: ${highscore}`;

document.getElementById("currentScore").innerText = `Current Score: 0`;

let questions = {
    //term: [text/image, element/compound/heteromix/homomix]
    "Hydrogen":["text", "element"],
    "Helium":["text", "element"],
    "Lithium":["text", "element"],
    "Sodium":["text", "element"],
    "Potassium":["text", "element"],
    "Caesium":["text", "element"],
    "Francium":["text", "element"],
    "Beryllium":["text", "element"],
    "Magnesium":["text", "element"],
    "Calcium":["text", "element"],
    "Strontium":["text", "element"],
    "Barium":["text", "element"],
    "Radium":["text", "element"],
    "Yttrium":["text", "element"],
    "Titanium":["text", "element"],
    "Tantalum":["text", "element"],
    "Iron":["text", "element"],
    "Cobalt":["text", "element"],
    "Rhodium":["text", "element"],
    "Nickel":["text", "element"],
    "Platnium":["text", "element"],
    "Copper":["text", "element"],
    "Silver":["text", "element"],
    "24-Karat Gold":["text", "element"],
    "Zinc":["text", "element"],
    "Mercury":["text", "element"],
    "Boron":["text", "element"],
    "Aluminum":["text", "element"],
    "Carbon":["text", "element"],
    "Silicon":["text", "element"],
    "Tin":["text", "element"],
    "Lead":["text", "element"],
    "Nitrogen":["text", "element"],
    "Phosphorus":["text", "element"],
    "Arsenic":["text", "element"],
    "Antimony":["text", "element"],
    "Oxygen":["text", "element"],
    "Sulfur":["text", "element"],
    "Selenium":["text", "element"],
    "Fluorine":["text", "element"],
    "Chlorine":["text", "element"],
    "Bromine":["text", "element"],
    "Iodine":["text", "element"],
    "Astatine":["text", "element"],
    "Helium":["text", "element"],
    "Neon":["text", "element"],
    "Argon":["text", "element"],
    "Krypton":["text", "element"],
    "Xenon":["text", "element"],
    "Radon":["text", "element"],
    "Sugar":["text", "compound"],
    "Acetone":["text", "compound"],
    "Ammonia":["text", "compound"],
    "Citric Acid":["text", "compound"],
    "Fructose":["text", "compound"],
    "Glucose":["text", "compound"],
    "Glycerol":["text", "compound"],
    "Lactose":["text", "compound"],
    "Methanol":["text", "compound"],
    "Nicotine":["text", "compound"],
    "Distilled Water":["text", "compound"],
    "Nitric Acid":["text", "compound"],
    "Cyanide":["text", "compound"],
    "Ethanol":["text", "compound"],
    "Methane":["text", "compound"],
    "Carbon Monoxide":["text", "compound"],
    "Carbon Dioxide":["text", "compound"],
    "Propane":["text", "compound"],
    "Deoxyribose":["text", "compound"],
    "Caffeine":["text", "compound"],
    "Aspirin":["text", "compound"],
    "Maltose":["text", "compound"],
    "Melatonin":["text", "compound"],
    "Ibuprofen":["text", "compound"],
    "Pure Cocaine":["text", "compound"],
    "Testosterone":["text", "compound"],
    "Fentanyl":["text", "compound"],
    "Limestone":["text", "compound"],
    "Fool's Gold":["text", "compound"],
    "Vitamins":["text", "compound"],
    "Nitric Oxide":["text", "compound"],
    "Nitrogen Dioxide":["text", "compound"],
    "Nitrous Oxide":["text", "compound"],
    "Table Salt":["text", "compound"],
    "Baking Soda":["text", "compound"],
    "Ozone":["text", "compound"],
    "Phosphine":["text", "compound"],
    "Quartz":["text", "compound"],
    "Tap Water":["text", "homogeneous mixture"],
    "Air":["text", "homogeneous mixture"],
    "Steel":["text", "homogeneous mixture"],
    "Gasoline":["text", "homogeneous mixture"],
    "Vinegar":["text", "homogeneous mixture"],
    "Brass":["text", "homogeneous mixture"],
    "Bronze":["text", "homogeneous mixture"],
    "Milk":["text", "homogeneous mixture"],
    "Saltwater":["text", "homogeneous mixture"],
    "Sugar Water":["text", "homogeneous mixture"],
    "Strained Juice":["text", "homogeneous mixture"],
    "Kool-aid":["text", "homogeneous mixture"],
    "Soda":["text", "homogeneous mixture"],
    "Vodka":["text", "homogeneous mixture"],
    "Detergent":["text", "homogeneous mixture"],
    "Coffee":["text", "homogeneous mixture"],
    "Rubbing alcohol":["text", "homogeneous mixture"],
    "Wine":["text", "homogeneous mixture"],
    "Honey":["text", "homogeneous mixture"],
    "Soy sauce":["text", "homogeneous mixture"],
    "Air":["text", "homogeneous mixture"],
    "Hand Sanitizer":["text", "homogeneous mixture"],
    "Clorox":["text", "homogeneous mixture"],
    "Lotion":["text", "homogeneous mixture"],
    "9-Karat Gold":["text", "homogeneous mixture"],
    "14-Karat Gold":["text", "homogeneous mixture"],
    "16-Karat Gold":["text", "homogeneous mixture"],
    "Air":["text", "homogeneous mixture"],
    "Plastic":["text", "homogeneous mixture"],
    "Cooking Oil":["text", "homogeneous mixture"],
    "Maple Syrup":["text", "homogeneous mixture"],
    "Baking Powder":["text", "homogeneous mixture"],
    "Protein Powder":["text", "homogeneous mixture"],
    "Milk Chocolate Bar":["text", "homogeneous mixture"],
    "Blood":["text", "homogeneous mixture"],
    "Saline Solution":["text", "homogeneous mixture"],
    "IV Fluid":["text", "homogeneous mixture"],
    "Salad":["text", "heterogeneous mixture"],
    "Trail Mix":["text", "heterogeneous mixture"],
    "Pizza":["text", "heterogeneous mixture"],
    "Oil and Water":["text", "heterogeneous mixture"],
    "Pasta":["text", "heterogeneous mixture"],
    "Soil":["text", "heterogeneous mixture"],
    "Beach Sand":["text", "heterogeneous mixture"],
    "Gravel":["text", "heterogeneous mixture"],
    "Freshly-Squeezed Juice":["text", "heterogeneous mixture"],
    "Curdled Milk":["text", "heterogeneous mixture"],
    "Granite":["text", "heterogeneous mixture"],
    "Chocolate Chip Cookie":["text", "heterogeneous mixture"],
    "Human":["text", "heterogeneous mixture"],
    "Half-Peeled Banana":["text", "heterogeneous mixture"],
    "Moldy Cheese":["text", "heterogeneous mixture"],
    "Soda with Ice":["text", "heterogeneous mixture"],
    "Muddy Water":["text", "heterogeneous mixture"],
    "Pond":["text", "heterogeneous mixture"],
    "Sediment":["text", "heterogeneous mixture"],
    "A Roblox Bloxy Award Covered in Various Food Items and Left to Ferment in a Jar for Many Months":["text", "heterogeneous mixture"],
    "Brick Wall":["text", "heterogeneous mixture"],
    "Painting":["text", "heterogeneous mixture"],
    "Apple":["text", "heterogeneous mixture"],
    "Rusting Iron":["text", "heterogeneous mixture"],
    "Wood":["text", "heterogeneous mixture"],
    "Water Bottle":["text", "heterogeneous mixture"],
    "Green-Cheek Conure":["text", "heterogeneous mixture"],
    "My Algebra II Homework":["text", "heterogeneous mixture"],
    "Chemistry Exam":["text", "heterogeneous mixture"],
    "Chair":["text", "heterogeneous mixture"],
    "Omelette":["text", "heterogeneous mixture"],
    "Tree":["text", "heterogeneous mixture"],
    "Fridge":["text", "heterogeneous mixture"],
    "Cereal with Milk":["text", "heterogeneous mixture"],
    "elementDiagram1":["image", "element"],
    "elementDiagram2":["image", "element"],
    "elementDiagram3":["image", "element"],
    "elementDiagram4":["image", "element"],
    "compoundDiagram1":["image", "compound"],
    "compoundDiagram2":["image", "compound"],
    "homogeneous1":["image", "homogeneous mixture"]
}


let display = document.getElementById("toClassify");
let pos1;
let pos2;


display.onmousedown = function(e){

    document.onmouseup = function(){
        document.onmouseup = null;
        document.onmousemove = null;
        let elementHolder= document.getElementById("elementHolder");
        let compoundHolder = document.getElementById("compoundHolder");
        let heteroHolder = document.getElementById("heteroHolder");
        let homoHolder = document.getElementById("homoHolder");

        let dispRect = display.getBoundingClientRect();

        let elementRect = elementHolder.getBoundingClientRect();
        let compoundRect = compoundHolder.getBoundingClientRect();
        let heteroRect = heteroHolder.getBoundingClientRect();
        let homoRect = homoHolder.getBoundingClientRect();

        let arr = [[elementRect, "element"], [compoundRect, "compound"], [heteroRect, "heterogeneous mixture"], [homoRect, "homogeneous mixture"]];

        for(let i = 0; i < arr.length; i++){
            if(dispRect.right >= arr[i][0].left && dispRect.left <= arr[i][0].right && dispRect.top <= arr[i][0].bottom && dispRect.bottom >= arr[i][0].top && document.getElementById("gameHolder").style.display == "block"){
                check(arr[i][1]);
            }
        }
    }
    
    document.onmousemove = function(e){
        e = e || window.Event;
        e.preventDefault();
        pos1 = e.clientX;
        pos2 = e.clientY

        display.style.top = `${pos2}px`;
        display.style.left = `${pos1}px`;
    }
}

function setTime(s, m){
    maxTime = s;
    currentTime = s;
    multiplyer = m;
    main();
    countdown();
    intervalCountdown = setInterval(countdown, 1000);
}

function countdown(){
    if(currentTime > 0){
        document.getElementById("time").innerText = `Time left: ${currentTime} seconds`;
        currentTime--;
    }else{
        document.getElementById("gameHolder").style.display = "none";
        document.getElementById("gameOver").style.display = "block";
        document.getElementById("gameoverInfo").innerText = "You ran out of time!";
        updateHighscore();
    }
}

function leaderboardAcc(){
    document.getElementById("loginDiv").style.visibility = "visible";
}

function replay(){
    clearInterval(intervalCountdown);
    currentTime = maxTime;
    document.getElementById("gameOver").style.display = "none";
    currentscore = 0;
    document.getElementById("currentScore").innerText = `Current Score: 0`;
    main();
    intervalCountdown = setInterval(countdown, 1000);
}

function changeStyle(){
    if(colorMode == "dark"){
        document.getElementById("styleId").href = "lightMode.css";
        document.getElementById("changeStyle").innerText = "☾";
        colorMode = "light";
    }else{
        document.getElementById("styleId").href = "darkMode.css";
        document.getElementById("changeStyle").innerText = "☀";
        colorMode = "dark";
        
    }
}

function loginSignup(){
    let userHolder = document.getElementById("username");
    let passwHolder = document.getElementById("password");
    if(userHolder.value.length <= 3){
        document.getElementById("loginInfo").innerText = "Your username is too short! Please make it at least 3 characters long.";
    }else if(passwHolder.value.length <= 3){
        document.getElementById("loginInfo").innerText = "Your password is too short! Please make it at least 3 characters long.";
    }else{
        let user = userHolder.value;
        let passw = passwHolder.value;
        fetch("/validateAcc", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({user, passw})
        })

        .then(response => {
            if(!response.ok){
                console.log("response not ok :(");
            }else{
                return response.json();
            }
        })

        .then(data=>{
            if(data.message == "euge"){
                console.log("euge!!");
                document.getElementById("loginInfo").innerText = "All set! Your high score will appear on the leaderboard on refresh.";
                if(localStorage.getItem("highscore") > 0){
                    userGlobal = data.user;
                    updateHighscore();
                }
            }else{
                if(data.message == "This user does not exist in the database. Would you like to create an account?"){
                    document.getElementById("createAcc").style.display = "block";
                }
                document.getElementById("loginInfo").innerText = data.message;
            }
        })

        .catch(err=>{
            document.getElementById("loginInfo").innerText = "Error: " + err;
        })
    }
}

function updateHighscore(){
    clearInterval(intervalCountdown);

    let user = userGlobal;

    if(user != null){
        fetch("/updateHighscore",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({highscore, user})
        })
    
        .then(response=>{
            if(!response.ok){
                console.log("response not ok :(");
            }else{
                return response.json();
            }
        })
    
        .then(data=>{
            if(data.message == "euge"){
                console.log("euge!");
            }else{
                console.log("there was an error...:(");
            }
        })
    }
}

function createAcc(){
    let userHolder = document.getElementById("username");
    let passwHolder = document.getElementById("password");
    if(userHolder.value.length <= 3){
        document.getElementById("loginInfo").innerText = "Your username is too short! Please make it at least 3 characters long.";
    }else if(passwHolder.value.length <= 3){
        document.getElementById("loginInfo").innerText = "Your password is too short! Please make it at least 3 characters long.";
    }else{
        let user = userHolder.value;
        let passw = passwHolder.value;

        fetch("/createAcc", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({user, passw})
        })

        .then(response => {
            if(!response.ok){
                console.log("response not ok");
            }else{
                return response.json();
            }
        })

        .then(data=>{
            if(data.message == "euge"){
                console.log("euge!");
                document.getElementById("loginInfo").innerText = "Success! Please click Login again :-)";
                document.getElementById("createAcc").style.display = "none";
            }else{
                console.log("error");
            }
        })

        .catch(err=>{
            document.getElementById("loginInfo").innerText = "Error: " + err;
        })
        
    }
}

function leaderboardSetup(){
    let leaderboard = document.getElementById("leaderboard");
    let li1 = document.getElementById("first");
    let li2 = document.getElementById("second");
    let li3 = document.getElementById("third");
    let li4 = document.getElementById("fourth");
    let li5 = document.getElementById("fifth");

    let arrOfLis = [li1, li2, li3, li4, li5];

    fetch("/leaderboardSetup", {
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    .then(response => {
        if(!response.ok){
            console.log("response not ok :(");
        }else{
            return response.json();
        }
    })

    .then(data=>{
        if(data.message == "euge"){
            if(data.leaderboard.length >= 5){
                for(let i=0; i < 5; i++){
                    arrOfLis[i].innerText = `${data.leaderboard[i].username} - ${data.leaderboard[i].highscore}`;
                }
            }else{
                for(let i=0; i < data.leaderboard.length; i++){
                    arrOfLis[i].innerText = `${data.leaderboard[i].username} - ${data.leaderboard[i].highscore}`;
                }
            }
        }else{
            console.log("eheuuu!!");
        }
    })
}

function main(){
    document.getElementById("setup").style.display = "none";
    document.getElementById("gameHolder").style.display = "block";
    let questionsArr = Object.keys(questions);
    chosen = questionsArr[randint(questionsArr.length)];

    document.getElementById("toClassify").style.animationPlayState = "running";
    document.getElementById("toClassify").style.left = "50%";
    document.getElementById("toClassify").style.top = "50%";
    document.getElementById("toClassify").style.transform = "translate(-50%, -50%)"; 
    if(questions[chosen][0] == "image"){
        document.getElementById("display").style.display = "none";
        document.getElementById("diagram").style.display = "block";
        document.getElementById("diagram").src = `images/${chosen}.png`
    }else{
        document.getElementById("display").style.display = "block";
        document.getElementById("diagram").style.display = "none";
        document.getElementById("display").innerText = chosen;
    }
    matterType = questions[chosen][1];
}

function randint(int){
    return Math.floor(Math.random()*int);
}

function check(btnVal){
    if(btnVal == matterType){
        currentTime = maxTime;
        currentscore += 1 * multiplyer;
        document.getElementById("currentScore").innerText = `Current Score: ${currentscore}`;
        if(currentscore > highscore){
            highscore = currentscore;
            localStorage.setItem("highscore", highscore);
            document.getElementById("highScore").innerText = `High Score: ${highscore}`;
        }
        main();
    }else{
        document.getElementById("gameOver").style.display = "block";
        document.getElementById("gameHolder").style.display = "none";
        document.getElementById("gameoverInfo").innerText = `It's a(n) ${questions[chosen][1]}, not a(n) ${btnVal}!`;
        updateHighscore();
        clearInterval(intervalCountdown);
    }
}