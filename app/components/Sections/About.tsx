const classProps = 'font-bold text-xl md:text-3xl text-[#127357]'

export const About = () => {
  return (
    <section className="h-[650px] md:h-[400px] lg:h-[500px] flex items-center border">
      <div className="md:max-w-[750px] lg:max-w-[1000px] lg:max-h-[350px] w-[90%] h-[85%] mx-auto flex px-6 py-3 md:py-0 flex-col lg:flex-row justify-center gap-5 lg:justify-normal text-center md:text-left">
        <div className="self-start md:max-w-[500px] lg:w-[590px]">
          <blockquote className="md:text-xl font-light">
            Apasionado por el{' '}
            <span className={classProps}>código de calidad</span> y{' '}
            <span className={classProps}>escalable</span>. Creando aplicaciones
            utiles que dan{' '}
            <span className={classProps}>solución a una necesidad</span>.
          </blockquote>
        </div>

        <div className="self-center w-48 h-1 md:w-[5px] md:h-full lg:w-[6px] lg:h-[300px] bg-[#127357] md:rotate-90" />

        <div className="self-end lg:w-[590px] md:w-[500px]">
          <blockquote className="text-lg">
            <span className="font-bold md:text-xl text-[#127357]">2 años</span>{' '}
            desde que toqué mi primera linea de código, mas sin embargo he
            aprendido muchísimo. Siempre estoy preparado para{' '}
            <span className="font-bold text-[#127357] text-xl">
              nuevos retos 
            </span>
            y
            <span className="font-bold text-[#127357] md:text-xl">
               oportunidades
            </span>
            ; Ya que día tras día busco mejorar para dar lo mejor de mí en cada
            proyecto en el que ayudo a crear.
          </blockquote>
        </div>
      </div>
    </section>
  )
}
