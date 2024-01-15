export default function CtaForm() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <div className="grid gap-4 grid-flow-row max-w-xl lg:max-w-lg">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
                  Finn den beste <br /> sparekonto renten
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300 text-center">
                  Vi hjelper deg med å finne den beste renten på markedet, slik
                  at du får en god avkastning på pengene dine
                </p>
              </div>

              <form className="grid gap-4 grid-flow-row">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Beløp"
                />
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Alder"
                />
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Nåværende bank"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Vis Rente
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        ></div>
      </div>
    </>
  );
}
