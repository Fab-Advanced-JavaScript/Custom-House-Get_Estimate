
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

        if(imgPartOne && imgTwoChecked.style.border == "2px inset rgb(7, 220, 227)") {
            console.log(imgTwoChecked);
            console.log(imgPartOne);
            oldImg.parentNode.replaceChild(imgPartTwo, oldImg);
            oldLabel.parentNode.replaceChild(labelElementStoryTwo, oldLabel);
            console.log(imgPartTwo);
        } else if (imgPartTwo && imgOneChecked.style.border == "2px inset rgb(7, 220, 227)") {
            console.log(imgOneChecked);
            console.log(imgPartTwo);
            oldImg.parentNode.replaceChild(imgPartOne, oldImg);
            oldLabel.parentNode.replaceChild(labelElementStoryOne, oldLabel);
            console.log(imgPartOne);
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
        let oldBlue = document.querySelector("#myBlue");
        let oldGrey = document.querySelector("#myGrey");
        let oldGreen = document.querySelector("#myGreen");
        let oldRed = document.querySelector("#myRed");
        let oldYellow = document.querySelector("#myYellow");
        let oldLightBlue = document.querySelector("#myLightBlue");
        let oldWhite = document.querySelector("#myWhite");
        let oldBlack = document.querySelector("#myBlack");

        //check the existing image and replace it with the selected images
        // if(oldBlue) {
        //     oldBlue.parentNode.replaceChild(imgGrey, oldBlue);
        // } else if(oldGrey) {
        //     oldGrey.parentNode.replaceChild(imgGreen, oldGrey);
        // } else if(oldGreen) {
        //     oldGreen.parentNode.replaceChild(imgBlue, oldGreen);
        // } else if(oldRed) {
        //     oldRed.parentNode.replaceChild(imgBlue, oldRed);
        // } else if(oldYellow) {
        //     oldYellow.parentNode.replaceChild(imgBlue, oldYellow);
        // } else if(oldLightBlue) {
        //     oldLightBlue.parentNode.replaceChild(imgBlue, oldLightBlue);
        // } else if(oldWhite) {
        //     oldWhite.parentNode.replaceChild(imgBlue, oldWhite);
        // } else if(oldBlack) {
        //     oldBlack.parentNode.replaceChild(imgBlue, oldBlack);
        // }

        // }else if(oldGreen) {
        //     oldGreen.parentNode.replaceChild(imgBlue, oldGreen);
        // }else if(oldGreen) {
        //     oldGreen.parentNode.replaceChild(imgBlue, oldGreen);
        // }else if(oldGreen) {
        //     oldGreen.parentNode.replaceChild(imgBlue, oldGreen);
        // }


            // oldBlue.parentNode.replaceChild(imgRed, oldBlue);
            // oldBlue.parentNode.replaceChild(imgYellow, oldBlue);
            // oldBlue.parentNode.replaceChild(imgLightBlue, oldBlue);
            // oldBlue.parentNode.replaceChild(imgWhite, oldBlue);
            // oldBlue.parentNode.replaceChild(imgBlack, oldBlue);

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
        costPerSqFt = 6000;
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
    }

    // declare variables to display square footage
    // creating <div class="footage"><h3><img></h3><span></span></div>
    let divFootage = document.querySelector(".footage");
    let labOne = document.createElement("label");
    let hOne = document.createElement("h3");
    hOne.style = "margin-left: 10em;"
    labOne.textContent = "Square Footage: ";
    hOne.textContent = `${sqFootage}`;

    if(!divFootage) {
        divFootage = document.createElement("div");
        divFootage.classList.add("footage");
        divFootage.appendChild(labOne);
        divFootage.appendChild(hOne);
        document.body.appendChild(divFootage);
    }

    // declaring variable to display Number of garages
    // creating <div class="output"><label><img></label></div>
    let valueOfVehicle ="";
    let divGarage = document.querySelector(".outputGarage");
    let labTwo = document.createElement("label");
    let hTwo = document.createElement("h3");
    hTwo.style = "margin-left: 10em;"
    labTwo.textContent = "Garage(# of Vehicles):";

    if(document.querySelector("#v1").checked && !divGarage) {
        valueOfVehicle = "1";
        costPerSqFt += 15000
        console.log(costPerSqFt);
        divGarage = document.createElement("div");
        divGarage.classList.add("outputGarage");
        divGarage.appendChild(labTwo);
        divGarage.appendChild(hTwo);
        document.body.appendChild(divGarage);

    } else if(document.querySelector("#v2").checked && !divGarage) {
        valueOfVehicle = "2";
        costPerSqFt += 15000 * 2;
        console.log(costPerSqFt);
        divGarage = document.createElement("div");
        divGarage.classList.add("outputGarage");
        divGarage.appendChild(labTwo);
        divGarage.appendChild(hTwo);
        document.body.appendChild(divGarage);

    } else if(document.querySelector("#v3").checked && !divGarage) {
        valueOfVehicle = "3";
        costPerSqFt += 15000 * 3;
        console.log(costPerSqFt);
        divGarage = document.createElement("div");
        divGarage.classList.add("outputGarage");
        divGarage.appendChild(labTwo);
        divGarage.appendChild(hTwo);
        document.body.appendChild(divGarage);
    }
    // display the number of vehicles
    hTwo.textContent = `${valueOfVehicle}`;


    // declare variable in order to get the estimate
    // creating <div class="output"><label><img></label></div>
    let divEstimate = document.querySelector(".estimateOut");
    let labThree = document.createElement("label");
    let hThree = document.createElement("h3");
    labThree.textContent = "Estimate Cost: ";
    hThree.style = "margin-left: 10em;"
    hThree.textContent = `$${costPerSqFt}`;

    if(!divEstimate) {
        divEstimate = document.createElement("div");
        divEstimate.classList.add("estimateOut");
        divEstimate.appendChild(labThree);
        divEstimate.appendChild(hThree);
        document.body.appendChild(divEstimate);
    }

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
