"use client";
import Papa from "papaparse";
import { useEffect, useState } from "react";

export default function CsvGrid({ data }: { data: string }) {
    const [headers, setHeaders] = useState<Array<string>>([]);
    const [tableData, setTableData] = useState<Array<Array<string>>>([]);

    useEffect(() => {
        Papa.parse(data, {
            complete: (result: any) => {
                // Extract header and rows from parsed CSV data
                setHeaders(result.data[0]); // First row as headers
                setTableData(result.data.slice(1)); // Remaining rows as table data
            },
        });
    }, [data]);

    return (
        <div className="w-full mt-10">
            <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                    <tr className="bg-gray-200 dark:bg-gray-800">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center font-medium"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white dark:bg-black">
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
