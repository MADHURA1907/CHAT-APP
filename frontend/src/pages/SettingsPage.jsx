import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen container mx-auto px-4 pt-20 max-w-6xl">
      <div className="space-y-8">
        
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold">Theme Settings</h2>
          <p className="text-base-content/70 mt-2">
            Customize the appearance of your chat app
          </p>
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {THEMES.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`
                group flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all duration-300
                hover:scale-105
                ${
                  theme === t
                    ? "border-primary bg-base-200 shadow-lg"
                    : "border-base-300 hover:border-primary/40"
                }
              `}
            >
              {/* Theme Preview */}
              <div
                className="w-full rounded-xl overflow-hidden"
                data-theme={t}
              >
                <div className="grid grid-cols-4 gap-1 p-2 bg-base-100">
                  <div className="h-8 rounded bg-primary"></div>
                  <div className="h-8 rounded bg-secondary"></div>
                  <div className="h-8 rounded bg-accent"></div>
                  <div className="h-8 rounded bg-neutral"></div>
                </div>
              </div>

              {/* Theme Name */}
              <span className="text-sm font-medium capitalize">
                {t}
              </span>

              {/* Active Badge */}
              {theme === t && (
                <div className="badge badge-primary badge-sm">
                  Active
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;