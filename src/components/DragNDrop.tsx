import Dropzone from "react-dropzone";
import { ErrorMessage } from "formik";
import Upload from "../assets/images/icon-upload.svg";

interface DragNDropProps {
  onFileSelect: (file: File) => void;
  onFileTouched: () => void;
}

const DragNDrop = ({ onFileSelect, onFileTouched }: DragNDropProps) => {
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
    borderColor: "hsl(252, 6%, 83%)",
  };
  const rejectStyle: React.CSSProperties = {
    borderColor: "hsl(348, 100%, 54%)",
  };

  return (
    <div>
      <Dropzone
        multiple={false}
        accept={{ "image/jpeg": [], "image/png": [] }}
        onDrop={(acceptedFiles, rejectedFiles) => {
          onFileTouched();
          if (acceptedFiles.length > 0) {
            onFileSelect(acceptedFiles[0]);
          } else if (rejectedFiles.length > 0) {
            onFileSelect(rejectedFiles[0].file);
          }
        }}
      >
        {({ getRootProps, getInputProps, isFocused, isDragReject }) => {
          const style = {
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
          };

          return (
            <section>
              <div
                className="flex flex-col gap-12"
                {...getRootProps({ style })}
              >
                <input {...getInputProps()} name="file" id="file" type="file" />
                <img
                  className="p-12 bg-neutral-700 opacity-90 rounded-2xl border border-neutral-700"
                  src={Upload}
                  alt="Upload icon"
                />
                <label htmlFor="file">Drag and drop or click to upload</label>
              </div>
            </section>
          );
        }}
      </Dropzone>
      <p className="text-neutral-300 mt-12">
        ⓘ Upload your photo (JPG or PNG, max size: 500MB)
      </p>
      <ErrorMessage name="file" component="p" className="text-red-500" />
    </div>
  );
};

export default DragNDrop;
