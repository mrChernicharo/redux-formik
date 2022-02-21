import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import "./style.css";

const AvailabilityTable = ({
  professionalId,
  toggleTimeSlotStatus,
  availability,
}) => {
  const [isAvailabilityTableOpen, setIsAvailabilityTableOpen] =    useState(false);

  const handleTimeSlotClick = (weekday, hour, status) => {
    toggleTimeSlotStatus({ weekday, hour, status });
  };

  useEffect(() => console.log({ professionalId, availability }),[availability]);

  return (
    <>
      <button
        onClick={() => setIsAvailabilityTableOpen(!isAvailabilityTableOpen)}
      >
        {isAvailabilityTableOpen ? (
          <MdClose />
        ) : (
          <span>{"Disponibilidade"}</span>
        )}
      </button>

      {isAvailabilityTableOpen &&
        (availability ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  {["-", ...Object.keys(availability)].map((weekday) => (
                    <th key={nanoid()}>{weekday}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="spacer"></td>
                </tr>
                {Object.keys(availability["monday"]).map((hour) => (
                  <tr key={nanoid()}>
                    <td key={nanoid()}>{hour}</td>

                    {Object.keys(availability).map((weekday) => (
                      <td
                        key={nanoid()}
                        onClick={() =>
                          handleTimeSlotClick(
                            weekday,
                            hour,
                            availability[weekday][hour].status
                          )
                        }
                      >
                        {availability[weekday][hour].status}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>Carregando...</div>
        ))}
    </>
  );
};
export default AvailabilityTable;
