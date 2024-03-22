/* eslint-disable react/prop-types */
const ActionButton = ({ type, title, style = {}, ...buttonProps }) => {
  if (!type || type === "primary") {
    return (
      <div>
        <button
          {...buttonProps}
          style={{
            background: "#15aad7",
            borderRadius: "11px",
            padding: "20px 40px",
            color: "#ffffff",
            display: "inline-block",
            fontSize: "1.2em",
            textAlign: "center",
            ...style,
          }}
        >
          {title}
        </button>
      </div>
    );
  }
};
export default ActionButton;
