import { Link, NavLink } from "react-router-dom";

const Components = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <nav className="px-10 py-6 flex items-center gap-6 border-b border-neutral-800">
        <Link to="/" className="text-neutral-400 hover:text-white text-sm font-['Outfit']">← Home</Link>
        <h1 className="text-neutral-400 text-sm font-['Outfit']">Components</h1>
      </nav>

      <div className="flex">
        <aside className="w-64 border-r border-neutral-800 min-h-[calc(100vh-65px)] p-6">
          <p className="text-neutral-500 text-xs uppercase tracking-wider font-['Outfit'] mb-4">Categories</p>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/components/service-areas"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${
                    isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`
                }
              >
                Service Areas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/components/faq"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${
                    isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/components/cta"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${
                    isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`
                }
              >
                CTA
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/components/hero"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${
                    isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`
                }
              >
                Hero
              </NavLink>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-10">
          <h2 className="text-2xl font-['DM_Serif_Display'] mb-2">Components</h2>
          <p className="text-neutral-400 font-['Outfit']">Pick a category from the sidebar.</p>
        </main>
      </div>
    </div>
  );
};

export default Components;
