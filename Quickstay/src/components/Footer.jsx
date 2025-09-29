import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className="bg-[#F6F9FC] text-gray-500/80 pt-8 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32">
  <div className="flex flex-wrap justify-between gap-10 md:gap-6">
    {/* Logo & Description */}
    <div className="max-w-xs flex-shrink-0">
      <img
        src={assets.logo}
        alt="logo"
        className="mb-4 h-8 md:h-9 invert opacity-80"
      />
      <p className="text-sm">
        Discover the world's most extraordinary place to stay, from boutique hotels to luxury villas and private islands.
      </p>
      <div className="flex items-center gap-3 mt-4">
        <img src={assets.instagramIcon} alt="Instagram" className="w-6" loading="lazy" />
        <img src={assets.facebookIcon} alt="Facebook" className="w-6" loading="lazy" />
        <img src={assets.twitterIcon} alt="Twitter" className="w-6" loading="lazy" />
        <img src={assets.linkendinIcon} alt="LinkedIn" className="w-6" loading="lazy" />
      </div>
    </div>

    {/* Company Links */}
    <div className="min-w-[120px]">
      <p className="font-playfair text-lg text-gray-800 font-semibold">COMPANY</p>
      <ul className="mt-3 flex flex-col gap-2 text-sm">
        {['About', 'Careers', 'Press', 'Blog', 'Partners'].map((item) => (
          <li key={item}>
            <a href="#" className="hover:underline">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Support Links */}
    <div className="min-w-[140px]">
      <p className="font-playfair text-lg text-gray-800 font-semibold">SUPPORT</p>
      <ul className="mt-3 flex flex-col gap-2 text-sm">
        {[
          'Help Center',
          'Safety Information',
          'Cancellation Options',
          'Contact Us',
          'Accessibility',
        ].map((item) => (
          <li key={item}>
            <a href="#" className="hover:underline">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Newsletter Subscription */}
    <div className="max-w-xs flex-shrink-0">
      <p className="text-lg text-gray-800 font-semibold">STAY UPDATED</p>
      <p className="mt-3 text-sm">
        Subscribe to our newsletter for inspiration and special offers.
      </p>
      <form className="flex items-center mt-4 max-w-sm" onSubmit={e => e.preventDefault()}>
        <input
          type="email"
          aria-label="Email address"
          required
          className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none w-full text-gray-900 placeholder-gray-400"
          placeholder="Your email"
        />
        <button
          type="submit"
          className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r hover:bg-gray-900 transition-colors"
          aria-label="Subscribe"
        >
          <img
            src={assets.arrowIcon}
            alt="Subscribe arrow"
            className="w-3.5 invert"
            loading="lazy"
          />
        </button>
      </form>
    </div>
  </div>

  <hr className="border-gray-300 mt-8" />

  <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm text-gray-600">
    <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>
    <ul className="flex items-center gap-4">
      {['Privacy', 'Terms', 'Sitemap'].map((item) => (
        <li key={item}>
          <a href="#" className="hover:underline">{item}</a>
        </li>
      ))}
    </ul>
  </div>
</div>

  )
}

export default React.memo(Footer)
