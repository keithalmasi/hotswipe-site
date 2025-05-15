// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-6 px-8 mt-auto flex flex-col items-center space-y-4">
      <div>
        <a
          href="https://x.com/hotcoinsol"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-lg font-bitcoin"
        >
          Follow us on X (Twitter)
        </a>
      </div>
      <div className="text-sm">
        &copy; {new Date().getFullYear()} HotSwipe | Powered by Hotcoin
      </div>
    </footer>
  );
}

        {/* Add more social links here if needed */}
      </div>
    </footer>
  );
}
