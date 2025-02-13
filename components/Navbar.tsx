import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "sticky h-14 inset-x-0 top-0 z-30 border-b border-gray-200 bg-white/40 backdrop-blur-lg transition-all"
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex z-40 justify-center items-center gap-1"
          >
            <Image
              src="/logo.png"
              alt="convo logo"
              width={50}
              height={50}
              quality={100}
              className="w-7 h-7"
            />
            <span className="text-2xl font-semibold">Receptionist</span>
          </Link>

          <Link
            className={buttonVariants({
              size: "sm",
            })}
            target="_blank"
            href="https://forms.gle/8gSpBysFKZxqSKGk7"
          >
            Get started
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;