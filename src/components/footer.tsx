import Link from "next/link";
import Image from "next/image";
import { GitBranchIcon, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/avatar.png"
              alt="Titouan Jego"
              width={32}
              height={32}
              className="rounded-full border border-primary/20"
            />
            <span className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Titouan Jego. Tous droits réservés.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <GitBranchIcon size={18} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="/contact"
              className="h-9 w-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Contact"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
