import Window from './Window';
import { Container } from 'react-bootstrap';

function CountdownTimer({ hours, minutes, seconds }) {
  return (
    <div>
      <Container fluid>
        <div className="text-center">
          <div className="mx-1 my-3">
            <img
              className="image py-4 px-2 px-lg-0"
              src="/images/logo-alt.PNG"
              alt=""
            />

            <Window title="countdown.exe" bgColor={'rgba(1, 58, 104, 0.66)'}>
              <div className="px-4 pt-4">
                <h1 className="">The First Sound 2026</h1>
                <h5>launches March 9th, 2026, 12 PM PDT</h5>
                <img src="/images/cover.png" alt="" className="image" />
                <div className="pt-3 fs-4">
                  {hours.toString().padStart(2, '0')}:
                  {minutes.toString().padStart(2, '0')}:
                  {seconds.toString().padStart(2, '0')}
                </div>
                <p>See you soon!</p>
              </div>
            </Window>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CountdownTimer;
