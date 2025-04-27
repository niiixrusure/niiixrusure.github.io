import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";

export default function PersonalityTestPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      text: "How do you typically recharge your energy?",
      options: [
        { id: "a", text: "Spending time with friends and in social settings" },
        { id: "b", text: "Having quiet time alone or with a few close people" },
        { id: "c", text: "A mix of both, depending on my mood and the situation" },
      ],
    },
    {
      id: 2,
      text: "When processing information, do you prefer:",
      options: [
        { id: "a", text: "Concrete facts and details that I can directly observe" },
        { id: "b", text: "Abstract concepts, patterns, and possibilities" },
        { id: "c", text: "A balance of both concrete details and abstract concepts" },
      ],
    },
    {
      id: 3,
      text: "When making decisions, what do you typically prioritize?",
      options: [
        { id: "a", text: "Logic, consistency, and objective analysis" },
        { id: "b", text: "Values, harmony, and how decisions affect people" },
        { id: "c", text: "It depends on the specific situation and context" },
      ],
    },
    {
      id: 4,
      text: "How do you approach structure and planning?",
      options: [
        { id: "a", text: "I prefer clear plans, schedules, and closure" },
        { id: "b", text: "I prefer flexibility, spontaneity, and keeping options open" },
        { id: "c", text: "I adapt my approach based on what the situation requires" },
      ],
    },
    {
      id: 5,
      text: "How do you typically respond to sensory stimuli (sounds, lights, textures)?",
      options: [
        { id: "a", text: "I'm often more sensitive than others and can get overwhelmed" },
        { id: "b", text: "I typically notice less than others or seek more stimulation" },
        { id: "c", text: "My sensitivity is average or varies by the type of stimuli" },
      ],
    },
    {
      id: 6,
      text: "When learning something new, how do you prefer to approach it?",
      options: [
        { id: "a", text: "Step-by-step, mastering each part before moving on" },
        { id: "b", text: "Getting the big picture first, then filling in details as needed" },
        { id: "c", text: "It depends on what I'm learning and the context" },
      ],
    },
    {
      id: 7,
      text: "How do you typically approach social rules and norms?",
      options: [
        { id: "a", text: "I find them challenging to understand or navigate intuitively" },
        { id: "b", text: "I generally understand them naturally without much effort" },
        { id: "c", text: "It depends on the specific social context or situation" },
      ],
    },
    {
      id: 8,
      text: "How would you describe your attention and focus?",
      options: [
        { id: "a", text: "I often hyperfocus on interests but struggle with directed attention" },
        { id: "b", text: "I can generally direct my attention where needed without major issues" },
        { id: "c", text: "My attention varies significantly depending on interest and context" },
      ],
    },
    {
      id: 9,
      text: "How do you typically handle changes to routines or plans?",
      options: [
        { id: "a", text: "They often cause me significant stress or discomfort" },
        { id: "b", text: "I generally adapt to them without major difficulty" },
        { id: "c", text: "It depends on the nature and context of the change" },
      ],
    },
    {
      id: 10,
      text: "How would you describe your thinking style?",
      options: [
        { id: "a", text: "Detailed, specialized, and deep in specific areas" },
        { id: "b", text: "Broad, flexible, and connecting across different domains" },
        { id: "c", text: "A mix that varies depending on the subject or context" },
      ],
    },
  ];

  const handleAnswer = (questionId, optionId) => {
    setAnswers({
      ...answers,
      [questionId]: optionId,
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    // This is a simplified example - a real implementation would have more sophisticated analysis
    const counts = {
      a: 0,
      b: 0,
      c: 0,
    };

    Object.values(answers).forEach((answer) => {
      counts[answer]++;
    });

    if (counts.a > counts.b && counts.a > counts.c) {
      return {
        type: "Analytical Thinker",
        description:
          "You tend to process information deeply and systematically. You may have a preference for structure, details, and logical analysis. Your cognitive style often involves focused attention on specific interests and a methodical approach to problem-solving.",
      };
    } else if (counts.b > counts.a && counts.b > counts.c) {
      return {
        type: "Intuitive Connector",
        description:
          "You tend to see the big picture and make connections across different domains. Your cognitive style often involves flexible thinking, creativity, and an ability to adapt to changing situations. You may prefer variety and novelty in your experiences.",
      };
    } else {
      return {
        type: "Balanced Processor",
        description:
          "You demonstrate a balanced cognitive profile with elements of both analytical and intuitive thinking. Your approach often varies depending on the context, allowing you to be adaptable across different situations and environments.",
      };
    }
  };

  return (
    <div className="main-container">
      <div className="body">
        <Header />
        <main className="test-main">
          <section className="test-hero">
            <div className="test-hero-content">
              <h1 className="test-title">Personality Test</h1>
              <p className="test-subtitle">Discover your unique cognitive style and preferences</p>
            </div>
          </section>

          <section className="test-content">
            <div className="test-container">
              {!showResults ? (
                <div className="question-section">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${(currentStep / questions.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="question-count">
                    Question {currentStep + 1} of {questions.length}
                  </p>

                  <div className="question-card">
                    <h2 className="question-text">{questions[currentStep].text}</h2>
                    <div className="options-list">
                      {questions[currentStep].options.map((option) => (
                        <div
                          key={option.id}
                          className={`option ${
                            answers[questions[currentStep].id] === option.id ? "selected" : ""
                          }`}
                          onClick={() => handleAnswer(questions[currentStep].id, option.id)}
                        >
                          <div className="option-radio">
                            {answers[questions[currentStep].id] === option.id && (
                              <div className="radio-fill"></div>
                            )}
                          </div>
                          <p className="option-text">{option.text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="navigation-buttons">
                      {currentStep > 0 && (
                        <button className="nav-button secondary" onClick={handlePrevious}>
                          Previous
                        </button>
                      )}
                      <button
                        className="nav-button primary"
                        onClick={handleNext}
                        disabled={!answers[questions[currentStep].id]}
                      >
                        {currentStep === questions.length - 1 ? "See Results" : "Next"}
                      </button>
                    </div>
                  </div>

                  <div className="test-info">
                    <div className="info-item">
                      <div className="info-icon"></div>
                      <p className="info-text">
                        This is not a clinical assessment. Results are meant for self-reflection
                        only.
                      </p>
                    </div>
                    <div className="info-item">
                      <div className="info-icon"></div>
                      <p className="info-text">
                        Your responses are private and not stored beyond this session.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="results-section">
                  <div className="results-card">
                    <div className="results-header">
                      <h2 className="results-title">Your Personality Type</h2>
                      <div className="results-type">{calculateResults().type}</div>
                    </div>

                    <div className="results-description">
                      <p>{calculateResults().description}</p>
                    </div>

                    <div className="results-actions">
                      <button
                        className="action-button primary"
                        onClick={() => window.location.reload()}
                      >
                        Take Test Again
                      </button>
                      <button className="action-button secondary">Download Results</button>
                    </div>
                  </div>

                  <div className="next-steps">
                    <h3 className="next-steps-title">Next Steps</h3>
                    <div className="steps-grid">
                      <div className="step-card">
                        <div className="step-icon resources-icon"></div>
                        <h4 className="step-title">Explore Resources</h4>
                        <p className="step-description">
                          Discover articles, tools, and strategies tailored to your cognitive style.
                        </p>
                        <a href="/resources" className="step-link">
                          Browse Resources →
                        </a>
                      </div>

                      <div className="step-card">
                        <div className="step-icon community-icon"></div>
                        <h4 className="step-title">Join Our Community</h4>
                        <p className="step-description">
                          Connect with others who share similar cognitive styles and experiences.
                        </p>
                        <a href="/community" className="step-link">
                          Find Your Community →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
