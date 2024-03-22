/* eslint-disable react/prop-types */
const DataGrid = ({ columns, rows }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns?.map((column) => {
              return <th key={column}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => {
            return (
              <tr key={JSON.stringify(row)}>
                {Object.values(row)?.map((rowValue, i) => {
                  if (i === 5) {
                    return (
                      <td key={rowValue + i}>
                        <img src={rowValue} />
                      </td>
                    );
                  }
                  return <td key={rowValue + i}>{rowValue}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DataGrid;
