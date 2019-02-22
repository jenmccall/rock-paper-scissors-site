function rock() {
    var rock = document.getElementById("literal-rock");
    
    if (rock.style.display === "none") {
      rock.style.display = "block";
    } else {
      rock.style.display = "none";
    }
}