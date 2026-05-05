const reviews = [
    {
        id: 1,
        name: "Arjun Mehta",
        job: "Software Engineer",
        img: "assets/ID-1-image.jpg",
        text: "This website is very easy to use and has a clean design. I found everything I was looking for without any issues. Highly recommended!"
    },
    {
        id: 2,
        name: "Sofia Rossi",
        job: "Doctor",
        img: "assets/ID-2-image.jpg",
        text: "The support team was incredibly helpful and resolved my issue quickly. The interface is intuitive and makes complex tasks simple."
    },
    {
        id: 3,
        name: "Liam O'Brien",
        job: "Teacher",
        img: "assets/ID-3-image.jpg",
        text: "Great experience overall. The layout is intuitive and the features work as expected. Will definitely visit again."
    },
    {
        id: 4,
        name: "Yuki Tanaka",
        job: "Graphic Designer",
        img: "assets/ID-4-image.jpg",
        text: "Absolutely love the visual design of this platform. Everything is beautifully crafted and the user experience is top-notch. A real pleasure to use!"
    },
    {
        id: 5,
        name: "Carlos Rivera",
        job: "Marketing Manager",
        img: "assets/ID-5-image.jpg",
        text: "This tool has transformed the way our team works. The features are powerful yet easy to understand. Our productivity has improved significantly."
    },
    {
        id: 6,
        name: "Amara Osei",
        job: "Nurse",
        img: "assets/ID-6-image.jpg",
        text: "I was impressed by how quickly I could get started. The onboarding process is smooth and the help documentation is very thorough and clear."
    },
    {
        id: 7,
        name: "Emma Müller",
        job: "Entrepreneur",
        img: "assets/ID-7-image.jpg",
        text: "An excellent platform that delivers exactly what it promises. I've tried many similar services and this one stands out for its reliability and speed."
    },
    {
        id: 8,
        name: "Lucas Dubois",
        job: "Accountant",
        img: "assets/ID-8-image.jpg",
        text: "The dashboard is clean and well-organized. I can manage all my tasks in one place without any confusion. Saved me a lot of time every day."
    },
    {
        id: 9,
        name: "Ji-woo Kim",
        job: "Architect",
        img: "assets/ID-9-image.jpg",
        text: "Impressive attention to detail throughout the whole experience. From navigation to performance, everything feels polished and professionally built."
    },
    {
        id: 10,
        name: "Olivia Bennett",
        job: "Student",
        img: "assets/ID-10-image.jpg",
        text: "As a student on a budget, I appreciate how accessible and affordable this is. It has all the features I need and the learning curve is minimal."
    },
];

const profileImg = document.getElementById("profile-pic");
const fullName = document.getElementsByClassName("reviewer-name");
const job = document.getElementsByClassName("reviewer-role");
const text = document.getElementsByClassName("review-text");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const surpriseBtn = document.getElementsByClassName("surprise-btn");

nextBtn.addEventListener('click', changeTextPositive)
prevBtn.addEventListener('click', changeTextNegative)
surpriseBtn[0].addEventListener("click", surprise);

let currentPerson = 0;

function changeTextPositive() {
    currentPerson++;

    if (currentPerson >= reviews.length) {
        currentPerson = 0;
    }

    showPerson();
}

function changeTextNegative() {
    currentPerson--;

    if (currentPerson < 0) {
        currentPerson = reviews.length - 1;
    }

    showPerson();
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        changeTextPositive();
    } else if (e.key === "ArrowLeft") {
        changeTextNegative();
    }
});

function surprise() {
    currentPerson = Math.round(Math.random() * reviews.length);
    showPerson();
}

function showPerson() {
    fullName[0].textContent = reviews[currentPerson].name;
    job[0].textContent = reviews[currentPerson].job;
    text[0].textContent = reviews[currentPerson].text;
    profileImg.src = reviews[currentPerson].img;

    if (currentPerson == 3 || currentPerson == 4) {
        profileImg.style.height = "230px";
    } else if (currentPerson == 0) {
        profileImg.style.height = "320px";
        profileImg.style.top = "0px";
    } else if (currentPerson == 8) {
        profileImg.style.height = "430px";
        profileImg.style.top = "90px";
    } else if (currentPerson == 9) {
        profileImg.style.height = "260px";
        profileImg.style.top = "40px";
    } else {
        profileImg.style.height = "180px";
        profileImg.style.top = "0px";
    }
}