
const init = () => {
        let btn = document.querySelector("#estimate");
        btn.onclick = displayEstimate;

}

const displayEstimate = () => {

    // Declare const
    const oneStoryCost = 175;
    const twoStoryCost = 135;
    let costPerSqFt= 0;
    let sqFootage = 0;

    // creating image variables to display when selecting story
    let br = document.createElement('br');
    let imgOneChecked = document.querySelector("#sOne");
    let imgTwoChecked = document.querySelector("#sTwo");

    // <div class="output"><labe><img></label></div>
    let creatDiv = document.querySelector(".outputStory");
    // creating label
    let labelElementStoryOne = document.createElement("label")
    labelElementStoryOne.id = "myLabelOne"
    labelElementStoryOne.textContent = "Single Story";

    let labelElementStoryTwo = document.createElement("label")
    labelElementStoryTwo.id = "myLabelTwo";
    labelElementStoryTwo.textContent = "Two Story";

    // creating image for story
    let imgPartOne = document.createElement("img");
    imgPartOne.src = "images/oneStory.jpg";
    imgPartOne.id = "sOne";
    imgPartOne.style = "width:250px; height:130px; margin-left:10em; "
    // border: 2px inset rgb(252, 190, 3)

    let imgPartTwo = document.createElement("img");
    imgPartTwo.src = "images/twoStory.png"
    imgPartTwo.id = "sTwo";
    imgPartTwo.style = "width:250px; height: 130px; margin-left:10em; "
    // border: 2px inset rgb(3, 181, 252)

    // get the square footage from the user
    sqFootage = document.querySelector("#sqft").value;

    // creating check to determine which story was selected
    if(imgOneChecked.style.border == "2px inset rgb(7, 220, 227)" && !creatDiv ) {
        costPerSqFt = oneStoryCost * sqFootage;
        creatDiv = document.createElement("div");
        creatDiv.classList.add("outputStory");
        creatDiv.appendChild(labelElementStoryOne);
        creatDiv.appendChild(imgPartOne);
        document.body.appendChild(creatDiv);
    } else if(imgTwoChecked.style.border == "2px inset rgb(7, 220, 227)" && !creatDiv) {
        costPerSqFt = twoStoryCost * sqFootage;
        creatDiv = document.createElement("div");
        creatDiv.classList.add("outputStory");
        creatDiv.appendChild(labelElementStoryTwo);
        creatDiv.appendChild(imgPartTwo);
        document.body.appendChild(creatDiv);
    } else {
        let oldImg = document.querySelector(".outputStory img");
        let oldLabel = document.querySelector(".outputStory label");

        if(imgTwoChecked.style.border == "2px inset rgb(7, 220, 227)") {
            costPerSqFt = twoStoryCost * sqFootage;
            oldImg.parentNode.replaceChild(imgPartTwo, oldImg);
            oldLabel.parentNode.replaceChild(labelElementStoryTwo, oldLabel);
        } else if (imgOneChecked.style.border == "2px inset rgb(7, 220, 227)") {
            costPerSqFt = oneStoryCost * sqFootage;
            oldImg.parentNode.replaceChild(imgPartOne, oldImg);
            oldLabel.parentNode.replaceChild(labelElementStoryOne, oldLabel);
        }
    }

    // declaring color image variables
    let blueImgChecked = document.querySelector("#blueFab");
    let greyImgChecked = document.querySelector("#greyFab");
    let greenImgChecked = document.querySelector("#greenFab");
    let redImgChecked = document.querySelector("#redFab");
    let yellowImgChecked = document.querySelector("#yellowFab");
    let lightBlueImgChecked = document.querySelector("#lightblueFab");
    let whiteImgChecked = document.querySelector("#whiteFab");
    let blackImgChecked = document.querySelector("#blackFab");


    // creating <div class="outpucolor"><labe/><img></label></div> to display the selected color
    let createColor = document.querySelector(".outputColor");
    // creating <label></label>
    let colorlabelElement = document.createElement("label")
    colorlabelElement.style = "position: absolute;"
    colorlabelElement.textContent = "Color: ";

    // creating image for color
    let imgBlue = document.createElement("img");
    imgBlue.id ="myBlue";
    imgBlue.src = "images/blue.png";
    imgBlue.style = "width: 50px; height: 80px; margin-left: 10em;"

    let imgGrey = document.createElement("img");
    imgGrey.id = "myGrey";
    imgGrey.src = "images/grey.png";
    imgGrey.style = "width: 50px; height: 80px; margin-left: 10em;"

    let imgGreen = document.createElement("img");
    imgGreen.id = "myGreen";
    imgGreen.src = "images/green.png";
    imgGreen.style = "width: 50px; height: 80px; margin-left: 10em;"

    let imgRed = document.createElement("img");
    imgRed.id = "myRed";
    imgRed.src = "images/red.png";
    imgRed.style = "width: 50px; height: 80px; margin-left: 10em;"

    let imgYellow = document.createElement("img");
    imgYellow.id = "myYellow";
    imgYellow.src = "images/yellow.png";
    imgYellow.style = "width: 50px; height: 80px; margin-left: 10em;"

    let imgLightBlue = document.createElement("img");
    imgLightBlue.id = "myLightBlue";
    imgLightBlue.src = "images/lightblue.png";
    imgLightBlue.style = "width: 50px; height: 80px; margin-left: 10em;"

    let imgWhite = document.createElement("img");
    imgWhite.id = "myWhite";
    imgWhite.src = "images/whitepng.png";
    imgWhite.style = "width: 50px; height: 80px; margin-left: 10em;"

    let imgBlack = document.createElement("img");
    imgBlack.id = "myBlack";
    imgBlack.src = "images/black.png";
    imgBlack.style = "width: 50px; height: 80px; margin-left: 10em;"

    // check which color image got selected using Style.border
    if(blueImgChecked.style.border == "2px inset rgb(6, 3, 156)" && !createColor ) {
        createColor = document.createElement("div");
        createColor.classList.add("outputColor");
        createColor.appendChild(colorlabelElement);
        createColor.appendChild(imgBlue);
        document.body.appendChild(createColor);
    } else if(greyImgChecked.style.border == "2px inset rgb(6, 3, 156)" && !createColor) {
        createColor = document.createElement("div");
        createColor.classList.add("outputColor");
        createColor.appendChild(colorlabelElement);
        createColor.appendChild(imgGrey);
        document.body.appendChild(createColor);
    } else if(greenImgChecked.style.border == "2px inset rgb(6, 3, 156)" && !createColor) {
        createColor = document.createElement("div");
        createColor.classList.add("outputColor");
        createColor.appendChild(colorlabelElement);
        createColor.appendChild(imgGreen);
        document.body.appendChild(createColor);
    } else if(redImgChecked.style.border == "2px inset rgb(6, 3, 156)" && !createColor) {
        createColor = document.createElement("div");
        createColor.classList.add("outputColor");
        createColor.appendChild(colorlabelElement);
        createColor.appendChild(imgRed);
        document.body.appendChild(createColor);
    } else if(yellowImgChecked.style.border == "2px inset rgb(6, 3, 156)" && !createColor) {
        createColor = document.createElement("div");
        createColor.classList.add("outputColor");
        createColor.appendChild(colorlabelElement);
        createColor.appendChild(imgYellow);
        document.body.appendChild(createColor);
    } else if(lightBlueImgChecked.style.border == "2px inset rgb(6, 3, 156)" && !createColor) {
        createColor = document.createElement("div");
        createColor.classList.add("outputColor");
        createColor.appendChild(colorlabelElement);
        createColor.appendChild(imgLightBlue);
        document.body.appendChild(createColor);
    } else if(whiteImgChecked.style.border == "2px inset rgb(6, 3, 156)" && !createColor) {
        createColor = document.createElement("div");
        createColor.classList.add("outputColor");
        createColor.appendChild(colorlabelElement);
        createColor.appendChild(imgWhite);
        document.body.appendChild(createColor);
    } else if(blackImgChecked.style.border == "2px inset rgb(6, 3, 156)" && !createColor) {
        createColor = document.createElement("div");
        createColor.classList.add("outputColor");
        createColor.appendChild(colorlabelElement);
        createColor.appendChild(imgBlack);
        document.body.appendChild(createColor);
    } else {
        let oldImg = document.querySelector(".outputColor img");

        //check the existing image and replace it with the selected images
        if(blueImgChecked.style.border == "2px inset rgb(6, 3, 156)"){
            oldImg.parentNode.replaceChild(imgBlue, oldImg);
        } else if(greenImgChecked.style.border == "2px inset rgb(6, 3, 156)") {
            oldImg.parentNode.replaceChild(imgGreen, oldImg);
        } else if(redImgChecked.style.border == "2px inset rgb(6, 3, 156)") {
            oldImg.parentNode.replaceChild(imgRed, oldImg);
        } else if (greyImgChecked.style.border == "2px inset rgb(6, 3, 156)"){
            oldImg.parentNode.replaceChild(imgGrey, oldImg);
        } else if (yellowImgChecked.style.border == "2px inset rgb(6, 3, 156)") {
            oldImg.parentNode.replaceChild(imgYellow, oldImg);
        } else if (lightBlueImgChecked.style.border == "2px inset rgb(6, 3, 156)") {
            oldImg.parentNode.replaceChild(imgLightBlue, oldImg);
        } else if (whiteImgChecked.style.border == "2px inset rgb(6, 3, 156)") {
            oldImg.parentNode.replaceChild(imgWhite, oldImg);
        } else if (blackImgChecked.style.border == "2px inset rgb(6, 3, 156)") {
            oldImg.parentNode.replaceChild(imgBlack, oldImg);
        }
    }

    // declaring exterior Material variables
    let vinylChecked = document.querySelector("#vinyl");
    let woodChecked = document.querySelector("#wood");
    let stuccoChecked = document.querySelector("#stucco");
    let bricksChecked = document.querySelector("#bricks");
    let stoneChecked = document.querySelector("#stone");

    // creating <div class="outputMaterial"><labe/><img></label></div> to display the selected material
    let createMaterials = document.querySelector(".outputMaterial");
    // creating <label></label>
    let labelmaterial = document.createElement("label")
    labelmaterial.style = "position: absolute;"
    labelmaterial.textContent = "Exterior Material: ";

    // creating image for Exterior Material
    let winylImg = document.createElement("img");
    winylImg.src = "images/vinyl.jpg";
    winylImg.style = "width: 80px; height: 100px; margin-left: 10em;"

    let woodImg = document.createElement("img");
    woodImg.src = "images/wood.jpg";
    woodImg.style = "width: 80px; height: 100px; margin-left: 10em;"

    let stuccoImg = document.createElement("img");
    stuccoImg.src = "images/stucco.jpg";
    stuccoImg.style = "width: 80px; height: 100px; margin-left: 10em;"

    let brickImg = document.createElement("img");
    brickImg.src = "images/bricks.png";
    brickImg.style = "width: 80px; height: 100px; margin-left: 10em;"

    let stoneImg = document.createElement("img");
    stoneImg.src = "images/stone.jpg";
    stoneImg.style = "width: 80px; height: 100px; margin-left: 10em;"

    // check which Exterior material image got selected using Style.border
    if(vinylChecked.style.border == "2px inset rgb(219, 4, 201)" && !createMaterials ) {
        createMaterials = document.createElement("div");
        createMaterials.classList.add("outputMaterial");
        createMaterials.appendChild(labelmaterial);
        createMaterials.appendChild(winylImg);
        document.body.appendChild(createMaterials);
        document.body.appendChild(br);
    } else if(woodChecked.style.border == "2px inset rgb(219, 4, 201)" && !createMaterials) {
        costPerSqFt += 5000 + (10 * sqFootage);
        console.log(costPerSqFt);
        createMaterials = document.createElement("div");
        createMaterials.classList.add("outputMaterial");
        createMaterials.appendChild(labelmaterial);
        createMaterials.appendChild(woodImg);
        document.body.appendChild(createMaterials);
        document.body.appendChild(br);
    } else if(stuccoChecked.style.border == "2px inset rgb(219, 4, 201)" && !createMaterials) {
        costPerSqFt += 6000;
        console.log(costPerSqFt);
        createMaterials = document.createElement("div");
        createMaterials.classList.add("outputMaterial");
        createMaterials.appendChild(labelmaterial);
        createMaterials.appendChild(stuccoImg);
        document.body.appendChild(createMaterials);
        document.body.appendChild(br);
    } else if(bricksChecked.style.border == "2px inset rgb(219, 4, 201)" && !createMaterials) {
        costPerSqFt += 8000 + (10 * sqFootage);
        console.log(costPerSqFt);
        createMaterials = document.createElement("div");
        createMaterials.classList.add("outputMaterial");
        createMaterials.appendChild(labelmaterial);
        createMaterials.appendChild(brickImg);
        document.body.appendChild(createMaterials);
        document.body.appendChild(br);
    } else if(stoneChecked.style.border == "2px inset rgb(219, 4, 201)"&& !createMaterials) {
        costPerSqFt += 16000;
        console.log(costPerSqFt);
        createMaterials = document.createElement("div");
        createMaterials.classList.add("outputMaterial");
        createMaterials.appendChild(labelmaterial);
        createMaterials.appendChild(stoneImg);
        document.body.appendChild(createMaterials);
        document.body.appendChild(br);
    } else {
        let oldImg = document.querySelector(".outputMaterial img");
        //check the existing image and replace it with the selected images
        if(vinylChecked.style.border == "2px inset rgb(219, 4, 201)"){
          oldImg.parentNode.replaceChild(winylImg, oldImg);
        } else if(woodChecked.style.border == "2px inset rgb(219, 4, 201)") {
            costPerSqFt += 5000 + (10 * sqFootage);
            console.log(costPerSqFt);
            oldImg.parentNode.replaceChild(woodImg, oldImg);
        } else if(stuccoChecked.style.border == "2px inset rgb(219, 4, 201)") {
            costPerSqFt += 6000;
            console.log(costPerSqFt);
          oldImg.parentNode.replaceChild(stuccoImg, oldImg);
        } else if (bricksChecked.style.border == "2px inset rgb(219, 4, 201)") {
            costPerSqFt += 8000 + (10 * sqFootage);
            console.log(costPerSqFt);
          oldImg.parentNode.replaceChild(brickImg, oldImg);
          costPerSqFt += 16000;
          console.log(costPerSqFt);
        } else if (stoneChecked.style.border == "2px inset rgb(219, 4, 201)") {
          oldImg.parentNode.replaceChild(stoneImg, oldImg);
        }
    }

    // declare variables to display square footage
    // creating <div class="footage"><h3><img></h3><span></span></div>
    let divFootage = document.querySelector(".footage");
    let labelSft = document.createElement("label");
    let sqftH3 = document.createElement("h3");
    sqftH3.style = "margin-left: 10em;"
    sqftH3.id = "sqFootageh3";
    labelSft.textContent = "Square Footage: ";


    if(!divFootage) {
        divFootage = document.createElement("div");
        divFootage.classList.add("footage");
        divFootage.appendChild(labelSft);
        divFootage.appendChild(sqftH3);
        document.body.appendChild(divFootage);
    } else {
      let oldDivFootage = document.querySelector("#sqFootageh3");
      console.log(oldDivFootage);
      oldDivFootage.parentNode.replaceChild(sqftH3, oldDivFootage)
    }
    sqftH3.textContent = `${sqFootage} sq ft`;

    // declaring variable to display Number of garages
    // creating <div class="output"><label><img></label></div>
    let valueOfVehicle ="";
    let divGarage = document.querySelector(".outputGarage");
    let labTwo = document.createElement("label");
    let mySpanValue = document.createElement("h3");
    mySpanValue.style = "margin-left: 10em;"
    labTwo.textContent = "Garage(# of Vehicles):";


    if(document.querySelector("#v1").checked && !divGarage) {
        valueOfVehicle = "1";
        costPerSqFt += 15000
        console.log(costPerSqFt);
        divGarage = document.createElement("div");
        divGarage.classList.add("outputGarage");
        divGarage.appendChild(labTwo);
        divGarage.appendChild(mySpanValue);
        document.body.appendChild(divGarage);

    } else if(document.querySelector("#v2").checked && !divGarage) {
        valueOfVehicle = "2";
        costPerSqFt += 15000 * 2;
        console.log(costPerSqFt);
        divGarage = document.createElement("div");
        divGarage.classList.add("outputGarage");
        divGarage.appendChild(labTwo);
        divGarage.appendChild(mySpanValue);
        document.body.appendChild(divGarage);

    } else if(document.querySelector("#v3").checked && !divGarage) {
        valueOfVehicle = "3";
        costPerSqFt += 15000 * 3;
        console.log(costPerSqFt);
        divGarage = document.createElement("div");
        divGarage.classList.add("outputGarage");
        divGarage.appendChild(labTwo);
        divGarage.appendChild(mySpanValue);
        document.body.appendChild(divGarage);
    }  else {

        let oldDivGarage = document.querySelector(".outputGarage h3")
        let newSpan = document.createElement("h3");
        newSpan.textContent = "1"
        newSpan.style = "margin-left: 10em;"
        let newSpanTwo = document.createElement("h3");
        newSpanTwo.textContent = "2"
        newSpanTwo.style = "margin-left: 10em;"
        let newSpanThree = document.createElement("h3");
        newSpanThree.textContent = "3"
        newSpanThree.style = "margin-left: 10em;"

        if(document.querySelector("#v1").checked) {
          oldDivGarage.parentNode.replaceChild(newSpan, oldDivGarage);
            costPerSqFt += 15000;
            console.log(costPerSqFt);
        } else if(document.querySelector("#v2").checked) {
            costPerSqFt += 15000 * 2;
            console.log(costPerSqFt);
          oldDivGarage.parentNode.replaceChild(newSpanTwo, oldDivGarage);
        }else if (document.querySelector("#v3").checked) {
            costPerSqFt += 15000 * 3;
            console.log(costPerSqFt);
            oldDivGarage.parentNode.replaceChild(newSpanThree, oldDivGarage);
        }
      }

      // display the number of vehicles
      mySpanValue.textContent = `${valueOfVehicle}`;

    // declare variable in order to get the estimate
    // creating <div class="output"><label><img></label></div>
    let divEstimate = document.querySelector(".displayEstimate");
    let estimateLabel = document.createElement("label");
    let estimateH2 = document.createElement("h3");
    estimateLabel.textContent = "Estimate Cost: ";
    estimateH2.id = "estimateOut";
    estimateH2.style = "margin-left: 10em;"

    if(!divEstimate) {
        divEstimate = document.createElement("div");
        divEstimate.classList.add("displayEstimate");
        divEstimate.appendChild(estimateLabel);
        divEstimate.appendChild(estimateH2);
        document.body.appendChild(divEstimate);
    } else {
      let oldEstimateh2 = document.querySelector("#estimateOut");
      console.log(oldEstimateh2);
      oldEstimateh2.parentNode.replaceChild(estimateH2, oldEstimateh2);
      console.log(estimateH2);
    }
    estimateH2.textContent = `$${costPerSqFt}`;
}

const addBorderOne = imgElement => {
        let listImg = document.querySelectorAll(".checkbox");
            for(let i = 0; i < listImg.length; i++) {
                listImg[i].style.border = "none";
            }
            imgElement.style.border = "2px inset #07dce3";
}

const addBorderTwo = imgElement => {
        let listImg = document.querySelectorAll(".imgSize");
            for(let i = 0; i < listImg.length; i++) {
                listImg[i].style.border = "none";
            }
            imgElement.style.border = "2px inset #06039c";
}

const addBorderThree = imgElement => {
        let listImg = document.querySelectorAll(".ExteriorMaterial");
            for(let i = 0; i < listImg.length; i++) {
                listImg[i].style.border = "none";
            }
            imgElement.style.border = "2px inset #db04c9";
}

window.addEventListener("load", init);
