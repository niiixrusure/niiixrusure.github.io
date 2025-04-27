import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";

export default function AboutUsPage() {
  return (
    <div className="main-container">
      <div className="body">
        <Header />
        <main className="about-main">
          <section className="about-hero">
            <div className="about-hero-content">
              <h1 className="about-title">About Intun</h1>
              <p className="about-subtitle">
                Our mission is to empower neurodivergent individuals through understanding,
                connection, and resources
              </p>
            </div>
          </section>

          <section className="about-story">
            <div className="about-container">
              <div className="story-content">
                <div className="story-image"></div>
                <div className="story-text">
                  <h2 className="story-title">Our Story</h2>
                  <p className="story-paragraph">
                    Intun was founded in 2023 by a group of neurodivergent individuals and allies
                    who recognized the need for a comprehensive, supportive platform that celebrates
                    neurodiversity rather than treating it as something to be fixed.
                  </p>
                  <p className="story-paragraph">
                    Our founders experienced firsthand the challenges of navigating a world designed
                    primarily for neurotypical minds. They also recognized the incredible strengths
                    and unique perspectives that come with different neurotypes.
                  </p>
                  <p className="story-paragraph">
                    What began as a small community forum has grown into a comprehensive resource
                    hub and support network, serving thousands of neurodivergent individuals and
                    their families worldwide.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-mission">
            <div className="about-container">
              <h2 className="mission-title">Our Mission & Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon-container">
                    <div className="value-icon celebration-icon"></div>
                  </div>
                  <h3 className="value-title">Celebration</h3>
                  <p className="value-description">
                    We celebrate neurodiversity as a natural and valuable form of human diversity,
                    focusing on strengths rather than deficits.
                  </p>
                </div>

                <div className="value-card">
                  <div className="value-icon-container">
                    <div className="value-icon empowerment-icon"></div>
                  </div>
                  <h3 className="value-title">Empowerment</h3>
                  <p className="value-description">
                    We provide tools, resources, and community support to help neurodivergent
                    individuals thrive on their own terms.
                  </p>
                </div>

                <div className="value-card">
                  <div className="value-icon-container">
                    <div className="value-icon inclusion-icon"></div>
                  </div>
                  <h3 className="value-title">Inclusion</h3>
                  <p className="value-description">
                    We advocate for a world that accommodates and values all types of minds and ways
                    of being.
                  </p>
                </div>

                <div className="value-card">
                  <div className="value-icon-container">
                    <div className="value-icon authenticity-icon"></div>
                  </div>
                  <h3 className="value-title">Authenticity</h3>
                  <p className="value-description">
                    We encourage everyone to embrace their authentic selves without masking or
                    conforming to neurotypical expectations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-team">
            <div className="about-container">
              <h2 className="team-title">Our Team</h2>
              <p className="team-description">
                Our diverse team includes neurodivergent individuals, mental health professionals,
                educators, and advocates who bring their unique perspectives and expertise to our
                platform.
              </p>
              <div className="team-grid">
                <div className="team-member">
                  <div className="member-image member-1"></div>
                  <h3 className="member-name">Alex Morgan</h3>
                  <p className="member-role">Founder & Executive Director</p>
                  <p className="member-bio">
                    Alex (they/them) is autistic and has ADHD. They founded Intun after experiencing
                    the transformative power of neurodiversity-affirming communities.
                  </p>
                </div>

                <div className="team-member">
                  <div className="member-image member-2"></div>
                  <h3 className="member-name">Dr. Maya Patel</h3>
                  <p className="member-role">Research Director</p>
                  <p className="member-bio">
                    Dr. Patel (she/her) is a neurodevelopmental psychologist who specializes in
                    strength-based approaches to neurodiversity.
                  </p>
                </div>

                <div className="team-member">
                  <div className="member-image member-3"></div>
                  <h3 className="member-name">James Wilson</h3>
                  <p className="member-role">Community Manager</p>
                  <p className="member-bio">
                    James (he/him) has dyslexia and is passionate about creating accessible,
                    supportive spaces for neurodivergent individuals.
                  </p>
                </div>

                <div className="team-member">
                  <div className="member-image member-4"></div>
                  <h3 className="member-name">Sophia Chen</h3>
                  <p className="member-role">Content Director</p>
                  <p className="member-bio">
                    Sophia (she/her) is an ADHD advocate and educator who oversees our resource
                    library and educational content.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-contact">
            <div className="about-container">
              <div className="contact-content">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                  We'd love to hear from you! Whether you have questions, feedback, or would like to
                  collaborate, our team is here to help.
                </p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon email-icon"></div>
                    <h3 className="method-title">Email Us</h3>
                    <p className="method-detail">hello@intun.org</p>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon form-icon"></div>
                    <h3 className="method-title">Contact Form</h3>
                    <a href="#" className="method-link">
                      Fill out our contact form
                    </a>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon social-icon"></div>
                    <h3 className="method-title">Social Media</h3>
                    <div className="social-links">
                      <a href="#" className="social-link">
                        Twitter
                      </a>
                      <a href="#" className="social-link">
                        Instagram
                      </a>
                      <a href="#" className="social-link">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
