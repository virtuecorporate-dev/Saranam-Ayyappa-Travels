import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getHoliday } from "../Slice/holidaySlice";

const Service = () => {
  const dispatch = useDispatch();
  const holidays = useSelector((state) => state.holidays.holidays);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/holiday`);
        dispatch(getHoliday(response.data.holidays));
      } catch (error) {
        console.log("Cannot fetch data", error.message);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <section>
      <div className="container-fluid p-0">
        <div className="about-img">
          <img src="./images/w4.jpg" alt="About Us" />
        </div>
        <div className="about-text">
          <h1>Services</h1>
          <h3>Be comfortable while you travel with our reliable bus rental.</h3>
        </div>
      </div>

      <div className="container">
        <div className="text-center mt-5 pb-5">
          <h5>OUR SERVICES</h5>
          <h1>We Provide Best Holiday Packages For You</h1>
        </div>

        <section className="tour-package row">
          {holidays.map((tour) => (
            <div className="tour-package-card col-lg-4" key={tour._id}>
              <img
                src={`http://localhost:8000/${tour.imageUrl}`}
                alt={tour.name}
                className="img-fluid"
              />
              <div className="tour-package-content">
                <h3>Package: {tour.name}</h3>
                <h4>
                  Category:
                  <ul className="tour-category">
                    <li>
                      <i className="fa-solid fa-check"></i> {tour.category}
                    </li>
                  </ul>
                </h4>
                <p>
                  Service Included:
                  <ul className="tour-category">
                    {tour.services.map((ser, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {ser.name}
                      </li>
                    ))}
                  </ul>
                </p>
                <div className="tour-package-btn">
                  <button>Book Now</button>
                </div>
                <div className="holiday-pdf">
                  <label htmlFor="pdf">
                    <h6>PDF</h6>
                  </label>
                  {tour.pdf && (
                    <a
                      href={`http://localhost:8000/${tour.pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Service;
