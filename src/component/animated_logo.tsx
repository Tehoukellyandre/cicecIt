
export function AnimatedLogo() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          {/* Title with "Carrefour" in blue */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
            Le Carrefour de l&apos;Innovation
          </h2>

          {/* Logo */}
          <div className="w-full max-w-md">
            <img src="IMG/cicec.png"alt="cicec logo" />
          </div>

          {/* Full name with orange underline */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg md:text-xl text-gray-500 whitespace-nowrap">
              Carrefour InterContinental des Échanges Commerciaux
            </p>
            <div className="w-32 h-1 bg-[#FF0000] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
