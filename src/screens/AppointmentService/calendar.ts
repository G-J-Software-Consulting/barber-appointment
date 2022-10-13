import styled from "styled-components";

export const CalendarContainer = styled.div`
  padding: 1rem;
  margin-top: 4rem;
  flex: 1;
  justify-content: center;
  align-items: center;
  .react-calendar__navigation {
    display: flex;
    margin-bottom: 10px;

    .react-calendar__navigation__label {
      font-size: 1rem;
      font-family: ${(props) => props.theme.fonts.roboto};
      font-weight: 400;
    }

    .react-calendar__navigation__arrow {
      width: 10%;
    }
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: ${(props) => props.theme["red-700"]};
  }
  .react-calendar__tile--range {
    box-shadow: 0 0 6px 2px ${(props) => props.theme["blue-hover"]};
  }
  button {
    margin: 3px;
    background-color: ${(props) => props.theme.input};

    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 0;

    &:hover {
      background-color: ${(props) => props.theme["blue-600"]};
    }

    &:active {
      background-color: ${(props) => props.theme["blue-hover"]};
    }
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
    margin-top: 10px;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
  }
`;
