import type { RenderElementProps } from "slate-react";

const DefaultElement = (props: RenderElementProps) => {
  // const [marginBottom, setMarginBottom] = useState<string>("1rem");
  // const [showEditButton, setShowEdditButton] = useState(false);

  // const handleConfirmChange = () => {
  //   console.log("yeah");
  // };

  return (
    <div
      className={`relative w-full`}
      // onMouseEnter={() => setShowEdditButton(true)}
      // onMouseLeave={() => setShowEdditButton(false)}
    >
      {/* {showEditButton && (
        <BlockEditButton
          blockType={props.element.type}
          handleClick={handleConfirmChange}
        >
          <div className={``}>asdf</div>
        </BlockEditButton>
      )} */}

      <p {...props.attributes} style={{ marginBottom: "1rem" }}>
        {props.children}
      </p>
    </div>
  );
};

export default DefaultElement;
