
// copy card information 


// setting event listener and button copy function

function copyBtnSetup(buttonId,infoId){
    
    document.getElementById(buttonId).addEventListener('click', () => {

        const card = document.getElementById(infoId)

        navigator.clipboard.writeText(card.innerText)

  
        const copyNo = document.getElementById("copy-no");
        let copyNumber = parseInt(copyNo.innerText)
        copyNumber += 1;

        copyNo.innerText = copyNumber;

        window.alert(`copied number ${card.innerText}`)

    })

}

function generateHistory (name, number) {

    let container = document.createElement("div");
    let now = new Date().toLocaleTimeString();
    container.innerHTML = `<div class="flex justify-between rounded-lg my-1.5 bg-gray-100 p-2 w-full">
                    <div>
                        <h1 class="font-bold text-sm">${name}</h1>
                        <p class="text-sm">${number}</p>
                    </div>
                    <div class=" flex items-center justify-center text-sm">
                        ${now}
                    </div> 
                </div>`
    let historyContainer = document.querySelectorAll(".historyContainer");
    for (let history of historyContainer){
        const containerClone = container.cloneNode(true);
        history.appendChild(containerClone)
    }


}

function callBtnSetup(buttonId,numberId,descId){
    
    document.getElementById(buttonId).addEventListener('click', () => {

        const num = document.getElementById(numberId);
        const desc = document.getElementById(descId);

  
        const coinNo = document.getElementById("coin-no");
        let coinNumber = parseInt(coinNo.innerText)
        if (coinNumber >= 20 ) {
            coinNumber -= 20;
            coinNo.innerText = coinNumber;
            generateHistory(desc.innerText,num.innerText)
            window.alert(`Calling Number for ${desc.innerText}: ${num.innerText}`)        
        }
        else{
            window.alert("Not Enough Coins for the call")
        }

    })

}



function heartSetUp (heartClicked, heartUnClicked, heartBorder) {
    
    let clicked = document.getElementById(heartClicked);
    let unClicked = document.getElementById(heartUnClicked);
    let heart = document.getElementById(heartBorder);

    heart.addEventListener('click', () =>{
        let heartCount = document.getElementById("heart-no")
        let number = parseInt(heartCount.innerText)
        if (clicked.style.display === 'none'){
            clicked.style.display = "block"
            number += 1;
            unClicked.style.display = "none"
        } 
        else {
            clicked.style.display = "none"
            number -= 1;
            unClicked.style.display = "block"

        }

        heartCount.innerText = number;
    })
    
}
heartSetUp('clickEmergency','unclickEmergency', "heart-emergency")
heartSetUp('clickpolice','unclickpolice', "heart-police")
heartSetUp('clickfire','unclickfire', "heart-fire")
heartSetUp('clickwomen','unclickwomen', "heart-women")
heartSetUp('clickambulance','unclickambulance', "heart-ambulance")
heartSetUp('clickcorruption','unclickcorruption', "heart-corruption")
heartSetUp('clickelectricity','unclickelectricity', "heart-electricity")
heartSetUp('clickbrac','unclickbrac', "heart-brac")
heartSetUp('clickrailway','unclickrailway', "heart-railway")

copyBtnSetup('emergency-copy','emergency-no');
copyBtnSetup('police-copy','police');
copyBtnSetup('fire-copy','fire');
copyBtnSetup('women-copy','women');
copyBtnSetup('ambulance-copy','ambulance');
copyBtnSetup('corruption-copy','corruption');
copyBtnSetup('electricity-copy','electricity');
copyBtnSetup('brac-copy','brac');
copyBtnSetup('railway-copy','railway');

callBtnSetup('emergency-call','emergency-no','emergency-desc');
callBtnSetup('police-call','police','policeDesc');
callBtnSetup('fire-call','fire','fireDesc');
callBtnSetup('women-call','women','womenDesc');
callBtnSetup('ambulance-call','ambulance','ambulanceDesc');
callBtnSetup('corruption-call','corruption','corruptionDesc');
callBtnSetup('electricity-call','electricity','electricityDesc');
callBtnSetup('brac-call','brac','bracDesc');
callBtnSetup('railway-call','railway','railwayDesc');

let cancelButton = document.querySelectorAll(".clearBtn")

for (let btn of cancelButton) {
    
    btn.addEventListener('click', () => {
        let container = document.querySelectorAll('.historyContainer')
        for (let x of container) {
            console.log(container)
            x.innerHTML = '';
            console.log(container)
        }
    })
}

 