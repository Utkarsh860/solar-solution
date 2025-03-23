
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}
const Footer7 = ({
  logo = {
    url: "/",
    src: "/logo.svg",
    alt: "logo",
    title: "Solar Solution",
  },
}: Footer7Props) => {
  return (
    <section className="py-16 w-full">
      <div className="flex md:block justify-center w-full">
        <footer>
          <div className="flex flex-col items-start justify-between gap-12 text-left md:flex-row lg:text-left px-8">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-3 lg:items-start">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start ">
                <a href="https://shadcnblocks.com">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-12"
                    width={32}
                    height={32}
                  />
                </a>
                <h2 className="text-3xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent font-bold">
                  {logo.title}
                </h2>
              </div>
              <p className="text-md font-semibold text-neutral-500">
                Switch to Solar & Save More!
              </p>
            
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-white">
                  <a href="#">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-white">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-white">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-white">
                  <a href="#">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <p className="text-3xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent font-bold">
                  Call-to-Action
                </p>
              </div>
              <p className="text-sm text-neutral-500">
                Join thousands who are benefiting from solar energy.
              </p>
              <div className="flex gap-2 flex-col sm:flex-row w-full">
                <button
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 w-full md:w-[fit-content] hover:opacity-80 cursor-pointer"
                  onClick={() => {
                    alert("Get a Free Consult");
                  }}
                >
                  Get a Free Consult
                </button>
                <button
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 text-black
                  bg-white px-6 font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 w-full md:w-[fit-content] hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] hover:bg-[length:200%_100%] hover:text-slate-400 cursor-pointer"
                  onClick={() => {
                    alert("Get a Free Consult");
                  }}
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left px-8">
            <p>© 2024 Solar Solution | All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-white">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="hover:text-white">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer7 };
