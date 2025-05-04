import React from 'react';
import './Plans.css';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    price: '₹ 2,000',
    type: 'Intro',
    desc: 'Unlimited editing & customization',
    features: [
      'All limited links',
      'Link 1 custom domain',
      'Free SSL certificate',
      'Dashboard access',
      'SEO support',
    ],
    button: 'Choose plan',
  },
  {
    price: '₹ 8,000',
    type: 'Base',
    desc: 'For more businesses that want to optimize web queries',
    features: [
      'All limited links',
      'Link 1 custom domain',
      'Chat support',
      'Dashboard access',
      'SEO support',
    ],
    button: 'Choose plan',
  },
  {
    price: '15000 /month',
    type: 'Pro',
    tag: 'Most Popular',
    desc: 'For most businesses that want to optimize web queries',
    features: [
      'All limited links',
      'Own analysis platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
    button: 'Choose plan',
    popular: true,
  },
  {
    price: '$200 /month',
    type: 'Enterprise',
    desc: 'For most businesses that want to optimize web queries',
    features: [
      'All limited links',
      'Link 1 custom domain',
      'Chat support',
      'Dashboard access',
      'SEO support',
    ],
    button: 'Choose plan',
  },
];

const Plans = () => {
  return (
    <section className="plans-section">
      <h2>
        Tailored <span>Plans</span> For you
      </h2>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.popular ? 'popular' : ''}`}
          >
            {plan.tag && <div className="tag">{plan.tag}</div>}
            <h3 className="price">{plan.price}</h3>
            <h4 className="type">{plan.type}</h4>
            <p className="desc">{plan.desc}</p>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <FaCheck className="tick" /> {feature}
                </li>
              ))}
            </ul>
            <button className="choose-btn">{plan.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
