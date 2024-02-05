export const handleClick = (event: any) => {
  // Se ejecuta si se ha hecho clic en un enlace de navegación
  const target = event.target;
  if (target.tagName !== "A") return

  event.preventDefault(); // Evita que el enlace redireccione inmediatamente

  const targetHref = target.getAttribute("href");

  if (targetHref === "/") {
    document.title = "Portafolio - Ulises Vargas";
    window.scrollTo({
      top: 0,
    });
  }

  if (targetHref !== "/") {
    // Si el enlace no es el de inicio, realiza el desplazamiento normal a la sección correspondiente
    const targetSectionId: string = targetHref.substring(1); // Elimina el signo '#' del href
    const targetSection = document.getElementById(targetSectionId);
    
    document.title = `Portafolio - ${targetSectionId
      .charAt(0)
      .toUpperCase()}${targetSectionId.slice(1)}`;

    window.scrollTo({
      top: targetSection!.offsetTop - 80, // Margen del top al contenido
    });
  }
}
