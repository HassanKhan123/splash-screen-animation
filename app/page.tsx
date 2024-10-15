import SplashScreen from "@/components/SplashScreenAnimation";
import HighlightText from "@/components/SplashScreenAnimation";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Add content at the top */}

      {/* Highlight Text Component */}
      <SplashScreen />

      {/* Main content (will be shown after splash screen disappears) */}
      <main style={{ padding: "50px", textAlign: "center" }}>
        <h1>Welcome to the website</h1>
        <p>This is the main content of your page.</p>
      </main>
    </main>
  );
}
