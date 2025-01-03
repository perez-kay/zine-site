import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

function WindowTopBar({ title, bgColor, borderColor, children }) {
  const style = {
    backgroundColor: bgColor,
    borderBottom: `5px solid ${borderColor}`,
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '2px',
  };

  return (
    <>
      <div
        className=" d-flex align-items-center justify-content-between"
        style={style}
      >
        <h5 className="ms-2 mt-1 py-1">{title}</h5>
        <div className=" d-flex align-items-center justify-content-end">
          <FontAwesomeIcon className="px-1" icon={faWindowMinimize} size="xl" />
          <FontAwesomeIcon className="px-1" icon={faSquare} size="xl" />

          <FontAwesomeIcon className="ps-1 pe-2" icon={faXmark} size="xl" />
        </div>
      </div>
      {children}
    </>
  );
}

export default function Window({
  title,
  barBgColor = '#61ceff',
  bgColor = 'rgba(9, 73, 170, 0.6)',
  borderColor = '#00b0ff',
  fullWidth = false,
  children,
}) {
  return (
    <div
      className={`shadow ${fullWidth ? 'd-block' : 'd-inline-block'} mb-3`}
      style={{
        backgroundColor: bgColor,
        border: `5px solid ${borderColor}`,
        borderRadius: '7px',
      }}
    >
      <WindowTopBar
        title={title}
        bgColor={barBgColor}
        borderColor={borderColor}
      >
        {children}
      </WindowTopBar>
    </div>
  );
}
