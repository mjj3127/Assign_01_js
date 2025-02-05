
const noun1Btn = document.querySelector("#noun1");
const verbBtn = document.querySelector("#verb");
const adjectiveBtn = document.querySelector("#adjective");
const noun2Btn = document.querySelector("#noun2");
const settingBtn = document.querySelector("#setting");
const playbackBtn = document.querySelector("#playback");
const randomBtn = document.querySelector("#random");
const resetBtn = document.querySelector("#reset");


const noun1Display = document.querySelector("#choosenNoun1");
const verbDisplay = document.querySelector("#choosenVerb");
const adjectiveDisplay = document.querySelector("#choosenAdjective");
const noun2Display = document.querySelector("#choosenNoun2");
const settingDisplay = document.querySelector("#choosenSetting");
const storyDisplay = document.querySelector("#story");

const studentIdDisplay = document.querySelector("#studentId");
studentIdDisplay.textContent = "Student: Mariya Jemy | ID: 200594567"; 

const nouns1 = ["Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["funny", "scary", "goofy", "slimy", "barking"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];


let noun1Index = 0;
let verbIndex = 0;
let adjectiveIndex = 0;
let noun2Index = 0;
let settingIndex = 0;


function noun1_on_click() {
    noun1Display.textContent = nouns1[noun1Index];
    noun1Index = (noun1Index + 1) % nouns1.length;
}

function verb_on_click() {
    verbDisplay.textContent = verbs[verbIndex];
    verbIndex = (verbIndex + 1) % verbs.length;
}

function adjective_on_click() {
    adjectiveDisplay.textContent = adjectives[adjectiveIndex];
    adjectiveIndex = (adjectiveIndex + 1) % adjectives.length;
}

function noun2_on_click() {
    noun2Display.textContent = nouns2[noun2Index];
    noun2Index = (noun2Index + 1) % nouns2.length;
}

function setting_on_click() {
    settingDisplay.textContent = settings[settingIndex];
    settingIndex = (settingIndex + 1) % settings.length;
}


function playback_on_click() {
    if (
        noun1Display.textContent !== "Choose a noun" &&
        verbDisplay.textContent !== "Choose a verb" &&
        adjectiveDisplay.textContent !== "Choose an adjective" &&
        noun2Display.textContent !== "Choose a second noun" &&
        settingDisplay.textContent !== "Choose a setting"
    ) {
        storyDisplay.textContent = `${noun1Display.textContent} ${verbDisplay.textContent} a ${adjectiveDisplay.textContent} ${noun2Display.textContent} ${settingDisplay.textContent}.`;
    } else {
        storyDisplay.textContent = "Please select all words before playing back!";
    }
}

function random_on_click() {
    const sentence = `${getRandom(nouns1)} ${getRandom(verbs)} a ${getRandom(adjectives)} ${getRandom(nouns2)} ${getRandom(settings)}.`;
    storyDisplay.textContent = sentence;
}


function reset_on_click() {
    noun1Display.textContent = "Choose a noun";
    verbDisplay.textContent = "Choose a verb";
    adjectiveDisplay.textContent = "Choose an adjective";
    noun2Display.textContent = "Choose a second noun";
    settingDisplay.textContent = "Choose a setting";
    storyDisplay.textContent = "Your story will appear here";
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);
playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);
resetBtn.addEventListener("click", reset_on_click);
