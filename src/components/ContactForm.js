import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContacForm() {
  const initialStateValues = {
    name: " ",
    email: " ",
    description: " ",
    business: " ",
    date: new Date(),
  };
  const [values, setValues] = useState(initialStateValues);

  const arrayInput = [
    {
      name: "Nombre Completo",
      for: "name",
      type: "text",
      id: "1",
      placeholder: "Escribe tu nombre",
    },
    {
      name: "Correo Electrónico",
      for: "email",
      type: "email",
      id: "2",
      placeholder: "Escribe tu correo",
    },
    {
      name: "Asunto",
      for: "business",
      type: "text",
      id: "4",
      placeholder: "Indica (clases, proyecto u oferta)",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pfv1ek8",
        "template_svyda2g",
        e.target,
        "OllNoPF79CDtGd45S"
      )
      .then((res) => {
        console.log(res);
        sweetAlertConfirm();
      })
      .catch((err) => {
        console.log(err);
        sweetAlertError();
      });
  }
  function sweetAlertConfirm() {
    Swal.fire({
      icon: "success",
      title: "Gracias por escribirme, Estaré en contacto!!",
      showConfirmButton: false,
      showCloseButton: true,
      timer: 4000,
    });
  }
  function sweetAlertError() {
    Swal.fire({
      icon: "error",
      title: "ha ocurrido un error, inténtalo más tarde",
      showConfirmButton: false,
      showCloseButton: true,
      timer: 4000,
    });
  }
  return (
    <div className="col-12 col-lg-5 px-4 px-lg-0">
      <form onSubmit={sendEmail}>
        {arrayInput.map((datos) => {
          return (
            <div className=" mb-1 mb-lg-3 row " key={datos.id}>
              <label htmlFor={datos.for} className="col-lg-4 col-form-label ">
                {datos.name}
              </label>
              <div className="col-lg-8 ">
                <input
                  type={datos.type}
                  className="form-control form-control-sm"
                  id={datos.for}
                  placeholder={datos.placeholder}
                  name={datos.for}
                  required
                  onChange={handleInputChange}
                  value={values.for}
                />
              </div>
            </div>
          );
        })}
        <div className="mb-3 row">
          <label htmlFor="mensaje" className="form-label col-lg-4">
            Mensaje
          </label>
          <div className="col-lg-8">
            <textarea
              className="form-control "
              id="text"
              rows="3"
              placeholder="escribe tu mensaje"
              name="description"
              required
              onChange={handleInputChange}
              value={values.description}
            ></textarea>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-lg-center ps-lg-5 ">
          <div className="col-8 px-2 d-lg-flex justify-content-sm-evenly">
            <button
              type="submit"
              className="btn btn-outline-secondary text-white d-block"
            >
              Enviar
            </button>
            <button
              type="reset"
              className="mt-3 mt-sm-0 btn btn-outline-secondary d-block text-white"
              onClick={() => setValues(initialStateValues)}
            >
              Limpiar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
