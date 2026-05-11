import React, { createContext, useContext } from "react";

type Lang = "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (es: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (_es, en) => en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value: LanguageContextType = {
    lang: "en",
    setLang: () => {},
    t: (_es, en) => en,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
