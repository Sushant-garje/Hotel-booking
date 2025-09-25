import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Globe, Shield, Code, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 pb-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="min-h-screen bg-gray-100 rounded-3xl px-6 md:px-16 lg:px-32 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to{" "}
            <span style={{ color: "var(--color-secondary)" }}>QuickStay</span>,
            your trusted hotel booking companion. We make finding and booking
            your perfect stay easier, faster, and more reliable.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-md rounded-2xl p-8"
          >
            <h2
              className="text-2xl font-semibold mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide travelers with a seamless and enjoyable booking
              experience by offering a wide range of hotels, transparent pricing,
              and secure payment options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-md rounded-2xl p-8"
          >
            <h2
              className="text-2xl font-semibold mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted hotel booking platform in India by
              empowering users with choice, affordability, and peace of mind
              whenever they travel.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold mb-8 text-center"
          style={{ color: "var(--color-primary)" }}
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <Building2
              size={36}
              style={{ color: "var(--color-secondary)" }}
              className="mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Wide Choice</h3>
            <p className="text-gray-600 text-sm">
              From budget stays to luxury hotels, we cover every traveler’s
              need.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <Users
              size={36}
              style={{ color: "var(--color-secondary)" }}
              className="mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Customer First</h3>
            <p className="text-gray-600 text-sm">
              Our platform is designed to make your journey stress-free.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <Globe
              size={36}
              style={{ color: "var(--color-secondary)" }}
              className="mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
            <p className="text-gray-600 text-sm">
              Book from anywhere, anytime, with our user-friendly interface.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <Shield
              size={36}
              style={{ color: "var(--color-secondary)" }}
              className="mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600 text-sm">
              Your transactions are 100% safe and encrypted with us.
            </p>
          </div>
        </div>

        {/* Made By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Made By
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white shadow-md rounded-2xl p-6 w-60">
              <Code
                size={36}
                style={{ color: "var(--color-secondary)" }}
                className="mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold mb-1">Sushant Garje</h3>
              <p className="text-gray-600 text-sm">Full Stack Developer</p>
            </div>
            {/* You can add more team members like this */}
            {/* <div className="bg-white shadow-md rounded-2xl p-6 w-60">
              <Code size={36} style={{ color: "var(--color-secondary)" }} className="mx-auto mb-3"/>
              <h3 className="text-lg font-semibold mb-1">Teammate Name</h3>
              <p className="text-gray-600 text-sm">Role</p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}