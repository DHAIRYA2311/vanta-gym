import { content } from '../../data/content';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background pt-32 pb-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="font-sans font-bold text-2xl tracking-widest uppercase mb-4">
                {content.brand.name}
              </h3>
              <p className="text-secondary text-sm tracking-wide">
                {content.brand.tagline}
              </p>
            </div>
            
            <div className="hidden lg:block mt-auto pt-12 text-secondary text-xs tracking-wider">
              &copy; {new Date().getFullYear()} {content.brand.name}. ALL RIGHTS RESERVED.
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-secondary mb-2 uppercase">Explore</h4>
            {['THE CLUB', 'TRAINING', 'COACHES', 'MEMBERSHIP', 'CONTACT'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm tracking-widest hover:text-accent transition-colors w-fit"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-secondary mb-2 uppercase">Location</h4>
              <p className="text-sm tracking-widest text-primary whitespace-pre-line">
                {content.contact.address}
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-secondary mb-2 uppercase">Contact</h4>
              <a href={`tel:${content.contact.phone.replace(/\s/g, '')}`} className="text-sm tracking-widest hover:text-accent transition-colors">
                {content.contact.phone}
              </a>
              <a href={`mailto:${content.contact.email}`} className="text-sm tracking-widest hover:text-accent transition-colors">
                {content.contact.email}
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-secondary mb-2 uppercase">Social</h4>
              <div className="flex gap-6">
                {content.social.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url}
                    className="text-sm tracking-widest hover:text-accent transition-colors flex items-center gap-1 group"
                  >
                    {social.name}
                    <ArrowRight className="w-3 h-3 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="lg:hidden text-secondary text-[10px] tracking-wider border-t border-border pt-8">
          &copy; {new Date().getFullYear()} {content.brand.name}. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
