type CalculatorReferenceTableProps = {
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  minWidth?: string;
  lastColumnRight?: boolean;
};

export function CalculatorReferenceTable({
  caption,
  headers,
  rows,
  minWidth = "min-w-[480px]",
  lastColumnRight = false,
}: CalculatorReferenceTableProps) {
  return (
    <div className="overflow-auto rounded-md border">
      <table className={`w-full ${minWidth} border-collapse text-sm`}>
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-muted/50 border-b">
          <tr>
            {headers.map((header, index) => (
              <th
                key={header}
                scope="col"
                className={`p-2 font-medium ${lastColumnRight && index === headers.length - 1 ? "text-right" : "text-left"}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row[0]}
              className="border-b transition-colors duration-150 ease-out last:border-0 hover:bg-primary/10 dark:hover:bg-primary/20"
            >
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${index}`}
                  className={`p-2 ${index === 0 ? "font-medium" : "text-muted-foreground"} ${lastColumnRight && index === headers.length - 1 ? "text-right" : ""}`}
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
