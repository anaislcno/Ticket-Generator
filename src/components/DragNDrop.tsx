import Dropzone from "react-dropzone";
import Upload from "../assets/images/icon-upload.svg";

const DragNDrop = () => {
  const baseStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "hsl(245, 19%, 35%)",
    borderStyle: "dashed",
    backgroundColor: "rgba(75, 85, 99, 0.1)",
    color: "hsl(252, 6%, 83%)",
    outline: "none",
    transition: "border .24s ease-in-out, background-color .24s ease-in-out",
    cursor: "pointer",
    minWidth: 500,
  };

  const focusedStyle: React.CSSProperties = {
    borderColor: "#2196f3",
  };

  const acceptStyle: React.CSSProperties = {
    borderColor: "#00e676",
  };

  const rejectStyle: React.CSSProperties = {
    borderColor: "#ff1744",
  };

  return (
    <div>
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({
          getRootProps,
          getInputProps,
          isFocused,
          isDragAccept,
          isDragReject,
        }) => {
          const style = {
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
          };

          return (
            <section>
              <div
                className="flex flex-col gap-12"
                {...getRootProps({ style })}
              >
                <input {...getInputProps()} name="dragndrop" id="dragndrop" type="file"/>
                <img
                  className="p-12 bg-neutral-700 opacity-90 rounded-2xl border border-neutral-700"
                  src={Upload}
                  alt="Upload icon"
                />
                <label htmlFor="dragndrop">
                  Drag and drop or click to upload
                </label>
              </div>
            </section>
          );
        }}
      </Dropzone>
      <p className="text-neutral-300 mt-12">
        ⓘ Upload your photo (JPG or PNG, max size: 500KB)
      </p>
    </div>
  );
};

export default DragNDrop;
