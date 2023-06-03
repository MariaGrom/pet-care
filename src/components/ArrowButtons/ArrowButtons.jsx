import "./ArrowButtons.scss";

function ArrowButtons(props) {
  const {} = props;
  return (
    <>
      <button
        type="button"
        id="btn-left"
        className="button__arrow button__arrow-left button__arrow-left_active"
      ></button>
      <button
        type="button"
        id="btn-right"
        className="button__arrow button__arrow-right button__arrow-right_active"
      ></button>
    </>
  );
}

export default ArrowButtons;
