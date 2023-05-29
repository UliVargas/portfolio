import {
  SiTypescript,
  SiRemix,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiVisualstudiocode,
  SiExpress,
  SiSequelize,
  SiPrisma,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiMui,
  SiAntdesign,
  SiStyledcomponents
} from 'react-icons/si'
import type { ElementType } from 'react'

interface Technologies {
  description: string
  title: string
  icon?: ElementType
}

export const SOCIAL_GITHUB = `https://github.com/UliVargas`
export const SOCIAL_LINKEDIN = `https://www.linkedin.com/in/ulisesvaf`

export const technologies: Technologies[] = [
  {
    title: 'default',
    description:
      'Esta es una lista de herramientas y tecnologías que utilizo para darle vida a los productos.'
  },
  {
    title: 'TypeScript',
    description:
      'TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.',
    icon: SiTypescript
  },
  {
    title: 'Remix',
    description:
      'Remix es un framework full stack que nos permite focalizarnos en las interfaces de usuario, y seguir los estándares web para crear experiencias de usuario rápidas y resilientes.',
    icon: SiRemix
  },
  {
    title: 'React',
    description:
      'React es una biblioteca de JavaScript front-end gratuita y de código abierto para crear interfaces de usuario basadas en componentes de interfaz de usuario. Es mantenido por Meta y una comunidad de desarrolladores individuales y empresas.',
    icon: SiReact
  },
  {
    title: 'NodeJS',
    description:
      'Node.js es un entorno de tiempo de ejecución JavaScript back-end, multiplataforma y de código abierto que se ejecuta en el motor V8 y ejecuta código JavaScript fuera de un navegador web.',
    icon: SiNodedotjs
  },
  {
    title: 'TailwindCSS',
    description:
      'TailwindCSS es un marco como ningún otro. En lugar de limitarlo a un diseño de escenario, le brinda las herramientas y la estandarización para construir exactamente lo que desea.',
    icon: SiTailwindcss
  },
  {
    title: 'MaterialUI',
    description:
      'Material UI es una biblioteca de componentes de interfaz de usuario para React, diseñada para ayudar a los desarrolladores a construir aplicaciones web modernas, siguiendo los principios de Material Design, el sistema de diseño creado por Google.',
    icon: SiMui
  },
  {
    title: 'Styled  Components',
    description:
      'Styled Components es una biblioteca de javascript frecuentemente usada en React con la que puedes crear componentes de estilización personalizados, te permite escribir código CSS dentro de una función Javascript, en lugar de escribir CSS en un archivo separado.',
    icon: SiStyledcomponents
  },
  {
    title: 'JavaScript',
    description:
      'JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc.',
    icon: SiJavascript
  },
  {
    title: 'NextJS',
    description:
      'NextJS es un framework JavaScript ligero y de código abierto creado sobre React, que permite desarrollar aplicaciones y sitios web muy rápidos y fáciles de usar.',
    icon: SiNextdotjs
  },
  {
    title: 'VSCode',
    description:
      'Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.',
    icon: SiVisualstudiocode
  },
  {
    title: 'ExpressJS',
    description:
      'Express.js o simplemente Express es un entorno de trabajo para aplicaciones web para el programario Node.js, de código abierto y con licencia MIT. Se utiliza para desarrollar aplicaciones web y APIs.',
    icon: SiExpress
  },
  {
    title: 'Sequelize',
    description:
      'Sequelize es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.',
    icon: SiSequelize
  },
  {
    title: 'Prisma',
    description:
      'Prisma es un kit de herramientas (toolkit) de base de datos de código abierto. Reemplaza los ORM tradicionales y facilita el acceso a la base de datos con un generador de consultas o query builder automáticamente generado y type-safe que se adapta a nuestro esquema de base de datos.',
    icon: SiPrisma
  },
  {
    title: 'Redux',
    description:
      'Redux es una librería JavaScript de código abierto para el manejo del estado de las aplicaciones. Es comúnmente usada con otras librerías como React o Angular para la construcción de Interfaces de Usuario.',
    icon: SiRedux
  },
  {
    title: 'HTML5',
    description:
      'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.',
    icon: SiHtml5
  },
  {
    title: 'CSS3',
    description:
      'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.​',
    icon: SiCss3
  }
]
