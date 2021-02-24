import fileDownload from "js-file-download";
import { Response } from "util/types/Response";

const FileDown = (response: any) => {
  const headerLine: string | undefined =
    response.headers["content-disposition"];

  if (headerLine) {
    const startFileNameIndex = headerLine.indexOf("=") + 1;
    const filename = headerLine.substring(
      startFileNameIndex,
      headerLine.length
    );
    fileDownload(response.data, decodeURI(filename));
  }
};

export default FileDown;
