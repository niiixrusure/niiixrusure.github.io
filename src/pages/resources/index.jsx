import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";

export default function ResourcesPage() {
  return (
    <div className="main-container">
      <div className="body">
        <Header />
        <main className="resources-main">
          <section className="resources-hero">
            <div className="resources-hero-content">
              <h1 className="resources-title">Resource Library</h1>
              <p className="resources-subtitle">
                Comprehensive resources to support neurodivergent individuals and their allies
              </p>
            </div>
          </section>

          <section className="resources-categories">
            <div className="resources-container">
              <h2 className="categories-title">Browse by Category</h2>
              <div className="categories-grid">
                <div className="category-card">
                  <div className="category-icon-container">
                    <div className="education-icon"></div>
                  </div>
                  <h3 className="category-title">Educational Resources</h3>
                  <p className="category-description">
                    Articles, guides, and research about neurodiversity, different neurotypes, and
                    lived experiences.
                  </p>
                  <ul className="category-list">
                    <li className="category-item">Understanding Neurodiversity</li>
                    <li className="category-item">ADHD Resources</li>
                    <li className="category-item">Autism Resources</li>
                    <li className="category-item">Dyslexia & Learning Differences</li>
                  </ul>
                  <a href="#" className="category-link">
                    View All Educational Resources →
                  </a>
                </div>

                <div className="category-card">
                  <div className="category-icon-container">
                    <div className="tools-icon"></div>
                  </div>
                  <h3 className="category-title">Tools & Strategies</h3>
                  <p className="category-description">
                    Practical solutions and strategies for daily life, work, education, and
                    relationships.
                  </p>
                  <ul className="category-list">
                    <li className="category-item">Executive Functioning Tools</li>
                    <li className="category-item">Sensory Management</li>
                    <li className="category-item">Communication Strategies</li>
                    <li className="category-item">Self-Advocacy Resources</li>
                  </ul>
                  <a href="#" className="category-link">
                    View All Tools & Strategies →
                  </a>
                </div>

                <div className="category-card">
                  <div className="category-icon-container">
                    <div className="workplace-icon"></div>
                  </div>
                  <h3 className="category-title">Workplace Resources</h3>
                  <p className="category-description">
                    Resources for neurodivergent professionals and employers seeking to create
                    inclusive workplaces.
                  </p>
                  <ul className="category-list">
                    <li className="category-item">Workplace Accommodations</li>
                    <li className="category-item">Disclosure Guidance</li>
                    <li className="category-item">Employer Best Practices</li>
                    <li className="category-item">Career Development</li>
                  </ul>
                  <a href="#" className="category-link">
                    View All Workplace Resources →
                  </a>
                </div>

                <div className="category-card">
                  <div className="category-icon-container">
                    <div className="support-icon"></div>
                  </div>
                  <h3 className="category-title">Support Networks</h3>
                  <p className="category-description">
                    Connect with community groups, support services, and professional resources.
                  </p>
                  <ul className="category-list">
                    <li className="category-item">Online Communities</li>
                    <li className="category-item">Local Support Groups</li>
                    <li className="category-item">Professional Services Directory</li>
                    <li className="category-item">Family & Caregiver Support</li>
                  </ul>
                  <a href="#" className="category-link">
                    View All Support Networks →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="resources-featured">
            <div className="resources-container">
              <h2 className="featured-title">Featured Resources</h2>
              <div className="featured-grid">
                <article className="featured-card">
                  <div className="featured-image guide-image"></div>
                  <div className="featured-content">
                    <div className="featured-tag">Guide</div>
                    <h3 className="featured-card-title">Understanding Your Neurodivergent Brain</h3>
                    <p className="featured-description">
                      A comprehensive guide to different neurotypes, cognitive styles, and how to
                      work with your unique brain wiring.
                    </p>
                    <a href="#" className="featured-link">
                      Read Guide →
                    </a>
                  </div>
                </article>

                <article className="featured-card">
                  <div className="featured-image toolkit-image"></div>
                  <div className="featured-content">
                    <div className="featured-tag">Toolkit</div>
                    <h3 className="featured-card-title">Executive Functioning Toolkit</h3>
                    <p className="featured-description">
                      Practical strategies, apps, and tools to support planning, organization, time
                      management, and task completion.
                    </p>
                    <a href="#" className="featured-link">
                      Access Toolkit →
                    </a>
                  </div>
                </article>

                <article className="featured-card">
                  <div className="featured-image webinar-image"></div>
                  <div className="featured-content">
                    <div className="featured-tag">Webinar</div>
                    <h3 className="featured-card-title">Neurodiversity in the Workplace</h3>
                    <p className="featured-description">
                      Expert panel discussion on disclosure, accommodations, and thriving as a
                      neurodivergent professional.
                    </p>
                    <a href="#" className="featured-link">
                      Watch Webinar →
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="resources-contribute">
            <div className="resources-container">
              <div className="contribute-content">
                <h2 className="contribute-title">Contribute to Our Resource Library</h2>
                <p className="contribute-description">
                  Share your expertise, experiences, or resources to help others in the
                  neurodivergent community
                </p>
                <div className="contribute-buttons">
                  <a href="#" className="contribute-button primary">
                    Submit a Resource
                  </a>
                  <a href="#" className="contribute-button secondary">
                    Learn More
                  </a>
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
