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
                group flex flex-col items-center gap-3 p-4 rounded-2xl border
                transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                ${
                  theme === t
                    ? "border-primary ring-2 ring-primary bg-base-200 shadow-xl scale-105"
                    : "border-base-300 hover:border-primary/40"
                }
              `}
            >

              {/* Theme Preview */}
              <div
                className="w-full rounded-xl overflow-hidden border border-base-300"
                data-theme={t}
              >
                <div className="bg-base-100 p-3 space-y-3">

                  {/* Color Palette */}
                  <div className="flex gap-1">
                    <div className="w-6 h-6 rounded bg-primary"></div>
                    <div className="w-6 h-6 rounded bg-secondary"></div>
                    <div className="w-6 h-6 rounded bg-accent"></div>
                    <div className="w-6 h-6 rounded bg-neutral"></div>
                  </div>

                  {/* Fake Message */}
                  <div className="bg-base-200 rounded-lg p-2 text-left">
                    <div className="h-2 w-16 rounded bg-base-content/40 mb-2"></div>

                    <div className="h-2 w-10 rounded bg-base-content/20"></div>
                  </div>

                  {/* Button Preview */}
                  <div className="btn btn-primary btn-sm w-full pointer-events-none">
                    Preview
                  </div>
                </div>
              </div>

              {/* Theme Name */}
              <span className="text-sm font-semibold capitalize">
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