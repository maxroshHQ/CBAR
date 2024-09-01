window.onload = function() {
    // Loader timeout simulation
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        loadProfile();
    }, 2000); // Simulate a 2-second loading time
};

function saveProfile() {
    const name = document.getElementById('nameInput').value;
    const profilePicFile = document.getElementById('profilePicInput').files[0];
     if (name) {
    localStorage.setItem('userName', name);
    }
     if (profilePicFile) {
     const reader = new FileReader();
    reader.onload = function(e) {
    localStorage.setItem('profilePic', e.target.result);
    window.location.href = 'home.html';
    }
    reader.readAsDataURL(profilePicFile);
    } else {
    window.location.href = 'home.html';
    }
    }
    function redirectToPage() {
        window.location.href = "home.html";
    }

    