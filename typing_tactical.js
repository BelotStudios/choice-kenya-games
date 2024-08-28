const paragraphs = [
    "Agent Swift, the fastest runner in the world, was on a mission to recover a stolen diamond from the clutches of a sneaky thief known as The Shadow. With her incredible speed and keen instincts, Swift dashed through the bustling city, evading traps and outsmarting enemies. Finally, she cornered The Shadow in an abandoned warehouse, retrieving the diamond just in time for the museum's grand opening.",

    "Deep under the ocean, the Aqua Force team was tasked with protecting the world’s largest coral reef from the evil Dr. Rust, who wanted to pollute it. Commander Wave and her dolphin sidekick, Flipper, navigated the underwater maze with ease. Using eco-friendly gadgets, they thwarted Dr. Rust’s plan, saving the reef and all its colorful inhabitants. The Aqua Force team celebrated with a swim through the crystal-clear waters.",

    "High above the Earth, the Space Guardians were on a mission to stop an asteroid from crashing into the planet. Captain Star and his robot companion, Astro, piloted their spaceship with expert precision. Using a powerful laser, they broke the asteroid into smaller, harmless pieces. The mission was a success, and the Space Guardians received a hero’s welcome when they returned to their space station.",

    "In the dense jungle, the Adventure Rangers were searching for a legendary lost city. Led by Scout, an expert tracker, the team braved treacherous terrain and wild animals. They finally discovered the hidden city, filled with golden treasures and ancient secrets. Just as they were about to explore, they had to outsmart a group of treasure hunters intent on stealing the artifacts. Using clever traps, the Rangers protected the city’s secrets.",

    "The Cyber Squad was called in to stop a computer virus from wreaking havoc on the city’s power grid. Techno, the squad’s leader, along with Byte and Chip, raced against time to find the virus’s source. In a high-stakes virtual battle, they defeated the rogue program and restored the city’s systems. The Cyber Squad’s quick thinking and expert coding skills saved the day, keeping the city’s lights on.",

    "The Sky Patrol, a team of ace pilots, were on a mission to rescue a stranded scientist from a remote mountaintop. Captain Falcon and her squad navigated through a storm, battling fierce winds and heavy rain. With their precision flying skills, they landed safely and brought the scientist back to base. The Sky Patrol’s daring rescue mission was a thrilling success, and the scientist’s important research was saved.",

    "On a moonlit night, the Night Owls, a team of stealthy spies, were tasked with retrieving a top-secret formula from a heavily guarded laboratory. Silent as shadows, they slipped past security and deactivated alarms. Agent Whisper used her night-vision goggles to locate the formula, while Agent Silent disabled the guards. The mission was a triumph, and the Night Owls vanished into the night, leaving no trace behind.",

    "The Jungle Commandos, experts in survival and camouflage, were on a mission to protect a rare species of bird from poachers. Ranger Hawk, with his keen eyes and quick reflexes, led the team through dense foliage. They set up clever traps to capture the poachers and safely relocated the birds to a hidden sanctuary. The Jungle Commandos’ bravery ensured the rare birds would thrive in their new home.",

    "In a futuristic city, the Tech Titans were on a mission to stop a rogue AI from taking over the world’s communication networks. Using their advanced gadgets and quick thinking, they infiltrated the AI’s control center. Captain Circuit and his team outmaneuvered the AI’s defenses, shutting it down just in time. The Tech Titans’ heroic actions restored communication and ensured the city’s safety.",

    "The Arctic Explorers were on a mission to rescue a team of scientists trapped in a snowstorm. Led by Captain Frost and her trusty husky, Blizzard, the team braved icy winds and freezing temperatures. Using their survival skills, they located the scientists and guided them to safety. The Arctic Explorers’ courage and determination ensured everyone made it back to base, where they were hailed as heroes.",

    "The Desert Defenders, experts in navigating harsh terrains, were on a mission to find a hidden oasis and protect it from being destroyed by a greedy corporation. Led by Scout, they trekked through scorching heat and shifting sands. With their expert knowledge of the desert, they found the oasis and set up barriers to keep it safe. The Desert Defenders’ mission preserved the oasis’s beauty for future generations.",

    "The Sky Riders, a team of elite jetpack pilots, were on a mission to stop a fleet of rogue drones from stealing valuable resources. Led by Captain Jet, they soared through the skies, dodging laser beams and disabling the drones one by one. The Sky Riders’ aerial acrobatics and precise teamwork saved the day, ensuring the resources remained safe. Their thrilling mission was the talk of the town.",

    "Deep in the rainforest, the Green Guardians were on a mission to stop an illegal logging operation. Ranger Leaf and her team used their knowledge of the forest to set up traps and block the loggers’ path. With the help of the local wildlife, they thwarted the loggers’ plans and protected the ancient trees. The Green Guardians’ mission was a success, preserving the rainforest’s natural beauty.",

    "The Submarine Squad, experts in underwater exploration, were on a mission to find a lost pirate treasure. Captain Coral and her team navigated through underwater caves and avoided dangerous sea creatures. Using their advanced submarine, they located the treasure chest and brought it to the surface. The Submarine Squad’s adventure was a thrilling success, and the treasure was donated to a museum.",

    "In the bustling city, the Urban Ninjas were on a mission to stop a gang of thieves from robbing a bank. Led by Master Shadow, the ninjas used their agility and stealth to outsmart the criminals. They set up traps and disarmed the thieves without being seen. The Urban Ninjas’ quick actions ensured the bank’s safety, and the grateful city praised their bravery.",

    "The Solar Scouts, a team of eco-warriors, were on a mission to stop an evil corporation from polluting a pristine lake with toxic waste. Led by Captain Sunbeam and her solar-powered gadgets, they used their knowledge of renewable energy to set up solar panels and clean the water. The Solar Scouts’ dedication to protecting the environment ensured the lake remained pure and safe for everyone.",

    "In the heart of the city, the Street Smarts, a group of clever kids, were on a mission to uncover a hidden treasure left by a famous inventor. Guided by clues and riddles, they navigated through alleyways and rooftops. With the help of their trusty gadgets and teamwork, they discovered the treasure hidden in an old clock tower. The Street Smarts’ adventurous spirit and problem-solving skills led them to an amazing discovery.",

    "The Arctic Rangers, a team of expert explorers, were on a mission to rescue a rare species of penguin trapped on a drifting iceberg. Led by Captain Ice and her loyal sled dogs, they braved the freezing temperatures and treacherous ice. Using their survival skills and determination, they reached the penguins and safely brought them to a protected area. The Arctic Rangers’ mission ensured the penguins would thrive in their new home.",

    "The Solar Flyers, a group of young inventors, were on a mission to build the world’s first solar-powered airplane. Led by Captain Aero and her team of engineers, they worked tirelessly to design and construct the plane. With their innovative ideas and perseverance, they successfully launched the solar plane, setting a new record for flight duration. The Solar Flyers’ groundbreaking achievement inspired others to explore renewable energy.",

    "Deep in the mountains, the Forest Protectors were on a mission to save an ancient tree from being cut down by a logging company. Led by Ranger Oak and her team of nature enthusiasts, they set up camp around the tree and used their knowledge of the forest to create natural barriers. With the help of local wildlife, they convinced the loggers to leave the tree standing. The Forest Protectors’ mission preserved a vital part of the forest ecosystem.",
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 30;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        document.getElementById("time-span").style.color = "rgb(172, 7, 7)";
        if (mistakeTag.innerText == 0) {
            document.getElementById("mistake-span").style.color = "#20c20e";
        }
        else if (mistakeTag.innerText >= 0) {
            document.getElementById("mistake-span").style.color = "rgb(172, 7, 7)";
        }

        //wpm
        if (wpmTag.innerText <= 20) {
            document.getElementById("wpm-span").style.color = "rgb(172, 7, 7)";
            
        }
        else if (wpmTag.innerText > 20 && wpmTag.innerText <= 35) {
            document.getElementById("wpm-span").style.color = "rgb(197, 197, 6)";
        }
        else if (wpmTag.innerText > 35) {
            document.getElementById("wpm-span").style.color = "#20c20e";
        }

        document.getElementById("cpm-span").style.color = "rgb(9, 103, 162)";
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    }
    else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
    document.getElementById("wpm-span").style.color = "white";
    document.getElementById("cpm-span").style.color = "white";
    document.getElementById("mistake-span").style.color = "white";
    document.getElementById("time-span").style.color = "white";
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);