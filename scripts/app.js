// put all the details of each button into an array of objects
const soundButtons = [
    {
        vaule: "Work it",
        bgImg: "../images/work-it.gif",
        audioFile: "../sounds/work_it.wav"

    },
    {
        vaule: "Make it",
        bgImg: "../images/make-it.gif",
        audioFile: "../sounds/make_it.wav"

    },
    {
        vaule: "Do it",
        bgImg: "../images/do-it.gif",
        audioFile: "../sounds/do_it.wav"

    },
    {
        vaule: "Makes Us",
        bgImg: "../images/makes-us.gif",
        audioFile: "../sounds/makes_us.wav"

    },
    {
        vaule: "Harder",
        bgImg: "../images/harder.gif",
        audioFile: "../sounds/harder.wav"

    },
    {
        vaule: "Better",
        bgImg: "../images/better.gif",
        audioFile: "../sounds/better.wav"

    },
    {
        vaule: "Faster",
        bgImg: "../images/faster.gif",
        audioFile: "../sounds/faster.wav"

    },
    {
        vaule: "Stronger",
        bgImg: "../images/stronger.gif",
        audioFile: "../sounds/stronger.wav"

    },
    {
        vaule: "More Than",
        bgImg: "../images/more-than.gif",
        audioFile: "../sounds/more_than.wav"

    },
    {
        vaule: "Hour",
        bgImg: "../images/hour.gif",
        audioFile: "../sounds/hour.wav"

    },
    {
        vaule: "Our",
        bgImg: "../images/our.gif",
        audioFile: "../sounds/our.wav"

    },
    {
        vaule: "Never",
        bgImg: "../images/never.gif",
        audioFile: "../sounds/never.wav"

    },
    {
        vaule: "Ever",
        bgImg: "../images/ever.gif",
        audioFile: "../sounds/ever.wav"

    },
    {
        vaule: "After",
        bgImg: "../images/after.gif",
        audioFile: "../sounds/after.wav"

    },
    {
        vaule: "Work is",
        bgImg: "../images/work-is.gif",
        audioFile: "../sounds/work_is.wav"

    },
    {
        vaule: "Over",
        bgImg: "../images/done-there.gif",
        audioFile: "../sounds/over.wav"

    },
  
]
// cache the Div
const buttonDiv = document.querySelector("#sounds")

soundButtons.forEach((button) =>{
    // creating button
    const soundButton = document.createElement("button")

    // add the class "sound-button"
    soundButton.classList.add("sound-button")

    // adding the textcontent to the button
    soundButton.textContent = button.vaule

    // getting audio element for the button
    const audioElement = new Audio(button.audioFile)
    // getting background image 
    const backgroundImg = button.bgImg

    // adding audio and background inage to the button
    const buttonElements = () => {
        audioElement.volume = .05
        audioElement.play()
        soundButton.setAttribute("style", `background-image: url(${backgroundImg})`)
    }

    // event listner to trigger audio play and background change
    soundButton.addEventListener("mouseover", buttonElements)
    
    // event listner to remove background image 
    soundButton.addEventListener("mouseout", () => {
        soundButton.style.backgroundImage = ""
        // audioElement.pause()
    } )
    // adding button to the sound buttons div so it can be displayed. 
    buttonDiv.appendChild(soundButton)
})


