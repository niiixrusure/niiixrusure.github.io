import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="body">
        <Header />
        <main>
          <section className="div-5">
            <h1 className="embrace-your-unique-mind">Embrace Your Unique Mind</h1>
            <div className="div-6">
              <p className="a-welcoming-space">
                A welcoming space for neurodivergent individuals, families, and allies to learn,
                connect, and thrive together.
              </p>
              <div className="div-7">
                <Link to="/personality-test" className="button">
                  <span className="take-the-personality-test">Take the Personality Test</span>
                </Link>
                <Link to="/resources" className="button-8">
                  <span className="explore-resources">Explore Resources</span>
                </Link>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="div-9">
              <div className="div-a">
                <div className="div-b">
                  <div className="div-c">
                    <div className="icon">
                      <div className="svg">
                        <div className="frame-d" />
                      </div>
                    </div>
                  </div>
                  <div className="heading">
                    <h2 className="know-yourself">Know Yourself</h2>
                  </div>
                  <div className="div-e">
                    <p className="personality-test-f">Complete a personality test to understand</p>
                    <p className="self-awareness">who you really are.</p>
                  </div>
                </div>
                <div className="div-10">
                  <div className="div-11">
                    <div className="icon-12">
                      <div className="svg-13">
                        <div className="frame-14" />
                      </div>
                    </div>
                  </div>
                  <div className="heading-15">
                    <h2 className="learn-understand">Learn & Understand</h2>
                  </div>
                  <div className="div-16">
                    <p className="empowering-info">Access clear, empowering information about</p>
                    <p className="neurotypes">different neurotypes, focusing on strengths</p>
                    <p className="lived-experiences">and lived experiences.</p>
                  </div>
                </div>
                <div className="div-17">
                  <div className="div-18">
                    <div className="icon-19">
                      <div className="svg-1a">
                        <div className="frame-1b" />
                      </div>
                    </div>
                  </div>
                  <div className="heading-1c">
                    <h2 className="discover-grow">Discover & Grow</h2>
                  </div>
                  <div className="explore-tools">
                    <p className="explore-cognitive-style">
                      Explore tools and strategies tailored to your
                    </p>
                    <p className="unique-preferences">unique cognitive style and preferences.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-1d">
            <div className="div-1e">
              <div className="div-1f">
                <div className="div-20">
                  <h2 className="personality-test-21">Personality Test</h2>
                  <p className="discover-personality">
                    Discover your personality within small amount of time.
                  </p>
                </div>
                <div className="div-22">
                  <div className="div-23">
                    <div className="div-24">
                      <h3 className="personality-test-25">Personality Test</h3>
                      <p className="private-test">5-10 minutes • Private</p>
                    </div>
                    <Link to="/personality-test" className="button-26">
                      <span className="start-now">Start Now</span>
                    </Link>
                  </div>
                  <div className="div-27">
                    <div className="div-28">
                      <p className="personality-diagnosis">
                        This is not a diagnosis. This test is supposed to show you your type of
                        personality.
                      </p>
                      <div className="frame-29">
                        <div className="frame-2a" />
                      </div>
                    </div>
                    <div className="div-2b">
                      <p className="privacy-message">
                        Your privacy is important. All responses are confidential and stored
                        securely.
                      </p>
                      <div className="frame-2c">
                        <div className="frame-2d" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-2e">
            <div className="div-2f">
              <div className="div-30">
                <h2 className="resource-library">Resource Library</h2>
                <p className="curated-resources">Curated resources to support your journey</p>
              </div>
              <div className="div-31">
                <div className="div-32">
                  <div className="div-33">
                    <div className="i">
                      <div className="svg-34">
                        <div className="frame-35" />
                      </div>
                    </div>
                  </div>
                  <div className="h">
                    <h3 className="educational-resources">Educational Resources</h3>
                  </div>
                  <div className="p">
                    <p className="learning-materials">Guides, articles, and learning materials</p>
                  </div>
                  <div className="span">
                    <Link to="/resources" className="browse-resources">
                      Browse Resources →
                    </Link>
                  </div>
                </div>
                <div className="div-36">
                  <div className="div-37">
                    <div className="i-38">
                      <div className="svg-39">
                        <div className="frame-3a" />
                      </div>
                    </div>
                  </div>
                  <div className="h-3b">
                    <h3 className="tools-strategies">Tools & Strategies</h3>
                  </div>
                  <div className="practical-solutions">
                    <p className="span-3c">Practical solutions for daily life</p>
                  </div>
                  <div className="explore-tools-3d">
                    <Link to="/resources" className="div-3e">
                      Explore Tools →
                    </Link>
                  </div>
                </div>
                <div className="div-3f">
                  <div className="div-40">
                    <div className="i-41">
                      <div className="svg-42">
                        <div className="frame-43" />
                      </div>
                    </div>
                  </div>
                  <div className="heading-44">
                    <h3 className="support-networks">Support Networks</h3>
                  </div>
                  <div className="paragraph">
                    <p className="community-groups">Connect with community groups</p>
                  </div>
                  <div className="find-support">
                    <Link to="/community" className="find-support-45">
                      Find Support →
                    </Link>
                  </div>
                </div>
                <div className="div-46">
                  <div className="div-47">
                    <div className="icon-48">
                      <div className="svg-49">
                        <div className="frame-4a" />
                      </div>
                    </div>
                  </div>
                  <div className="heading-4b">
                    <h3 className="workplace-resources">Workplace Resources</h3>
                  </div>
                  <div className="employer-employee-guidelines">
                    <p className="employer-employee-guidelines-4c">
                      Guidelines for employers & employees
                    </p>
                  </div>
                  <div className="learn-more">
                    <Link to="/resources" className="learn-more-4d">
                      Learn More →
                    </Link>
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
