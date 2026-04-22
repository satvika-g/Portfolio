export function Footer() {
  return (
    <footer className="w-full bg-black py-12 border-t border-white/5">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-2">
          <div className="text-2xl font-serif italic text-white">Satvika</div>
          <p className="text-sm text-gray-500 font-light">AI & ML student building real-world systems.</p>
        </div>
        
        <div className="text-sm text-gray-600 font-light">
          © 2025 Satvika. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
