function WindowTopBar({ title, bgColor, borderColor, children }) {
  const style = {
    backgroundColor: bgColor,
    borderBottom: `5px solid ${borderColor}`,
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  };

  const iconStyle = {
    backgroundColor: 'white',
    color: 'rgb(186, 195, 206)',
    border: '2px solid rgb(186, 195, 206)',
    borderRadius: '5px',
  };

  return (
    <>
      <div
        className="p-1  d-flex align-items-center justify-content-between"
        style={style}
      >
        <h6 className="ms-2 mt-1">{title}</h6>
        <div className="fs-5 d-flex align-items-center justify-content-end">
          <i
            style={iconStyle}
            className="bi bi-dash-lg align-self-end px-1"
          ></i>
          <i style={iconStyle} className="bi bi-square px-1 ms-1"></i>
          <i style={iconStyle} className="bi bi-x-lg window-icon px-1 mx-1"></i>
        </div>
      </div>
      {children}
    </>
  );
}

export default function Window({
  title,
  barBgColor,
  bgColor,
  borderColor,
  children,
}) {
  return (
    <div
      className="shadow"
      style={{
        backgroundColor: bgColor,
        border: `5px solid ${borderColor}`,
        borderRadius: '10px',
      }}
    >
      <WindowTopBar
        title={title}
        bgColor={barBgColor}
        borderColor={borderColor}
      >
        <div className="p-4">{children}</div>
      </WindowTopBar>
    </div>
  );
}
