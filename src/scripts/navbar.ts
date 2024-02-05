export const fixedNavbar = () => {
  window.scrollTo(0, 0); // Asegura que la página comience en el top al cargar

  const nav = document.getElementById("navbar");
  
  if (!nav) return; // Si no se encuentra la barra, no ejecuta el código

  const navOffset = nav.offsetTop;

  const handleScroll = () => {
    if (window.scrollY >= navOffset) {
      nav!.classList.add("fixed-nav");
    } else {
      nav!.classList.remove("fixed-nav");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Aplica la lógica de desplazamiento inmediatamente al cargar
}