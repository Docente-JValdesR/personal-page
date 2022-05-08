import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import saludMental from "../assets/habilidad-1.png";
import unido from "../assets/habilidad-2.png";
import analisis from "../assets/habilidad-3.png";
import fotoPerfil from "../assets/foto-perfil.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import corazon from "../assets/habilidad-1.png";
import trabajo from "../assets/habilidad-2.png";
import resultado from "../assets/habilidad-3.png";
import movistar from "../assets/movistar.png";
import facso from "../assets/facso.png";
import ministerio from "../assets/ministerio.jpg";
import sepec from "../assets/sepec.png";
import ucsh from "../assets/ucsh.png";



const print = (e) => {
  const ability = {
    IE: {
      title: "Inteligencia emocional",
      description:
        "Empatía, amabilidad y solidaridad, entre otras. A través del ejercicio docente he logrado desarrollarlas y aplicarlas a mi práctica profesional.",
    },
    TE: {
      title: "Trabajo en equipo",
      description:
        "Comprender que el aporte de todos, es lo que permite el crecimiento colectivo. Por esto me es importante el trabajo en equipo.",
    },
    OR: {
      title: "Orientación a resultados",
      description:
        "Dirijo todas mis acciones al cumplimiento de metas, y objetivos propuesto, ya sean personales como profesionales.",
    },
    VACIO: {
      title: "",
      description: "",
    },
  };
  if (e.IE) {
    let state = ability.IE;
    return state;
  } else if (e.TE) {
    let state = ability.TE;
    return state;
  } else if (e.OR) {
    let state = ability.OR;
    return state;
  } else {
    let state = ability.VACIO;
    return state;
  }
};
const AbilityContent = ({ props }) => {
  const [state, setState] = useState(props);
  useEffect(() => {
    setState(print(props));
  }, [props]);
  return (
    <motion.div 
  
    animate={{ opacity: [0,1] }}
    transition={{ duration: 2 }}
    key={state.title} className="text-start px-4 text-center">
      <h2>{state.title}</h2>
      <p>{state.description}</p>
    </motion.div>
  );
};
const list = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.8,
      duration: 1.5,
    },
  },
  hidden: {
    transition: {
      when: "afterChildren",
    },
  },
};
const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};
const AcademicEducation = (isOpen) => {
  return (
    <motion.div
      className="align-self-center mb-lg-3 text-start px-lg-5 px-3"
      initial="hidden"
      animate={isOpen.props.FAA ? "visible" : "hidden"}
      variants={list}
    >
      <motion.div className="m-0 p-0" variants={item}>
        Licencia en Educación media con mención Matemática e Informática
        Educativa. UCSH
        <img src={ucsh} alt="icono universidad católica silva henríquez" className="img-logo-educacion p-1" />
      </motion.div>
      <motion.div className="m-0 p-0" variants={item}>
        Magíster en Educación con mención en Informática Educativa (en proceso).
        UCHILE
        <img src={facso} alt="icono facultad de ciencias sociales, universidad de chile" className="img-logo-educacion p-1" />
      </motion.div>
    </motion.div>
  );
};
const SelfTaught = (isOpen) => {
  return (
    <motion.div
      className="align-self-center mb-lg-3 text-start px-lg-5 d-flex px-3"
      initial="hidden"
      animate={isOpen.props.FAU ? "visible" : "hidden"}
      variants={list}
    >
      <motion.div className="col-6" variants={item}>
        Personales
        <motion.div className="container col-12">
          <motion.img
            variants={item}
            src={corazon}
            alt="icono inteligencia emocional"
            className="img-logo-curriculum"
          />
          <motion.img
            variants={item}
            src={trabajo}
            alt="icono trabajo en equipo"
            className="img-logo-curriculum"
          />
          <motion.img
            variants={item}
            src={resultado}
            alt="icono orientación a resultados"
            className="img-logo-curriculum"
          />
        </motion.div>
      </motion.div>
      <motion.div className="col-6" variants={item}>
        Tecnologías
        <motion.div className="container col-12">
          <motion.img
            variants={item}
            src={bootstrap}
            alt="icono bootstrap"
            className="img-logo-curriculum"
          />
          <motion.img
            variants={item}
            src={css}
            alt="icono css 3"
            className="img-logo-curriculum"
          />
          <motion.img
            variants={item}
            src={express}
            alt="icono express js"
            className="img-logo-curriculum"
          />
          <motion.img
            variants={item}
            src={html}
            alt="icono html 5"
            className="img-logo-curriculum"
          />
          <motion.img
            variants={item}
            src={javascript}
            alt="icono javascript"
            className="img-logo-curriculum"
          />
          <motion.img
            variants={item}
            src={mongodb}
            alt="icono mongo db"
            className="img-logo-curriculum"
          />
          <motion.img
            variants={item}
            src={nodejs}
            alt="icono node js"
            className="img-logo-curriculum"
          />
          <motion.img
            variants={item}
            src={react}
            alt="icono react js"
            className="img-logo-curriculum"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
const PersonalInformation = (isOpen) => {
  return (
    <motion.div
      className="align-self-center mb-lg-3 text-start px-lg-5 px-3"
      initial="hidden"
      animate={isOpen.props.PI ? "visible" : "hidden"}
      variants={list}
    >
      <motion.div variants={item}>
        Correo Electrónico: profe.josevaldes@gmail.com
      </motion.div>
      <motion.div variants={item}>Contacto : +569 8 596 5954</motion.div>
    </motion.div>
  );
};
const TeachingObjective = (isOpen) => {
  return (
    <motion.div
      className="align-self-center text-dark px-3"
      initial="hidden"
      animate={isOpen.props.OJD ? "visible" : "hidden"}
      variants={list}
    >
      <motion.div className="fs-6 fw-normal" variants={item}>
        Entregar, acorde a las expectativas de mis estudiantes, los
        conocimientos matemáticos necesarios para que puedan desarrollar los
        aprendizajes que esperan. Siempre enmarcado en la escucha activa, la
        proactividad y la perseverancia, busco que mis estudiantes apliquen sus
        aprendizajes a todo ámbito de la vida.
        <br />
        Mi fin principal es aplicar estrategias didácticas digitales para lograr
        aprendizajes significativos en cada estudiante, y generar conciencia en
        el uso de TIC.
      </motion.div>
    </motion.div>
  );
};
const WebDeveloperGoal = (isOpen) => {
  return (
    <motion.div
      className="align-self-center text-dark px-3"
      initial="hidden"
      animate={isOpen.props.ODW ? "visible" : "hidden"}
      variants={list}
    >
      <motion.div className="fs-6 fw-normal" variants={item}>
        Aprender constantemente sobre tecnologías nuevas, y aplicarlas a
        diversos proyectos, demostrando así mi propia capacidad de adaptarme y
        reinventarme como desarrollador.
      </motion.div>
    </motion.div>
  );
};
const WorkExperience = (isOpen) => {
  return (
    <motion.div
      className="align-self-center text-dark px-3"
      initial="hidden"
      animate={isOpen.props.WE ? "visible" : "hidden"}
      variants={list}
    >
      <motion.div variants={item}>
        Colegio Sao Paulo, Estación Central. (2013) - Profesor de Matemática
        desde 7mo Básico a 4to Medio científico-humanista.
      </motion.div>
      <motion.div variants={item}>
        Colegio Libertador San Martin, Conchalí.(2015) - Profesor de Matemática
        desde 7mo Básico a 4to Medio científico-humanista.
      </motion.div>
      <motion.div variants={item}>
        Colegio de Adultos Icel. Santiago. (2020) - Profesor de Matemáticas
        primero y segundo ciclo epja.
      </motion.div>
    </motion.div>
  );
};
const ContinuousTraining = (isOpen) => {
  return (
    <motion.div
      className="align-self-center text-dark px-3"
      initial="hidden"
      animate={isOpen.props.TC ? "visible" : "hidden"}
      variants={list}
    >
      <motion.div variants={item}>
        Diplomado "Aprendizaje colaborativo" - Ministerio de Educación y
        Fundación Sepec (2021).
        <img src={sepec} alt="logo fundación sepec" className="img-logo-educacion p-1" />
        <img src={ministerio} alt="logo ministerio de educación" className="img-logo-educacion p-1" />
      </motion.div>
      <motion.div variants={item}>
        Curso "Programación por Bloques y Aprendizaje Basado en Proyectos como
        estrategia de implementación en el aula" - Plan Nacional Lenguaje
        Digital - Ministerio de Educación y Fundación Telefónica (2019).
        <img src={movistar} alt="logo fundacion telefónica" className="img-logo-telefonica p-1" />
        <img src={ministerio} alt="logo ministerio de educación" className="img-logo-educacion p-1" />
      </motion.div>
    </motion.div>
  );
};
export const AboutMain = () => {
  return (
    <div className="col-lg-8 text-center about-main  img-about-1">
      <Link
      
        to="ability"
       
        smooth={true}
        duration={800}
        className="text-decoration-none text-white "
      >
        <motion.div
          className="icon shadow-lg"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <div className="row g-0">
            <div className="col-lg-4">
              <img
                src={require("../assets/foto-verano.jpg")}
                alt="Foto personal"
                className="img-fluid rounded-start img-about-custom"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body">
                <h1 className="card-title">Acerca de Mí</h1>
                <p className="card-text">
                  Hola, mi nombre es José y soy apasionado por las matemáticas y
                  la programación. Titulado de Pedagogía en Matemáticas e
                  Informática Educativa, he sido profesor por más de 10 años.
                  Siempre crítico de mi trabajo, busco aprender constantemente
                  estrategias y tecnologias que posibiliten cumplir mis
                  objetivos
                </p>
                <p className="d-none d-lg-block">Haz clic en este cuadro para descubrir un poco mas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
export const AboutAbility = ({ props }) => {
  const isLarge = props.props;
  const initialState = { IE: false, TE: false, OR: false, VACIO: false };
  const [abilityState, setAbilityState] = useState(initialState);

  const handleViewAbility = (property, value) => {
    setAbilityState({ ...initialState, [property]: value });
  };
  const item1 = isLarge
    ? {
        visible: {
          opacity: [1, 0.2],
          y: "calc(-30vh)",
          x: "calc(50vw - 70px )",
          scale: [1, 3],
          transition: { default: { duration: 2 } },
        },
        hidden: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: { default: { duration: 2 } },
        },
        exit: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: [3, 1],
          transition: { default: { duration: 2 } },
        },
      }
    : {
        visible: {
          opacity: 0.6,
          y: -200,
          x: 430,
          scale: [1.5, 3],
          transition: { default: { duration: 2 } },
        },
        hidden: {
          opacity: 1,
          y: -200,
          x: 0,
          scale: 1.5,
          transition: { default: { duration: 2 } },
        },
        exit: {
          opacity: 1,
          y: -200,
          x: 0,
          scale: [3, 1.5],
          transition: { default: { duration: 2 } },
        },
      };
  const item2 = isLarge
    ? {
        visible: {
          opacity: [1, 0.2],
          y: "calc(-30vh)",

          scale: [1, 3],
          transition: { default: { duration: 2 } },
        },
        hidden: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { default: { duration: 2 } },
        },
        exit: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: [3, 1],
          transition: { default: { duration: 2 } },
        },
      }
    : {
        visible: {
          opacity: 0.6,
          y: -300,
          x: 430,
          scale: [1.5, 3],
          transition: { default: { duration: 2 } },
        },
        hidden: {
          opacity: 1,
          y: -120,
          x: 0,
          scale: 1.5,
          transition: { default: { duration: 2 } },
        },
        exit: {
          opacity: 1,
          y: -120,
          x: 0,
          scale: [3, 1.5],
          transition: { default: { duration: 2 } },
        },
      };
  const item3 = isLarge
    ? {
        visible: {
          opacity: [1, 0.2],
          y: "calc(-30vh)",
          x: "calc(-50vw + 70px )",
          scale: [1, 3],
          transition: { default: { duration: 2 } },
        },
        hidden: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: { default: { duration: 2 } },
        },
      }
    : {
        visible: {
          opacity: 0.6,
          y: -400,
          x: 430,
          scale: [1.5, 3],
          transition: { default: { duration: 2 } },
        },
        hidden: {
          opacity: 1,
          y: -30,
          x: 0,
          scale: 1.5,
          transition: { default: { duration: 2 } },
        },
        exit: {
          opacity: 1,
          y: -30,
          x: 0,
          scale: [3, 1.5],
          transition: { default: { duration: 2 } },
        },
      };
  return (
    <div className="pt-5 col-lg-6 col-12 img-about-2 d-flex flex-column justify-content-around justify-content-lg-between">
      <motion.div
        className="icon shadow-lg px-4 px-lg-0"
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      >
        <div className="row g-0">
          <div className="col-12">
            <div className="card-body">
              <h1 className="card-title">Habilidades blandas</h1>
              <p className="card-text">
                Se entienden como "el resultado de una combinación de
                habilidades sociales, de comunicación, de forma de ser, de
                acercamiento a los demás, entre otras..."
                <a
                  href="https://educrea.cl/que-son-las-habilidades-blandas-y-como-se-aprenden/"
                  rel="noreferrer"
                  target="_blank"
                  className="ms-2 text-white"
                >
                  Fuente
                </a>
              </p>
              <p>
                Haz clic en los iconos para ver algunas de mis habilidades,
                <Link
                  to="curriculum"
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="ms-2 text-white text-decoration-none fw-bold"
                >
                  o haz clic aquí para revisar mi Curriculum
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="d-lg-flex">
        <motion.div className="col-lg-6 order-lg-1">
          <AbilityContent props={abilityState} />
        </motion.div>
        <div className="d-flex text-center pb-4 order-lg-0 d-lg-block col-lg-5">
          <div className="col-4">
            <motion.img
              src={saludMental}
              className="icon"
              alt="icono de inteligencia emocional"
              width="100px"
              onClick={() => handleViewAbility("IE", !abilityState.IE)}
              animate={abilityState.IE ? "visible" : "hidden"}
              variants={item1}
            />
          </div>
          <div className="col-4">
            <motion.img
              src={unido}
              className="icon"
              alt="icono de trabajo en equipo"
              width="100px"
              onClick={() => handleViewAbility("TE", !abilityState.TE)}
              animate={abilityState.TE ? "visible" : "hidden"}
              variants={item2}
            />
          </div>
          <div className="col-4">
            <motion.img
              src={analisis}
              className="icon"
              alt="icono de orientación a resultados"
              width="100px"
              onClick={() => handleViewAbility("OR", !abilityState.OR)}
              animate={abilityState.OR ? "visible" : "hidden"}
              variants={item3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export const AboutCurriculum = () => {
  const initialState = {
    FAU: false,
    FAA: false,
    OJD: false,
    ODW: false,
    WE: false,
    PI: false,
    TC: false,
  };
  const [curriculumState, setCurriculumState] = useState(initialState);
  const handleViewCurriculum = (property, value) => {
    setCurriculumState({ ...curriculumState, [property]: value });
  };

  return (
    <div className="col-12 col-lg-10 d-flex flex-column p-lg-5 ">
      <h3 className="text-center pb-3">Currículum</h3>
      <div className="row g-0">
        <div className="col-lg-5 col-12 bg-primary">
          <div className="foto-perfil text-center d-flex">
            <img src={fotoPerfil} alt="foto perfil" className="img-perfil " />
            <div className="align-self-center">
              <h1 className="h5">José Iván Valdés R.</h1>
              <p className="m-0 px-lg-5">
                Profesor de Matématicas e Informática Educativa
              </p>
              <p>Desarrollador Junior</p>
            </div>
          </div>
          <div
            className="icon h5 ms-lg-5"
            onClick={() => handleViewCurriculum("PI", !curriculumState.PI)}
          >
            Contacto
          </div>
          <PersonalInformation props={curriculumState} />
          <div
            className="icon h5 ms-lg-5"
            onClick={() => handleViewCurriculum("FAA", !curriculumState.FAA)}
          >
            Formación Académica
          </div>
          <AcademicEducation props={curriculumState} />

          <div
            className="icon h4 ms-lg-5"
            onClick={() => handleViewCurriculum("FAU", !curriculumState.FAU)}
          >
            Habilidades
          </div>
          <SelfTaught props={curriculumState} />
        </div>
        <div className="col-lg-7 col-12 bg-light p-lg-5">
          <div
            className="icon h4 ms-lg-5 text-primary"
            onClick={() => handleViewCurriculum("OJD", !curriculumState.OJD)}
          >
            Objetivo Profesional Docente
          </div>
          <TeachingObjective props={curriculumState} />

          <div
            className="icon h4 ms-lg-5 text-primary"
            onClick={() => handleViewCurriculum("ODW", !curriculumState.ODW)}
          >
            Meta como Desarrollar Web
          </div>
          <WebDeveloperGoal props={curriculumState} />
          <div
            className="icon h4 ms-lg-5 text-primary"
            onClick={() => handleViewCurriculum("WE", !curriculumState.WE)}
          >
            Experiencia Docente
          </div>
          <WorkExperience props={curriculumState} />
          <div
            className="icon h4 ms-lg-5 text-primary"
            onClick={() => handleViewCurriculum("TC", !curriculumState.TC)}
          >
            Formación Continua
          </div>
          <ContinuousTraining props={curriculumState} />
        </div>
      </div>
    </div>
  );
};
