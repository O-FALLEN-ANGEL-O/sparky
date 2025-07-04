import Link from 'next/link';
import { Logo } from '../logo';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <nav className="flex flex-wrap gap-4 md:gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JewelKart Ultra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
