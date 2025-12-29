
function baixarCV() {
  const link = document.createElement("a");
  link.href = "../Arquivos/Curriculo Victor_.pdf"; 
  link.download = "Curriculo_VictorHenrique.pdf";
  link.click();
}



const splineBG = document.querySelector(".spline-bg");
const secaoSobre = document.querySelector("#sobre");

let fadeFinalizado = false;


window.addEventListener("load", () => {
  splineBG.classList.add("mostrar");


  setTimeout(() => {
    fadeFinalizado = true;
    splineBG.style.opacity = "1";
  }, 1500); 
});

window.addEventListener("scroll", () => {
  if (!fadeFinalizado) return; // 

  const scrollY = window.scrollY;
  const sobreTop = secaoSobre.offsetTop;
  const windowHeight = window.innerHeight;

  
  if (scrollY + windowHeight > sobreTop + 150) {
    splineBG.style.opacity = "0.7"; 
  } else {
    splineBG.style.opacity = "1";
  }
});






const sections = document.querySelectorAll(".secao");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
