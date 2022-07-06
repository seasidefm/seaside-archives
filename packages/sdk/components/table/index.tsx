import { DataGrid, DataGridProps } from "@mui/x-data-grid";

type SeasideTableProps = DataGridProps;

export const SeasideTable: React.FC<SeasideTableProps> = (props) => {
    return <DataGrid {...props} />;
};
