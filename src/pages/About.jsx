import React from "react";

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
        <p className="text-gray-700 leading-relaxed text-center">
          Welcome to <span className="font-bold">React Ecommerce</span>! At{" "}
          <span className="font-bold">React Ecommerce</span>, we are passionate
          about [brief description of what your company does or the
          products/services you offer]. Our journey began with a simple idea:
          [mention the inspiration or motivation behind starting the business].
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed text-center">
            <span className="font-bold">React Ecommerce</span> is dedicated to
            [describe the main purpose or mission of your company]. Whether it's
            [mention specific goals, such as providing high-quality products,
            exceptional services, or solving a particular problem], we strive to
            [highlight your commitment and dedication].
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">What Sets Us Apart</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              **Quality:** We take pride in delivering products/services of the
              highest quality. Each [product/service] is crafted with precision
              and care to meet your expectations.
            </li>
            <li className="mb-2">
              **Customer Satisfaction:** Your satisfaction is our priority. We
              go the extra mile to ensure that our customers have a positive
              experience with <span className="font-bold">React Ecommerce</span>
              .
            </li>
            <li>
              **Innovation:** Embracing innovation is part of our DNA. We are
              always exploring new ways to [mention how you stay innovative,
              whether through product development, technology, or other
              aspects].
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Our Team</h3>
          <p className="text-gray-700 leading-relaxed text-center">
            Meet the dedicated individuals behind{" "}
            <span className="font-bold">React Ecommerce</span>. Our team is
            comprised of [mention key roles or departments, e.g., designers,
            engineers, customer support professionals] who are united by a
            shared vision of [mention common values or goals].
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-700">
            We would love to hear from you! Whether you have questions,
            feedback, or simply want to say hello, [provide a call-to-action
            encouraging visitors to contact you]. Your support means the world
            to us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
