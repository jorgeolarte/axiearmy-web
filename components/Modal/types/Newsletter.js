import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createContactByNewsletter } from "@/helpers/sendinblue";
import ModalContext from "@/contexts/modal.context";

export default function Newsletter() {
  const [created, setCreated] = useState(false);
  const { toggleModal } = useContext(ModalContext);

  useEffect(() => {
    if (created) {
      setTimeout(function () {
        setCreated(false);
        toggleModal(process.env.MODAL_NEWSLETTER_TYPE);
      }, 5000);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      fname: "",
      lname: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .max(15, "Máximo 15 caracteres en el nombre")
        .required("Obligatorio"),
      lname: Yup.string()
        .max(20, "Máximo 20 caracteres en el apellido")
        .required("Obligatorio"),
      email: Yup.string()
        .email("Correo electrónico invalido")
        .required("Obligatorio"),
    }),
    onSubmit: async (values) => {
      let { fname, lname, email } = values;
      let response = await createContactByNewsletter(fname, lname, email);
      setCreated(response);
    },
  });

  return (
    <section
      className={`bg-gray grid md:grid-cols-3  rounded-lg shadow-lg shadow-dark p-10 `}
    >
      <div className='hidden md:block'>
        <Image
          src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645798265/web/icons/logo-axie-army_ikkmwv.png'
          width={200}
          height={200}
          alt='Axie Army | Academy'
        />
      </div>
      <div className='col-span-3 md:col-span-2'>
        <div className='flex flex-col gap-5 '>
          <h2 className='text-purple text-xl'>
            {created ? (
              <>¡Felicitaciones!</>
            ) : (
              <>¡Se el primero en enterarte!</>
            )}
          </h2>
          <p className='font-light'>
            {created ? (
              <>Bienvenido a nuestra newsletter</>
            ) : (
              <>Únete a nuestra newsletter</>
            )}
          </p>
          {created ? (
            <></>
          ) : (
            <form
              onSubmit={formik.handleSubmit}
              className='flex flex-col gap-7'
            >
              <div className='grid grid-flow-col gap-5'>
                <div className='flex flex-col'>
                  <input
                    id='fname'
                    placeholder='Nombre *'
                    type={"text"}
                    className='input'
                    {...formik.getFieldProps("fname")}
                  />
                  {formik.touched.fname && formik.errors.fname ? (
                    <span className='input-error'>{formik.errors.fname}</span>
                  ) : null}
                </div>

                <div className='flex flex-col'>
                  <input
                    id='lname'
                    placeholder='Apellidos *'
                    type={"text"}
                    className='input'
                    {...formik.getFieldProps("lname")}
                  />
                  {formik.touched.lname && formik.errors.lname ? (
                    <span className='input-error'>{formik.errors.lname}</span>
                  ) : null}
                </div>
              </div>

              <div className='flex flex-col'>
                <input
                  id='email'
                  placeholder='Correo electrónico *'
                  type={"email"}
                  className='input'
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className='input-error'>{formik.errors.email}</span>
                ) : null}
              </div>

              <div>
                <button className='submit' type='submit'>
                  Suscribirme
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
