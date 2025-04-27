import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";

export default function CommunityPage() {
  return (
    <div className="main-container">
      <div className="body">
        <Header />
        <main className="community-main">
          <section className="community-hero">
            <div className="community-hero-content">
              <h1 className="community-title">Our Community</h1>
              <p className="community-subtitle">
                Connect with others who understand your experiences and celebrate neurodiversity
                together
              </p>
            </div>
          </section>

          <section className="community-intro">
            <div className="community-container">
              <div className="intro-content">
                <div className="intro-text">
                  <h2 className="intro-title">A Place to Belong</h2>
                  <p className="intro-paragraph">
                    Our community is a safe, supportive space where neurodivergent individuals and
                    allies can connect, share experiences, and learn from one another. We believe in
                    the power of community to foster understanding, acceptance, and growth.
                  </p>
                  <p className="intro-paragraph">
                    Whether you're seeking advice, looking to share your story, or simply want to
                    connect with others who understand your experiences, you'll find a welcoming
                    home here.
                  </p>
                </div>
                <div className="intro-image"></div>
              </div>
            </div>
          </section>

          <section className="community-events">
            <div className="community-container">
              <h2 className="events-title">Upcoming Events</h2>
              <p className="events-description">
                Join virtual and in-person events to connect, learn, and grow with our community
              </p>

              <div className="events-list">
                <div className="event-card">
                  <div className="event-date">
                    <span className="date-number">15</span>
                    <span className="date-month">May</span>
                  </div>
                  <div className="event-details">
                    <h3 className="event-title">Virtual Coffee Chat: Sensory Experiences</h3>
                    <p className="event-time">7:00 PM - 8:30 PM EST • Online</p>
                    <p className="event-description">
                      Join us for a casual discussion about sensory experiences, sensitivities, and
                      coping strategies.
                    </p>
                  </div>
                  <a href="#" className="event-rsvp">
                    RSVP
                  </a>
                </div>

                <div className="event-card">
                  <div className="event-date">
                    <span className="date-number">22</span>
                    <span className="date-month">May</span>
                  </div>
                  <div className="event-details">
                    <h3 className="event-title">Webinar: Neurodiversity in the Workplace</h3>
                    <p className="event-time">1:00 PM - 2:30 PM EST • Online</p>
                    <p className="event-description">
                      Expert panel discussion on disclosure, accommodations, and thriving as a
                      neurodivergent professional.
                    </p>
                  </div>
                  <a href="#" className="event-rsvp">
                    RSVP
                  </a>
                </div>

                <div className="event-card">
                  <div className="event-date">
                    <span className="date-number">5</span>
                    <span className="date-month">Jun</span>
                  </div>
                  <div className="event-details">
                    <h3 className="event-title">In-Person Meetup: New York City</h3>
                    <p className="event-time">3:00 PM - 5:00 PM EST • Central Park</p>
                    <p className="event-description">
                      Join us for a relaxed outdoor gathering with fellow community members in the
                      NYC area.
                    </p>
                  </div>
                  <a href="#" className="event-rsvp">
                    RSVP
                  </a>
                </div>
              </div>

              <div className="events-calendar">
                <a href="#" className="calendar-link">
                  View Full Event Calendar →
                </a>
              </div>
            </div>
          </section>

          <section className="community-join">
            <div className="community-container">
              <div className="join-content">
                <h2 className="join-title">Join Our Community</h2>
                <p className="join-description">
                  Create an account to participate in discussions, join groups, and connect with
                  others
                </p>
                <div className="join-buttons">
                  <a href="#" className="join-button primary">
                    Create Account
                  </a>
                  <a href="#" className="join-button secondary">
                    Learn More
                  </a>
                </div>
                <p className="join-note">
                  Already have an account?{" "}
                  <a href="#" className="login-link">
                    Log In
                  </a>
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
