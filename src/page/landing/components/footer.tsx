import Logo from '@/assets/Logo/asja-logo.png';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-scroll';

const asjaPosition: [number, number] = [-19.814068, 47.070135];

const FooterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      {title}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const InfoItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-500 transition-colors">
      <span className="text-green-700 dark:text-green-500">{icon}</span>
      <span>{text}</span>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

const QuickLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-80}
    duration={500}
    className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-500 transition-colors"
  >
    {children}
  </Link>
);

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-white border-t-2 border-gray-200 dark:border-zinc-800"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              className="h-24 w-24 mb-4"
              src={Logo}
              alt="Logo de l'université ASJA"
            />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Université ASJA
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Formation d'excellence pour un avenir brillant.
            </p>
          </div>

          {/* Quick Links Section */}
          <FooterSection title="Liens Rapides">
            <QuickLink to="mission">Notre Mission</QuickLink>
            <QuickLink to="filiere">Nos Filières</QuickLink>
            <QuickLink to="events">Événements</QuickLink>
            <QuickLink to="temoignages">Témoignages</QuickLink>
          </FooterSection>

          {/* Contact Info Section */}
          <FooterSection title="Contactez-nous">
            <InfoItem icon={<Phone size={20} />} text="034 49 483 19" />
            <InfoItem
              icon={<Mail size={20} />}
              text="asja@moov.mg"
              href="mailto:asja@moov.mg"
            />
            <InfoItem
              icon={<MapPin size={20} />}
              text="Antsaha, Antsirabe, Madagascar"
            />
            <InfoItem
              icon={<Facebook size={20} />}
              text="Suivez-nous sur Facebook"
              href="https://www.facebook.com/UniversiteASJA"
            />
          </FooterSection>

          {/* Map Section */}
          <div className="w-full h-64 md:h-full rounded-2xl overflow-hidden shadow-lg">
            <MapContainer
              className="w-full h-full z-10"
              center={asjaPosition}
              zoom={15}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={asjaPosition}>
                <Popup>Athénée Saint Joseph Antsirabe</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="bg-gray-200 dark:bg-zinc-800 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Université ASJA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
