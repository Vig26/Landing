// Common table for the dashboard displays

import React, { useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import Pagination from "../Pagination";
import TableHead from "./components/TableHead";
import TableRow from "./components/TableRow";
import Style from "./PrimaryTable.module.css";

// TODO - Here This is for the Pagination Default

function PrimaryTable({
  headers,
  tableData,
  className,
  tableName,
  setInnerData,
  pageSize
}) {
  const [currentPage, setCurrentPage] = useState(1);
  let firstPageIndex = 0
  let lastPageIndex = 0
  // For Pagination
  console.log("PageSize",parseInt(pageSize))
  const currentTableData = useMemo(() => {
    firstPageIndex = (currentPage - 1) * pageSize;
    lastPageIndex = firstPageIndex + pageSize;
    console.log("First page Index and Last Page Index :",firstPageIndex,lastPageIndex)
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, tableData, pageSize]);

  console.log("Current Table data : ",currentTableData);

  const isDataGreaterThanPageSize = tableData.length > pageSize;

  return (
    <div className={[Style.wrapper, "w-100"].join(" ")}>
      <div className={[Style.tableWrapper, className].join(" ")}>
        <Table width="100%">
          <TableHead data={headers} />
          <tbody className="fs-22">
            {isDataGreaterThanPageSize ? (
              <>
                {currentTableData?.map((item, index) => (
                  <TableRow
                    headers={headers}
                    rowData={item}
                    tableName={tableName}
                    dataIndex={index+firstPageIndex}
                    key={tableName + index}
                    setInnerData={setInnerData}
                  />
                ))}
              </>
            ) : (
              <>
                {tableData.map((item, index) => (
                  <TableRow
                    headers={headers}
                    rowData={item}
                    tableName={tableName}
                    dataIndex={index}
                    key={tableName + index}
                    setInnerData={setInnerData}
                  />
                ))}
              </>
            )}
          </tbody>
        </Table>
      </div>
      <Pagination
        className={Style.paginationBar}
        currentPage={currentPage}
        totalCount={tableData.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default PrimaryTable;
