function WindowTopBar({ title, bgColor, borderColor, children }) {
  const style = {
    backgroundColor: bgColor,
    borderBottom: `5px solid ${borderColor}`,
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '2px',
  };

  const iconStyle = {
    // backgroundColor: 'white',
    // color: 'rgb(186, 195, 206)',
    // border: '2px solid rgb(186, 195, 206)',
    // borderRadius: '5px',
    color: 'white',
  };

  return (
    <>
      <div
        className=" d-flex align-items-center justify-content-between"
        style={style}
      >
        <h6 className="ms-2 mt-1">{title}</h6>
        <div className="fs-6 d-flex align-items-center justify-content-end">
          <i
            style={iconStyle}
            className="bi bi-dash-lg align-self-end px-1"
          ></i>
          <i style={iconStyle} className="bi bi-square px-1 ms-1"></i>
          <i style={iconStyle} className="bi bi-x-lg window-icon px-1 ms-1"></i>
          <p>&nbsp;</p>
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
