
// copy card information 

function copyCardInformationById(id){



    return card.innerText
}

// setting event listener and button copy function

function copyBtnSetup(buttonId,infoId){
    
    document.getElementById(buttonId).setEventListener('click', () => {

        const card = document.getElementById(infoId)

        navigator.clipboard.writeText(card.innerText)

    })

}