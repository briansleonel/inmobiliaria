import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import { Title } from "../components/Title/Title";

function HomePage() {
    return (
        <>
            <section className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center bg-jujuy h-screen">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed p-12"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                    <div className="flex flex-col h-full items-center justify-center text-white gap-8">
                        <div>
                            <h2 className="mb-4 text-4xl font-semibold">
                                Texto sobre la promesa de tu negocio
                            </h2>
                            <h4 className="mb-6 text-xl font-normal">
                                Descripción sobre a lo que se dedica tu negocio
                                y como ofreces resultados a tus clientes
                            </h4>
                        </div>
                        <ButtonSecondary>Call to action</ButtonSecondary>
                    </div>
                </div>
            </section>
            <section className="p-12">
                <Title>Nuestros servicios</Title>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <article className="flex flex-col gap-4 border rounded p-8 bg-neutral-100">
                        <h6 className="uppercase text-lg font-semibold text-center">Asesoramiento</h6>
                        <p className="text-sm text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Molestiae perspiciatis sint voluptatem
                            obcaecati asperiores non, ducimus suscipit esse
                            numquam, tenetur quasi recusandae optio assumenda
                            quidem, placeat adipisci nesciunt modi autem.
                        </p>
                    </article>

                    <article className="flex flex-col gap-4 border rounded p-8 bg-neutral-100">
                        <h6 className="uppercase text-lg font-semibold text-center">Comprar</h6>
                        <p className="text-sm text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Molestiae perspiciatis sint voluptatem
                            obcaecati asperiores non, ducimus suscipit esse
                            numquam, tenetur quasi recusandae optio assumenda
                            quidem, placeat adipisci nesciunt modi autem.
                        </p>
                    </article>

                    <article className="flex flex-col gap-4 border rounded p-8 bg-neutral-100">
                        <h6 className="uppercase text-lg font-semibold text-center">Tasar</h6>
                        <p className="text-sm text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Molestiae perspiciatis sint voluptatem
                            obcaecati asperiores non, ducimus suscipit esse
                            numquam, tenetur quasi recusandae optio assumenda
                            quidem, placeat adipisci nesciunt modi autem.
                        </p>
                    </article>
                </div>
            </section>
        </>
    );
}

export default HomePage;
