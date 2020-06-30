// Button Component 
import React from "react";
import { CSVLink } from "react-csv";

const CSVButton = React.forwardRef((props, ref) => {
  let { data, fetchCSVData, filename } = props; 
  if (data && data.length > 0) {
    return (
      <CSVLink
        ref={ref}
        className="btn btn-secondary"
        target="_self"
        filename={filename}
        data={data}
      />
    )
  } else {
    return (
      <button onClick={fetchCSVData} className="btn btn-primary" >
        Export Filtered
      </button>
    )
  }
});

export { CSVButton };