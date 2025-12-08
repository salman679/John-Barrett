"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 to-royal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-navy-100 leading-relaxed">
              Ready to accelerate your leadership journey? Schedule a
              complimentary strategy session or reach out with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-navy-600 leading-relaxed mb-8">
                  I'm here to help you transform your leadership. Choose the
                  best way to connect.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-royal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:info@johnbarrettleadership.com"
                      className="text-navy-600 hover:text-royal-600"
                    >
                      info@johnbarrettleadership.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-royal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+1234567890"
                      className="text-navy-600 hover:text-royal-600"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-royal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 mb-1">
                      Location
                    </div>
                    <div className="text-navy-600">
                      Serving clients worldwide
                      <br />
                      Virtual & In-Person
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-royal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 mb-1">
                      Response Time
                    </div>
                    <div className="text-navy-600">Within 24 hours</div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-royal-50 to-navy-50 border-2 border-royal-100">
                <Calendar className="h-8 w-8 text-royal-600 mb-4" />
                <h3 className="text-lg font-display font-bold text-navy-900 mb-2">
                  Book a Strategy Call
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Schedule a free 30-minute consultation to discuss your
                  leadership goals.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-royal-600 font-semibold hover:text-royal-700"
                >
                  View Calendar
                  <Calendar className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-navy-900 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-navy-900 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-navy-900 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-navy-900 mb-2"
                      >
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-navy-900 mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="leadership-coaching">
                        Leadership Coaching
                      </option>
                      <option value="executive-coaching">
                        Executive Coaching
                      </option>
                      <option value="workshops">Workshops & Training</option>
                      <option value="keynote">Keynote Speaking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-navy-900 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your leadership goals and how I can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
