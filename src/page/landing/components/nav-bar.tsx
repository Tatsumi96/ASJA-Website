import Logo from '@/assets/Logo/asja-logo.png';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useLangue } from '@/page/lang/useLang';
import { useThemeContext } from '@/page/theme/useThemeContext';
import { MenuIcon, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useScrollLock } from '../hooks/useScrollLock';
import { AnnonceSection } from './annonce-section';

const homeSections = [
  { to: 'description', key: 'sectionAccueilNavbar.description' },
  { to: 'mission', key: 'sectionAccueilNavbar.mission' },
  { to: 'filiere', key: 'sectionAccueilNavbar.filieres' },
  { to: 'events', key: 'sectionAccueilNavbar.events' },
  { to: 'systeme', key: 'sectionAccueilNavbar.systeme' },
  { to: 'temoignages', key: 'sectionAccueilNavbar.temoignages' },
  { to: 'FAQ', key: 'sectionAccueilNavbar.FAQ' },
];

const filiereLinks = [
  { href: '/mention/agronomie', key: 'filiereSection.AGRO.name' },
  { href: '/mention/informatique', key: 'filiereSection.INFO.name' },
  { href: '/mention/droit', key: 'filiereSection.DROIT.name' },
  { href: '/mention/economie', key: 'filiereSection.ECO.name' },
  {
    href: '/mention/langue-etrangere-applique',
    key: 'filiereSection.LEA.name',
  },
  { href: '/mention/science-de-la-terre', key: 'filiereSection.ST.name' },
];

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { toggleTheme, isDark } = useThemeContext();
  const { translate } = useLangue();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFiliereClick = (href: string) => {
    window.location.href = href;
    setOpen(false);
  };
  const handleLogoClick = () => (window.location.href = '/');

  useScrollLock(open);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <AnnonceSection />
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              className="w-12 h-12"
              src={Logo}
              alt="Logo de l'université ASJA"
            />
            <h1 className="text-lg font-bold text-gray-900 dark:text-white hidden sm:block">
              {translate('universite')}
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <DesktopNav onFiliereClick={handleFiliereClick} />
            <button
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-gray-800 dark:text-white"
            aria-label="Open menu"
          >
            <MenuIcon size={28} />
          </button>
        </div>
      </nav>
      <MobileNav
        open={open}
        setOpen={setOpen}
        onFiliereClick={handleFiliereClick}
      />
    </header>
  );
};

const DesktopNav = ({
  onFiliereClick,
}: {
  onFiliereClick: (href: string) => void;
}) => {
  const { translate } = useLangue();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavItem trigger={translate('navBar.accueil')}>
          {homeSections.map((item) => (
            <ScrollLink key={item.to} to={item.to}>
              {translate(item.key)}
            </ScrollLink>
          ))}
        </NavItem>
        <NavItem trigger={translate('navBar.filieres')}>
          {filiereLinks.map((item) => (
            <FiliereLink
              key={item.href}
              onClick={() => onFiliereClick(item.href)}
            >
              {translate(item.key)}
            </FiliereLink>
          ))}
        </NavItem>
        <NavigationMenuItem>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-zinc-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer text-gray-800 dark:text-white"
          >
            {translate('navBar.contact')}
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
const MobileNav = ({
  open,
  setOpen,
  onFiliereClick,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  onFiliereClick: (href: string) => void;
}) => {
  const { translate } = useLangue();
  const { toggleTheme, isDark } = useThemeContext();
  const handleLinkClick = () => setOpen(false);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? 'block' : 'hidden'}`}
    >
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => setOpen(false)}
      />
      <div
        className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-zinc-900 shadow-xl transition-transform duration-300 ease-in-out"
        style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-zinc-700">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Menu
          </h1>
          <button onClick={() => setOpen(false)} className="p-2">
            <X size={24} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Scrollable content area */}
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <NavSection title={translate('navBar.accueil')}>
              {homeSections.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy
                  smooth
                  offset={-50}
                  duration={500}
                  onClick={handleLinkClick}
                  activeClass="text-green-600 dark:text-green-400 font-semibold"
                  className="block py-2 text-gray-700 dark:text-gray-300"
                >
                  {translate(item.key)}
                </Link>
              ))}
            </NavSection>
            <NavSection title={translate('navBar.filieres')}>
              {filiereLinks.map((item) => (
                <button
                  key={item.href}
                  onClick={() => onFiliereClick(item.href)}
                  className="block w-full text-left py-2 text-gray-700 dark:text-gray-300"
                >
                  {translate(item.key)}
                </button>
              ))}
            </NavSection>
            <Link
              to="contact"
              spy
              smooth
              offset={-50}
              duration={500}
              onClick={handleLinkClick}
              activeClass="text-green-600 dark:text-green-400 font-semibold"
              className="block py-2 font-semibold text-gray-800 dark:text-white"
            >
              {translate('navBar.contact')}
            </Link>
            <div
              onClick={toggleTheme}
              className="flex items-center justify-between p-3 bg-gray-100 dark:bg-zinc-800 rounded-lg mt-4"
            >
              <span className="text-gray-700 dark:text-gray-300">
                {isDark ? 'Mode clair' : 'Mode sombre'}
              </span>
              <div className="p-2 text-green-700">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  trigger,
  children,
}: {
  trigger: string;
  children: React.ReactNode;
}) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger className="text-gray-800 dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-zinc-700">
      {trigger}
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <div className="p-2 w-60 space-y-1 bg-white dark:bg-zinc-800 shadow-lg rounded-lg">
        {children}
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

const ScrollLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-80}
    duration={500}
    activeClass="text-green-600 dark:text-green-400 bg-gray-100 dark:bg-zinc-700"
    className="block cursor-pointer text-gray-800 dark:text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700"
  >
    {children}
  </Link>
);

const FiliereLink = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className="block w-full text-left cursor-pointer text-gray-800 dark:text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700"
  >
    {children}
  </button>
);

const NavSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="font-semibold text-gray-900 dark:text-white px-2 mb-1">
      {title}
    </h3>
    <div className="space-y-1 border-l-2 border-gray-200 dark:border-zinc-700 ml-2 pl-4">
      {children}
    </div>
  </div>
);
