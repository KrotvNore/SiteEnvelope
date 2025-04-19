import React from "react";

export const Element = (): JSX.Element => {
  // Social links data for mapping
  const socialLinks = [
    { name: "behance", url: "#" },
    { name: "linkedin", url: "#" },
    { name: "telegram", url: "#" },
  ];

  return (
    <main className="bg-white flex justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px] h-[800px] relative px-12">
        <header className="mt-[74px]">
          <h1 className="font-normal italic text-[32px] text-black font-inter">
            Я веб дизайнер
          </h1>
          <h2 className="mt-[35px] font-bold text-xl text-black font-inter">
            опыт 2года+
          </h2>
        </header>

        <nav className="mt-[155px]">
          <ul className="flex flex-col gap-7">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="font-normal text-black text-xl underline font-inter"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <img
          className="absolute w-[220px] h-[220px] bottom-0 right-0 object-cover"
          alt="Element"
          src="/cat.gif"
        />
      </div>
    </main>
  );
};
