import React from "react";
import "../assets/style/style.css";
import FooterDown from "../components/footer";
import HeaderUp from "../components/header";

const EventsTable = () => {
  return (
    <>
      <header>
        <HeaderUp />
      </header>
      <body>
        <div className="body-container">
          <div className="container mt-5 mb-3">
            <div className="row mt-5 mb-3">
              <div className="mt-5 list-event">
                <span style={{ fontSize: "24px", color: "white" }}>
                  LIST EVENT
                </span>
              </div>
              <table className="table mt-3">
                <thead className="thead-light">
                  <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Participant</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: "whitesmoke" }}>
                  <tr>
                    <td>1</td>
                    <td>Meeting with CEO</td>
                    <td>Sidoarjo, Indonesia</td>
                    <td>23/06/2021</td>
                    <td>a,b,c</td>
                    <td>lorem ipsum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
      <footer>
        <FooterDown />
      </footer>
    </>
  );
};

export default EventsTable;
