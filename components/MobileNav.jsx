"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Resume", href: "/resume" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Add hidden DialogTitle */}
                <VisuallyHidden>
                    <SheetTitle>Mobile Navigation</SheetTitle>
                </VisuallyHidden>

                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            SafOne<span className="text-accent">&lt;/&gt;</span>
                        </h1>
                    </Link>
                </div>

                {/* Links */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.href}
                            key={index}
                            className={`${link.href === pathname &&
                                "text-accent border-b-2 border-accent"
                                } text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
