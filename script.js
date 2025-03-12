document.getElementById("joinBtn").addEventListener("click", function() {
    document.getElementById("joinForm").classList.toggle("hidden");
});

document.getElementById("submitBtn").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name && email) {
        alert("Дякуємо, " + name + "! Ми зв'яжемося з вами за email: " + email);
        document.getElementById("joinForm").classList.add("hidden");
    } else {
        alert("Будь ласка, заповніть всі поля!");
    }
});
