import Card from "./Card";
import styled from "styled-components";
import pollenca from "../images/pollenca-bay.jfif";
import calaSanVicente from "../images/cala-san-vicente.jfif";
import calaPi from "../images/cala-pi-de-la-posada.jfif";

function Cards({ destinations, setStep, setBooking }) {
  const imageRef = [calaPi, calaSanVicente, pollenca];
  return (
    <>
      <CardsView>
        {destinations.map((destination, i) => (
          <Card
            key={i}
            destination={destination}
            setStep={setStep}
            setBooking={setBooking}
            imageRef={imageRef[i]}
          />
        ))}
      </CardsView>
    </>
  );
}

export default Cards;

const CardsView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
