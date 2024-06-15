'use client';
import { useState } from "react";

export default function TermsConditions({ showModal, closeModal, acceptTerms }) {

    const [bottom, setBottom] = useState(false)

    const handleScroll = (e) => {
        //const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {
            setBottom(true)
        } else {
            setBottom(false)
        }
    }

    return (
        <div className={`flex flex-col items-center justify-start h-full max-w-[1000px] bg-white relative py-10 px-2 sm:px-10 md:px-20 rounded-2xl transition-all duration-[150ms] ${showModal ? "scale-100" : "scale-50"}`}>
            <button onClick={closeModal} className=" absolute top-0 right-0 p-1 text-amethyst dark:text-grape hover:text-grape transition-all duration-200">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" />
                </svg>
            </button>
            <h1 className="text-3xl text-center w-full font-bold text-gray-800 pb-4 border-b border-b-main-dark/50">Términos y Condiciones</h1>
            <section className="text-black px-4 sm:px-8 py-4 w-full h-fit flex flex-col items-center overflow-y-scroll" onScroll={handleScroll}>
                <div className="w-full">
                    <div className="text-lg mb-4">
                        <h2 className="text-2xl font-semibold mb-2">1. Introducción</h2>
                        <p className="mb-4">Estos Términos y Condiciones de Uso (en adelante, los &ldquo;Términos&ldquo;) regulan el uso de la plataforma educativa (en adelante, la &ldquo;Plataforma&ldquo;) que ofrece Aragangs.dev (en adelante, el &ldquo;Desarrollador&ldquo;). La Plataforma permite a los usuarios acceder a diversos recursos educativos, incluyendo cursos, materiales y herramientas de aprendizaje.</p>
                    </div>
                    <div className="text-lg mb-4">
                        <h2 className="text-2xl font-semibold mb-2">2. Aceptación de los Términos</h2>
                        <p className="mb-4">Al utilizar la Plataforma, el usuario (en adelante, el &ldquo;Usuario&ldquo;) acepta y se obliga a cumplir con estos Términos. Si el Usuario no está de acuerdo con estos Términos, no debe utilizar la Plataforma.</p>
                    </div>
                    <div className="text-lg mb-4">
                        <h2 className="text-2xl font-semibold mb-2">3. Registro y Cuenta de Usuario</h2>
                        <p className="mb-4">Para utilizar la Plataforma, el Usuario debe registrarse y crear una cuenta de usuario (en adelante, la &ldquo;Cuenta&ldquo;). El Usuario deberá proporcionar a la plataforma la siguiente información:</p>
                        <ul className="list-disc ml-8 mb-4">
                            <li>Nombres</li>
                            <li>Apellidos</li>
                            <li>Correo electrónico</li>
                        </ul>
                        <p className="mb-4">El Usuario es responsable de la exactitud y veracidad de la información proporcionada a la plataforma. El Usuario también es responsable de mantener la confidencialidad de su contraseña y de cualquier otra información relacionada con su Cuenta.</p>
                    </div>
                    <div className="text-lg mb-4">
                        <h2 className="text-2xl font-semibold mb-2">4. Uso de la Plataforma</h2>
                        <p className="mb-4">El Usuario se compromete a utilizar la Plataforma de manera responsable y ética. El Usuario se abstendrá de:</p>
                        <ul className="list-disc ml-8 mb-4">
                            <li>Utilizar la Plataforma para cualquier propósito ilegal o no autorizado.</li>
                            <li>Interferir o interrumpir el funcionamiento de la Plataforma.</li>
                            <li>Utilizar la Plataforma para transmitir o publicar cualquier contenido que sea difamatorio, obsceno, amenazante, abusivo o de otra manera objetable.</li>
                            <li>Utilizar la Plataforma para hacerse pasar por otra persona o entidad.</li>
                            <li>Acceder o utilizar la Cuenta de otro Usuario sin su consentimiento.</li>
                        </ul>
                    </div>
                    <div className="text-lg mb-4">
                        <h2 className="text-2xl font-semibold mb-2">5. Propiedad Intelectual</h2>
                        <p className="mb-4">La Plataforma y todo el contenido al que se accede a través de la Plataforma, incluyendo, entre otros, cursos, materiales y herramientas de aprendizaje, son propiedad del Desarrollador o de sus licenciantes. El Usuario no está autorizado a copiar, reproducir, distribuir, modificar o crear obras derivadas de dicho contenido sin el consentimiento previo y por escrito del Desarrollador.</p>
                    </div>
                    <div className="text-lg mb-4">
                        <h2 className="text-2xl font-semibold mb-2">6. Privacidad de Datos</h2>
                        <p className="mb-4">El Desarrollador se compromete a proteger la privacidad de los datos del Usuario. El Desarrollador solo utilizará la información del Usuario para los siguientes propósitos:</p>
                        <ul className="list-disc ml-8 mb-4">
                            <li>Proporcionar al Usuario acceso a la Plataforma y sus servicios.</li>
                            <li>Comunicarse con el Usuario en relación con la Plataforma y sus servicios.</li>
                            <li>Mejorar la Plataforma y sus servicios.</li>
                        </ul>
                        <p className="mb-4">El Desarrollador no compartirá la información del Usuario con terceros sin el consentimiento previo y por escrito del Usuario.</p>
                    </div>
                    <div className="text-lg mb-4">
                        <h2 className="text-2xl font-semibold mb-2">7. Terminación</h2>
                        <p className="mb-4">El Desarrollador puede, a su discreción, terminar la Cuenta del Usuario o suspender el acceso del Usuario a la Plataforma en cualquier momento y sin previo aviso. El Desarrollador también puede modificar o suspender la Plataforma en cualquier momento y sin previo aviso.</p>
                    </div>
                    <div className="text-lg mb-4">
                        <h2 className="text-2xl font-semibold mb-2">8. Ley Aplicable y Jurisdicción</h2>
                        <p className="mb-4">Estos Términos se regirán e interpretarán de conformidad con las leyes de Colombia. Cualquier disputa que surja de estos Términos se resolverá exclusivamente por los tribunales competentes de Colombia.</p>
                    </div>
                    <div className="text-lg mb-4">
                        <h2 className="text-2xl font-semibold mb-2">9. Disposiciones Generales</h2>
                        <p className="mb-4">Estos Términos constituyen el acuerdo completo entre el Desarrollador y el Usuario en relación con el uso de la Plataforma. Si alguna disposición de estos Términos se considera inválida o inaplicable, dicha disposición será eliminada de estos Términos y las disposiciones restantes permanecerán en pleno vigor y efecto.</p>
                    </div>
                    <div className="text-lg mb-4">
                        <h2 className="text-2xl font-semibold mb-2">10. Contacto</h2>
                        <p className="mb-4">Si tiene alguna pregunta sobre estos Términos, puede ponerse en contacto con el Desarrollador en geideran808087@gmail.com.</p>
                    </div>
                </div>
            </section>

            {/* Accept button */}
            <section className="w-full max-w-96 flex mt-6 px-4 gap-4">
                <button onClick={closeModal} className="w-1/2 text-main-dark/50 dark:text-main-light/50 text-base sm:text-xl p-2 rounded-md transition-all duration-400">
                    Cancelar
                </button>
                <button disabled={!bottom} onClick={acceptTerms} className="w-1/2 text-white text-base sm:text-xl p-2 rounded-md transition-all duration-400 bg-amethyst hover:bg-grape dark:bg-grape dark:hover:bg-amethyst disabled:bg-amethyst/50 cursor-pointer disabled:cursor-not-allowed">
                    Aceptar
                </button>
            </section>
        </div>
    )
}