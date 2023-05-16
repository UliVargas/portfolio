const classProps = "font-bold text-3xl text-[#127357]";

export const About = () => {
  return (
    <section className="h-[500px] flex items-center border">
      <div className="w-[1200px] h-[300px] mx-auto flex px-6">

        <div className="self-start w-[590px]">
          <blockquote className="text-xl font-light">
            Apasionado por el{" "}
            <span className={classProps}>código de calidad</span> y{" "}
            <span className={classProps}>escalable</span>. Creando aplicaciones
            utiles que dan{" "}
            <span className={classProps}>solución a una necesidad</span>.
          </blockquote>
        </div>
        
        <div className="self-center w-[6px] h-[500px] bg-[#127357] rotate-90" />
        
        <div className="self-end w-[590px]">
          <blockquote className="text-lg">
            <span className="font-bold text-xl text-[#127357]">2 años</span>{" "}
            desde que toqué mi primera linea de código, mas sin embargo he
            aprendido muchísimo. Siempre estoy preparado para{" "}
            <span className="font-bold text-[#127357] text-xl">
              nuevos retos
            </span>
            y
            <span className="font-bold text-[#127357] text-xl">
              oportunidades
            </span>
            ; Ya que día tras día busco mejorar para dar lo mejor de mí en cada
            proyecto en el que ayudo a crear.
          </blockquote>
        </div>
      
      </div>
    </section>
  );
};
