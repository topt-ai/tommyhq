/**
 * Runs before paint to set data-theme from the saved choice, falling back to
 * the OS preference, then dark. Prevents a flash of the wrong theme.
 */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
