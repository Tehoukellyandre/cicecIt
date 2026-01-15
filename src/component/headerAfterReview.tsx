import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"


export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)

  const menuItems = [
    {
      label: "À propos",
      href: "/a-propos",
    },
    {
      label: "Services Professionnels",
      href: "/services-professionnels",
      submenu: [
      
        { label: "Analyse et conception logicielle", href: "/services-professionnels/developpement" },
        { label: "Modélisation et automatisation de processus métier", href: "/services-professionnels/MA" },
        { label: "Gestion électronique de documents", href: "/services-professionnels/GED" },
        { label: "Intégration de solutions logicielles", href: "/services-professionnels/IL" },
        {
        label: "Formations en TI",
        submenu: [
            { label: "Formation en développement logiciel", href: "/formation/developpement" },
            { label: "Formation en gestion de projets informatiques", href: "/formation/gestion-projets" },
            { label: "Formation en sécurité informatique", href: "/formation/securite" },
            { label: "Formation en data science", href: "/formation/data-science" },
        ],
        },

       
      ],
    },
    {
      label: "Solutions Logicielles",
      href: "/solutions-logicielles",
      submenu: [
        { label: "ISMP", href: "/solutions-logicielles/ismp" },
        { label: "FONIVA", href: "/solutions-logicielles/foniva" },
        { label: "AD'DOC CAPTURE PRO", href: "/solutions-logicielles/addoc" },
      ],
    },
    {
      label: "Solutions Matérielles",
      href: "/solutions-materielles",
      submenu: [
        { label: "Ice Coolant", href: "/solutions-materielles/ice-coolant" },
        { label: "Ordinateurs et serveurs ", href: "/solutions-materielles/ordinateurs" },
        { label: "Matériels spécialisés pour GFA", href: "/solutions-materielles/gfa" },
        { label: "Matériels spécialisés pour Call Center", href: "/solutions-materielles/call-center" },
        { label: "Matériels spécialisés pour GED", href: "/solutions-materielles/documentaire" },
      ],
    },
    {
      label: "Notre Équipe",
      href: "/equipe",
    },
   
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        <a href="/" >
          <img src="IMG/cicec.png" alt="CICEC AFRIQUE" width={180} height={60} className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-3 ml-auto">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.submenu && setOpenMenu(item.label)}
              onMouseLeave={() => {
                setOpenMenu(null)
                setOpenSubMenu(null)
              }}
            >
              {item.submenu ? (
                <>
                  <button className="flex items-center gap-1 text-gray-700 hover:text-[#0EA5E9] transition-colors font-medium text-sm">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {openMenu === item.label && (
                    <div className="absolute left-0 top-full pt-2 w-72">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">

                        {item.submenu.map((subitem: any, index: number) => {
                          if (subitem.separator) {
                            return <hr key={`sep-${index}`} className="my-2 border-gray-200" />
                          }

                          if (subitem.submenu) {
                            return (
                              <div
                                key={subitem.label}
                                className="relative group"
                                onMouseEnter={() => setOpenSubMenu(subitem.label)}
                                onMouseLeave={() => setOpenSubMenu(null)}
                              >
                                <div className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                                  {subitem.label}
                                  <ChevronRight className="h-4 w-4" />
                                </div>

                                {openSubMenu === subitem.label && (
                                  <div className="absolute left-full top-0 ml-1 w-64 bg-white border border-gray-100 shadow-xl rounded-lg py-2">
                                    {subitem.submenu.map((child: any) => (
                                      <a
                                        key={child.href}
                                        href={child.href}
                                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#FDB813]"
                                      >
                                        {child.label}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )
                          }

                          return (
                            <a
                              key={subitem.href}
                              href={subitem.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#FDB813]"
                            >
                              {subitem.label}
                            </a>
                          )
                        })}

                      </div>
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-[#0EA5E9] transition-colors font-medium text-sm"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden lg:block ml-7  px-6 py-2.5 bg-gradient-to-r from-[#FDB813] to-[#F59E0B] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium text-sm"
        >
          Nous Contacter
        </a>

        <button className="lg:hidden p-2 text-gray-700 hover:text-[#0EA5E9]">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </header>
  )
}
