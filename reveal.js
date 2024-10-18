document.getElementById("revealName").addEventListener("click", function() {
    var name = prompt("Happy Birthday, Ibuk!:");
    if (name) {
        document.getElementById("name").textContent = Ibuk + " 🎉";
        document.getElementById("name").style.display = "block";
        document.getElementById("revealName").style.display = "none";
    }
});
