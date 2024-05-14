export default function TermsConditions({ closeModal }) {
    return (
        <div className="flex flex-col gap-4 items-center justify-center w-full bg-white absolute overflow-y-scroll pt-10">
            <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-2xl text-gray-800">X</button>
            <h1 className="text-3xl font-bold text-gray-800">Términos y Condiciones</h1>
            <div className="text-black px-4">
                <div className="text-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">1. Introducción</h2>
                    <p className="mb-4">Estos Términos y Condiciones de Uso (en adelante, los &ldquo;Términos&ldquo;) regulan el uso de la plataforma educativa (en adelante, la &ldquo;Plataforma&ldquo;) que ofrece [Nombre del Desarrollador de la Aplicación] (en adelante, el &ldquo;Desarrollador&ldquo;). La Plataforma permite a los usuarios acceder a diversos recursos educativos, incluyendo cursos, materiales y herramientas de aprendizaje.</p>
                </div>
                <div className="text-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">2. Aceptación de los Términos</h2>
                    <p className="mb-4">Al utilizar la Plataforma, el usuario (en adelante, el &ldquo;Usuario&ldquo;) acepta y se obliga a cumplir con estos Términos. Si el Usuario no está de acuerdo con estos Términos, no debe utilizar la Plataforma.</p>
                </div>
                <div className="text-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">3. Registro y Cuenta de Usuario</h2>
                    <p className="mb-4">Para utilizar la Plataforma, el Usuario debe registrarse y crear una cuenta de usuario (en adelante, la &ldquo;Cuenta&ldquo;). El Usuario deberá proporcionar al Desarrollador la siguiente información:</p>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Nombres</li>
                        <li>Apellidos</li>
                        <li>Correo electrónico</li>
                    </ul>
                    <p className="mb-4">El Usuario es responsable de la exactitud y veracidad de la información proporcionada al Desarrollador. El Usuario también es responsable de mantener la confidencialidad de su contraseña y de cualquier otra información relacionada con su Cuenta.</p>
                </div>
                <div className="text-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">4. Uso de la Plataforma</h2>
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
                    <h2 className="text-2xl font-bold mb-2">5. Propiedad Intelectual</h2>
                    <p className="mb-4">La Plataforma y todo el contenido al que se accede a través de la Plataforma, incluyendo, entre otros, cursos, materiales y herramientas de aprendizaje, son propiedad del Desarrollador o de sus licenciantes. El Usuario no está autorizado a copiar, reproducir, distribuir, modificar o crear obras derivadas de dicho contenido sin el consentimiento previo y por escrito del Desarrollador.</p>
                </div>
                <div className="text-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">6. Privacidad de Datos</h2>
                    <p className="mb-4">El Desarrollador se compromete a proteger la privacidad de los datos del Usuario. El Desarrollador solo utilizará la información del Usuario para los siguientes propósitos:</p>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Proporcionar al Usuario acceso a la Plataforma y sus servicios.</li>
                        <li>Comunicarse con el Usuario en relación con la Plataforma y sus servicios.</li>
                        <li>Mejorar la Plataforma y sus servicios.</li>
                    </ul>
                    <p className="mb-4">El Desarrollador no compartirá la información del Usuario con terceros sin el consentimiento previo y por escrito del Usuario.</p>
                </div>
                <div className="text-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">7. Terminación</h2>
                    <p className="mb-4">El Desarrollador puede, a su discreción, terminar la Cuenta del Usuario o suspender el acceso del Usuario a la Plataforma en cualquier momento y sin previo aviso. El Desarrollador también puede modificar o suspender la Plataforma en cualquier momento y sin previo aviso.</p>
                </div>
                <div className="text-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">8. Ley Aplicable y Jurisdicción</h2>
                    <p className="mb-4">Estos Términos se regirán e interpretarán de conformidad con las leyes de [País del Desarrollador]. Cualquier disputa que surja de estos Términos se resolverá exclusivamente por los tribunales competentes de [País del Desarrollador].</p>
                </div>
                <div className="text-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">9. Disposiciones Generales</h2>
                    <p className="mb-4">Estos Términos constituyen el acuerdo completo entre el Desarrollador y el Usuario en relación con el uso de la Plataforma. Si alguna disposición de estos Términos se considera inválida o inaplicable, dicha disposición será eliminada de estos Términos y las disposiciones restantes permanecerán en pleno vigor y efecto.</p>
                </div>
                <div className="text-lg mb-4">
                    <h2 className="text-2xl font-bold mb-2">10. Contacto</h2>
                    <p className="mb-4">Si tiene alguna pregunta sobre estos Términos, puede ponerse en contacto con el Desarrollador en [Dirección de correo electrónico del Desarrollador].</p>
                    <p className="mb-4 font-bold">Importante:</p>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Estos Términos son solo un ejemplo y es posible que no sean adecuados para todas las aplicaciones educativas.</li>
                        <li>El Desarrollador debe consultar con un abogado para asegurarse de que los Términos sean adecuados para su aplicación específica.</li>
                        <li>El Desarrollador debe traducir los Términos al idioma o idiomas en que se ofrece la Plataforma.</li>
                    </ul>
                    <p>Espero que esta información le sea útil. Por favor, avíseme si tiene alguna otra pregunta.</p>
                </div>
            </div>
        </div>
    )
}