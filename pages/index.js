'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <div>
          <h1 className="text-2xl font-bold">CalcioNews</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/">
            <a className="text-blue-600 hover:underline">Home</a>
          </Link>
          <Link href="/notizie">
            <a className="text-blue-600 hover:underline">Notizie</a>
          </Link>
          <Link href="/livescore">
            <a className="text-blue-600 hover:underline">Livescore</a>
          </Link>
        </nav>
      </header>

      <main className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Ultime Notizie</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder per card notizie */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold">Titolo Notizia</h3>
            <p className="text-sm text-gray-600">Anteprima contenuto notizia...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
