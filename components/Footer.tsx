import Link from 'next/link';
import { FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center p-8 border-t border-border mt-auto">
      <div className="flex space-x-6 mb-4">
        <Link href="#" className="text-foreground hover:text-primary transition-colors">
          <FaLinkedin size={24} />
        </Link>
        <Link href="#" className="text-foreground hover:text-primary transition-colors">
          <FaGithub size={24} />
        </Link> 
        <Link href="#" className="text-foreground hover:text-primary transition-colors">
          <FaDribbble size={24} />
        </Link>
      </div>
      <p className="text-sm text-muted-foreground font-serif">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}
