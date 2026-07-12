import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-7">
          <div className="card shadow-sm border-0 p-4 p-md-5">
            <div className="card-body">
              <h1 className="fw-bold mb-3" style={{ color: 'var(--primary)' }}>About E-Training</h1>
              <p className="lead text-muted mb-5">
                E-Training is a simple learning platform designed to help students explore new ideas,
                build practical skills, and grow at their own pace.
              </p>

              <h2 className="h4 fw-semibold mt-4 mb-3 text-dark">What we offer</h2>
              <ul className="list-group list-group-flush mb-5">
                <li className="list-group-item bg-transparent px-0 text-muted">✨ Easy-to-follow lessons</li>
                <li className="list-group-item bg-transparent px-0 text-muted">🚀 Interactive learning experience</li>
                <li className="list-group-item bg-transparent px-0 text-muted">🤝 Support for beginners and advanced learners</li>
              </ul>

              <h2 className="h4 fw-semibold mt-4 mb-3 text-dark">Our goal</h2>
              <p className="text-muted">
                We believe education should be clear, engaging, and available to everyone.
                This platform makes learning feel simple, friendly, and motivating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
