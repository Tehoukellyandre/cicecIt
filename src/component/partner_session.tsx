import { Button } from "@mui/material";
import { ExternalLink, Globe } from "lucide-react";


const partners = [
  {
    name: "IMDS",
    logo: "IMG/imds.png",
    fullName: "International Media Data Services",
    description: "Leader dans les services de données médias internationaux.",
    domains: ["Gestion documentaire", "Archivage électronique", "Solutions cloud"],
    url: "https://imds-world.com/",
    color: "primary",
  },
  {
    name: "FONIVA",
    logo: "IMG/foniva.png",
    fullName: "Foniva",
    description: "Spécialisé dans les solutions de centres d'appels et de téléphonie informatique intégrée.",
    domains: ["Intégration CTI", "Solutions VoIP", "CRM"],
    url: "https://foniva.com/fr/",
    color: "accent",
  },
  {
    name: "CICECAM",
    logo: "IMG/cicecam.png",
    fullName: "CICEC Amérique",
    description: "Filiale du groupe CICEC opérant au Canada, partageant la même vision d'excellence technologique.",
    domains: ["Développement d'applications", "Modélisation de processus", "Gestion documentaire"],
    url: "http://cicec-amerique.com/",
    color: "primary",
  },
  {
    name: "IMMERSION4",
    logo: "IMG/immersion4.jpg",
    fullName: "IMMERSION4",
    description: "Immersion4 apporte une solution innovante et écologique à la problématique liée au refroidissement des équipements informatiques",
    domains: ["Refroidissement de composants électroniques",  "Data centers de proximité"],
    url: "https://www.immersion4.com/",
    color: "primary",
  },
];

export function  PartnersSection () {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md  border border-white/20 px-4 py-2 rounded-full shadow-lg transition-all animate-bounce duration-300 hover:scale-[1.02] cursor-default">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-semibold  tracking-wider">Écosystème</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Nos <span className="text-gradient">Partenaires</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" >
            Des partenaires technologiques, institutionnels et commerciaux de confiance
          </p>
        </div>
          <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Colored header with logo */}
              <div
                className={`h-32 bg-gradient-to-br ${partner.color} flex items-center justify-center p-6 relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_70%)]" />
                {/* Removed border from logo container */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-4 w-full h-20 flex items-center justify-center shadow-sm">
                  <img
                    src={partner.logo ? partner.logo : "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-1 text-gray-900">{partner.name}</h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">{partner.fullName}</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{partner.description}</p>

                {/* Domains */}
                <div className="mb-6 flex-grow">
                  <p className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wide">
                    Domaines de collaboration
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {partner.domains.map((domain) => (
                      <span
                        key={domain}
                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                 variant = "outlined"
                 color="success"
                 className={`w-full bg-gradient-to-r ${partner.color} hover:opacity-90 text-white border-0 group/btn`}
                >
                  <a href={partner.url} target="_blank" rel="noopener noreferrer">
                    <div className="flex">
                        <span>Visiter le site</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

