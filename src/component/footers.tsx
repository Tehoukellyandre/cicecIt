  import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
  import Groups2Icon from '@mui/icons-material/Groups2';
  import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
  import HandshakeIcon from '@mui/icons-material/Handshake';

  export function Footer() {
    const currentYear = new Date().getFullYear();

    const servicesLogicielle = [
      { label: "ISMP", href: "/solutions-logicielles/ismp" },
      { label: "FONIVA", href: "/solutions-logicielles/foniva" },
      { label: "AD'DOC CAPTURE PRO", href: "/solutions-logicielles/addoc" },
    ];
  const servicesMateriel = [
      { label: "Ice Coolant", href: "/solutions-materielles/ice-coolant" },
      { label: "Matériels spécialisés pour gestion de file d'attente", href: "/solutions-materielles/gfa" },
      { label: "Ordinateurs et serveurs", href: "/solutions-materielles/ordinateurs" },
      { label: "Matériels spécialisés pour Call Center", href: "/solutions-materielles/call-center" },
      { label: "Matériels spécialisés pour GED", href: "/solutions-materielles/documentaire" },
    ];
    
  const servicesProfessionnels =  [
        
          { label: "Analyse et conception logicielle", href: "/services-professionnels/developpement" },
          { label: "Modélisation et automatisation de processus métier", href: "/services-professionnels/MA" },
          { label: "Gestion électronique de documents", href: "/services-professionnels/GED" },
          { label: "Intégration de solutions logicielles", href: "/services-professionnels/IL" },
          {
          label: "Formations en TI",
          // submenu: [
          //     { label: "Formation en développement logiciel", href: "/formation/developpement" },
          //     { label: "Formation en gestion de projets informatiques", href: "/formation/gestion-projets" },
          //     { label: "Formation en sécurité informatique", href: "/formation/securite" },
          //     { label: "Formation en data science", href: "/formation/data-science" },
          // ],
          },
    ];
    // const quickLinks = [
    //   { name: "Notre Équipe", url: "#" },
    //   { name: "Nos Réalisations", url: "#" },
    //   { name: "Nos Partenaires", url: "#" },

    // ];

    return (
      <footer className="bg-gray-900 text-gray-200">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-10 lg:gap-16">
            {/* 1. Company Info & Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="flex items-center justify-center bg-white rounded-full w-20 h-20 shadow-md">
                  <img  src="IMG/cicec.png" alt="CICEC AFRIQUE"  className="h-12 w-auto" />
                </h2>
                <div className="h-1 w-20 bg-yellow-400 mt-2 rounded-full" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Une compagnie aux capitaux africains créée en 2008 apportant des solutions 
                innovantes, performantes et adaptées au contexte africain.
              </p>
              <ul className="flex gap-3 pt-23">
                <li>
                  <div className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors group">
                    <span className="text-sm">
                      <a href="">
                       <Facebook className="w-8 h-8 rounded-full border border-yellow p-1 flex-shrink-0 text-yellow-400 group-hover:text-white" />
                      </a>
                    </span>
                  </div>
              </li>
              <li>
                  <div className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors group">
                    <span className="text-sm">
                      <a href="https://www.linkedin.com/company/cicec-benin/about/">
                       <Linkedin className="w-8 h-8 rounded-full border border-yellow p-1 flex-shrink-0 text-yellow-400 group-hover:text-white" />
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors group">
                    <span className="text-sm">
                      <a href="https://www.linkedin.com/company/cicec-benin/about/">
                       <Twitter className="w-8 h-8 rounded-full border border-yellow p-1 flex-shrink-0 text-yellow-400 group-hover:text-white" />
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            
            </div>
      
            {/* 2. Services */}
            <div className="grid grid-cols-2 gap-4">
              {/* 3. Solution materielle */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-yellow-400 pl-4">
                Solutions Matérielles 
                </h3>
                <ul className="space-y-3">
                  {servicesMateriel.map((materiel) => (
                    <li key={materiel.label}>
                      <a
                        href={materiel.href}
                        className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-3 group"
                      >
                        <span className="inline-block h-1 w-2 bg-gray-600 group-hover:bg-yellow-400 transition-colors" />
                        {materiel.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Services Professionnels */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-yellow-400 pl-4">
                  Services Professionnels
                </h3>
                <ul className="space-y-3">
                  {servicesProfessionnels.map((service) => (
                    <li key={service.label}>
                      {/* Élément principal */}
                      <li key={service.label}>
                      <a
                        href={service.href}
                        className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-3 group"
                      >
                        <span className="inline-block h-1 w-2 bg-gray-600 group-hover:bg-yellow-400 transition-colors" />
                        {service.label}
                      </a>
                    </li>

                      {/* Sous-menu */}
                      {/* {service.submenu && (
                              <ul className="mt-2 ml-5 space-y-2">
                                {service.submenu.map((sub) => (
                                  <li key={sub.label}>
                                    <a
                                      href={sub.href}
                                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                      <span className="inline-block h-1 w-2 bg-gray-600 group-hover:bg-yellow-400 transition-colors" />
                                      {sub.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )} */}
                          </li>
                        ))}
                </ul>
              </div>
              {/* Solutions logiciel */}
              <div className="col-span-2 flex justify-center mt-8"> {/* Ajout d'un margin-top pour l'espace */}
                <div className="flex flex-col items-center"> {/* Changé items-start en items-center */}
                  <h3 className="text-xl font-bold text-white">
                    Solutions logicielles
                  </h3>
                  <div className="h-1 w-20 bg-yellow-400 mt-2 mb-4 rounded-full" /> {/* w-full pour s'adapter au titre */}
                  
                  <div>
                    {/* - flex : met les éléments en ligne
                        - gap-8 : crée de l'espace entre les éléments
                        - justify-center : centre les éléments horizontalement 
                    */}
                    <ul className="flex flex-wrap justify-center mt-3 gap-8">
                      {servicesLogicielle.map((logiciel) => (
                        <li key={logiciel.label}>
                          <a
                            href={logiciel.href}
                            className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-3 group"
                          >
                            <span className="inline-block h-1 w-2 bg-gray-600 group-hover:bg-yellow-400 transition-colors" />
                            {logiciel.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
              
               
            

            {/* 4. Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-yellow-400 pl-4">
                <span className="block">À Propos De Nous</span>
              </h3>
              
              <ul className="space-y-5">
                <li>
                  <a
                    href="mailto:contact@cicec-afrique.com"
                    className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors group"
                  >
                    <Groups2Icon className="w-5 h-5 flex-shrink-0 text-yellow-400 group-hover:text-white" />
                    <span className="text-sm">Notre Équipe</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@cicec-afrique.com"
                    className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors group"
                  >
                    <EmojiEventsIcon className="w-5 h-5 flex-shrink-0 text-yellow-400 group-hover:text-white" />
                    <span className="text-sm">Nos Réalisations</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@cicec-afrique.com"
                    className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors group"
                  >
                    <HandshakeIcon className="w-5 h-5 flex-shrink-0 text-yellow-400 group-hover:text-white" />
                    <span className="text-sm">Nos Partenaires</span>
                  </a>
                </li>
              </ul>
             
                <h3 className="text-xl font-bold mt-10 mb-6 text-white border-l-4 border-yellow-400 pl-4">
                  Contact
                </h3>
                <ul className="space-y-5">
                <li>
                  <a
                    href="mailto:contact@cicec-afrique.com"
                    className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors group"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 text-yellow-400 group-hover:text-white" />
                    <span className="text-sm">contact@cicec-afrique.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+237600000000"
                    className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors group"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 text-yellow-400 group-hover:text-white" />
                    <span className="text-sm">+237 6 00 00 00 00</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors group">
                    <MapPin className="w-5 h-5 flex-shrink-0 text-yellow-400 group-hover:text-white" />
                    <span className="text-sm">
                      Cotonou, Benin
                    </span>
                  </div>
                </li>
              
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} CICEC AFRIQUE Sarl. Tous droits réservés.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-yellow-400 transition-colors text-xs"
                >
                  Politique de confidentialité
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-yellow-400 transition-colors text-xs"
                >
                  Mentions légales
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }