const jobTitles = ["Mahasiswa Informatika"];
    let index = 0;
    const jobTitleElement = document.getElementById("job-title");

    function typeText(text, i) {
      if (i < text.length) {
        jobTitleElement.textContent += text.charAt(i);
        setTimeout(() => typeText(text, i + 1), 100); // Typing speed
      } else {
        setTimeout(() => deleteText(), 1500); // Delay before deleting
      }
    }

    function deleteText() {
      const currentText = jobTitleElement.textContent;
      if (currentText.length > 0) {
        jobTitleElement.textContent = currentText.slice(0, -1);
        setTimeout(() => deleteText(), 100); // Deleting speed
      } else {
        index = (index + 1) % jobTitles.length;
        typeText(jobTitles[index], 0);
      }
    }

    // Start typing effect
    typeText(jobTitles[index], 0);

    const navLinks = document.querySelectorAll('.nav-links a');
  
  // Ambil path dari URL, contoh: /About.html
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    // Cek kalau href sama dengan nama file sekarang
    if(link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const portfolioLink = document.getElementById("load-portofolio");
    const contentDiv = document.getElementById("dynamic-content");
  
    portfolioLink.addEventListener("click", function (e) {
      e.preventDefault();
  
      fetch("Portofolio/Portofolio.html")
        .then((response) => response.text())
        .then((html) => {
          contentDiv.innerHTML = html;
  
          // Scroll otomatis ke bagian portofolio
          contentDiv.scrollIntoView({ behavior: "smooth" });
        })
        .catch((error) => {
          contentDiv.innerHTML = "<p>Gagal memuat portofolio.</p>";
          console.error("Error:", error);
        });
    });
  });

  
  