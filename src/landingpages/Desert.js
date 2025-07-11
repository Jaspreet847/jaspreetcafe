import React from 'react';

export default function Desert() {
  const desserts = [
    { name: 'cherry muffin', image: 'images/miffim.avif' },
    { name: 'rose muffin', image: 'images/rosemuffin.avif' },
    { name: 'sweet donut', image: 'images/sweetdonut.avif' },
    { name: 'choco cake', image: 'images/chockocake.avif' },
  ];

  return (
    <div>
      <section className="break_fast">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h1 className="sixth">
                Popular <span className="section_heading">Desserts</span>
              </h1>
            </div>

            {desserts.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index}>
                <div className="wrapper text-center p-2 shadow-sm bg-white rounded h-100">
                  <div className="imageContainer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
                    />
                    <span className="d-block mt-2 fw-bold text-capitalize">{item.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra styles for hover and mobile */}
      <style>{`
        .wrapper {
          transition: transform 0.3s ease;
        }
        .wrapper:hover {
          transform: scale(1.03);
        }
        @media (max-width: 576px) {
          .imageContainer img {
            max-height: 150px;
          }
        }
      `}</style>
    </div>
  );
}
