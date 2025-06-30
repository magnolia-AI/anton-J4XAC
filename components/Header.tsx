import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-border">
      <Link href="/" className="text-2xl font-serif font-bold text-foreground">
        Your Name
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors font-serif">
          Portfolio
        </Link>
        <Link href="/about" className="text-foreground hover:text-primary transition-colors font-serif">
          About
        </Link>
        <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-serif">
          Contact
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
