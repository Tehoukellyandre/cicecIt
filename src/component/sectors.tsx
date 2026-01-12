import { Building2, Users, FileArchive, Phone, Code, Server, FolderDown } from "lucide-react"

export function SectorsSection() {
  return (
    <section className="py-24 bg-[#f9f0f0cb] from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
    
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center  gap-2 bg-white/10 backdrop-blur-md  border border-white/20 px-4 py-2 rounded-full shadow-lg transition-all animate-bounce duration-300 hover:scale-[1.02] cursor-default">
            <FolderDown className="w-4 h-4" />
            <span className="text-sm font-semibold  tracking-wider">Nos Expertises</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
             Nos Secteurs d&apos;activités
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" >
            Des solutions innovantes et adaptées pour le secteur public et privé
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Public Sector */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Green accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22c55e] to-[#16a34a]" />

            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Secteur Public</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
                <Users className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">Système de gestion de file d&apos;attente</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
                <Phone className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">Installation de call center</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
                <FileArchive className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">Archivage numérique</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
                <Code className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">Solutions logicielles sur mesure</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
                <Server className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">Optimisation des infrastructures IT</p>
              </div>
            </div>
          </div>

          {/* Private Sector */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Yellow accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EAB308] to-[#f59e0b]" />

            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#EAB308] to-[#f59e0b] mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Secteur privé</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors">
                <Code className="w-5 h-5 text-[#EAB308] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">Solutions logicielles sur mesure</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors">
                <Server className="w-5 h-5 text-[#EAB308] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">Optimisation des infrastructures IT</p>
              </div>
               <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors">
                <Users className="w-5 h-5 text-[#EAB308] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">Système de gestion de file d&apos;attente</p>
              </div>
               <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors">
                <Server className="w-5 h-5 text-[#EAB308] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">Installation de call center</p>
              </div>
               <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors">
                <Server className="w-5 h-5 text-[#EAB308] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">Archivage numérique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
