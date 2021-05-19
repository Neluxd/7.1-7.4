
document.addEventListener("DOMContentLoaded", () => {
    let i = 1;
    setInterval(() => {
        const newLi = document.createElement("li");
        newLi.innerHTML = "Element ${i}";
        i++;
        document.body.appendChild(newLi);
    }, 2000);
});