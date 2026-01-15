
export function Baniere() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center  px-6 py-15 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(IMG/wester2.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/90 via-[#2d7a3d]/85 to-[#1a5a2a]/90" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl to-r  font-bold mb-8 text-black leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f59e0b] ">CICEC{" "}</span>
          <span className="text-[#155f03ef]">AFRIQUE</span>
        </h1>
{/* #FF0000  #f59e0b  #008000 */}
{/* #155f03ef */}
        <p className="text-xl text-white md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12">
          Votre partenaire de choix pour réussir votre transformation numérique selon vos besoins spécifiques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
          href="/"
          className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-[#FDB813] to-[#F59E0B] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium text-sm"
          >
          Découvrir nos services
          </a>
          <a
          href="/contact"
          className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-[#FDB813] to-[#F59E0B] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium text-sm"
          >
          Nous Contacter
          </a>
        </div>
      </div>
    </section>
  )
}
