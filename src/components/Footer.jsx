import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { useState } from "react";

const socialLinks = [
  { href: "https://discord.com", label: "Discord", icon: FaDiscord },
  { href: "https://twitter.com", label: "Twitter", icon: FaTwitter },
  { href: "https://youtube.com", label: "YouTube", icon: FaYoutube },
  { href: "https://medium.com", label: "Medium", icon: FaMedium },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // replace with a proper integration later (API / Mailchimp / etc)
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return alert("Please enter a valid email address.");
    }
    // temporary feedback to user
    setEmail("");
    alert("Thanks — we'll send you the occasional update.");
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 text-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand / Short blurb */}
          <div className="max-w-sm">
            <a href="/" className="inline-flex items-center gap-2 text-2xl font-extrabold text-gray-900">
              <span className="sr-only">Nexus</span>
              <span className="special-font">Nexus</span>
            </a>
            <p className="mt-2 text-sm text-gray-600">
              Building the Metagame Layer — play economies, human-centered UX, and unnecessary spectacle.
            </p>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Icon className="h-4 w-4 transition-colors duration-150 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-4 md:flex-row md:items-start md:gap-12">
            <div>
              <h4 className="text-sm font-semibold text-gray-700">Explore</h4>
              <ul className="mt-3 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700">Company</h4>
              <ul className="mt-3 flex flex-col gap-2">
                <li>
                  <a href="/careers" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/press" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Newsletter */}
          <div className="w-full max-w-xs">
            <h4 className="text-sm font-semibold text-gray-700">Newsletter</h4>
            <p className="mt-2 text-sm text-gray-600">Short, infrequent updates about launches and experiments.</p>

            <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@place.com"
                className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Subscribe to newsletter"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-400">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">© Nexus {year}. All rights reserved.</p>

            <div className="text-xs text-gray-500">
              Built with care — and a suspicious amount of coffee.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
