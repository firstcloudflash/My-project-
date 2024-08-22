import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Blendify365</h1>
      <p className="mb-8">Your go-to platform for ebooks, services, and more.</p>
      <nav>
        <ul className="space-y-4">
          <li><Link href="/ebooks"><a className="text-blue-600 underline">Ebooks</a></Link></li>
          <li><Link href="/coloring-pages"><a className="text-blue-600 underline">Coloring Pages</a></Link></li>
          <li><Link href="/services"><a className="text-blue-600 underline">Services</a></Link></li>
          <li><Link href="/blog"><a className="text-blue-600 underline">Blog</a></Link></li>
          <li><Link href="/affiliate-products"><a className="text-blue-600 underline">Affiliate Products</a></Link></li>
          <li><Link href="/wallpapers"><a className="text-blue-600 underline">Wallpapers</a></Link></li>
        </ul>
      </nav>
    </div>
  );
    }
    
