const Image1 = document.getElementById("img-1");
const Image2 = document.getElementById("img-2");
const Image3 = document.getElementById("img-3");
const Image4 = document.getElementById("img-4");

const subject1 = document.getElementById("subject-1");
const subject2 = document.getElementById("subject-2");
const subject3 = document.getElementById("subject-3");
const subject4 = document.getElementById("subject-4");


const animate = (subject, image) => {
    image.addEventListener("mouseenter", () => {
        subject.classList.remove("d-none")
        subject.style.display = "block";
    });

    image.addEventListener("mouseleave", () => {
        subject.style.display = "none";
    });
};

Image1.addEventListener("mouseenter", () => {
    animate(subject1, Image1);
});
Image3.addEventListener("mouseenter", () => {
    animate(subject3, Image3);
});
Image4.addEventListener("mouseenter", () => {
    animate(subject4, Image4);
});

Image2.addEventListener("mouseenter", () => {
    animate(subject2, Image2);
});
