  import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
  import Groups2Icon from '@mui/icons-material/Groups2';
  import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
  import HandshakeIcon from '@mui/icons-material/Handshake';
  import {
  Briefcase,
  FileCode,
  Cpu
} from "lucide-react"

  export function FooterProposition() {
    const currentYear = new Date().getFullYear();

    const solutions = [
      { name: "Services Professionnels", url: "#" ,  icon: Briefcase},
      { name: "Solutions Logicielles", url: "#" , icon: FileCode},
      { name: "Solutions Matérielles", url: "#" ,icon: Cpu },

    ];

    return (
      <footer className="bg-gray-900 text-gray-200">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* 1. Company Info & Brand */}
            <div className="lg:col-span-1">
              <div className="flex justify-center mb-4">
                <div>
                  <h2 className="flex items-center justify-center bg-white rounded-full w-20 h-20 shadow-md">
                    <img  src="IMG/cicec.png" alt="CICEC AFRIQUE"  className="h-12 w-auto" />
                  </h2>
                  <div className="h-1 w-20 bg-yellow-400 mt-2 rounded-full" />
                </div>
                
              </div>
              <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
                Une compagnie aux capitaux africains créée en 2008 apportant des solutions 
                innovantes, performantes et adaptées au contexte africain.
              </p>
               <ul className="flex justify-center gap-3 mt-7">
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
            <div>
              {/* Solutions logiciel */}
              <div>
              <h3 className="text-xl font-bold mb-7 mt-7 text-white border-l-4 border-yellow-400 pl-4">
                Nos Services 
              </h3>
              <ul className="space-y-5">
                {solutions.map((solution) => (
                <li key={solution.name}>
                    <a
                    href="mailto:contact@cicec-afrique.com"
                    className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors group"
                    >
                    <solution.icon className="w-5 h-5 flex-shrink-0 text-yellow-400 group-hover:text-white" />
                    <span className="text-sm">{solution.name}</span>
                  </a>
                  </li>
                ))}
              </ul>
               <a
                href="/contact"
                className="lg:block  w-60  mt-9 px-6 py-2.5 bg-gradient-to-r from-[#FDB813] to-[#F59E0B] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium text-sm"
                >
                Faire une demande de service
                </a>
              </div>
              
            </div>
            

            {/* 3. Solution materielle */}
           

            {/* 4. Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 mt-7 text-white border-l-4 border-yellow-400 pl-4">
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
            </div>

             <div>
               <h3 className="text-xl font-bold mb-7 mt-7 text-white border-l-4 border-yellow-400 pl-4">
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
                <a
                href="/contact"
                className="lg:block  w-40  mt-9 px-6 py-2.5 bg-gradient-to-r from-[#FDB813] to-[#F59E0B] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium text-sm"
                >
                Nous Contacter
                </a>
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