import AvatarCustom from "./../Avatar/Avatar";
import { Transaction } from "./../../globaltypes";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EuroIcon from "@mui/icons-material/Euro";
import moment from "moment";

import "./TransactionCard.scss";

interface ITransactionCardProps {
    transactions: Transaction[];
}

export default function TransactionCard(props: ITransactionCardProps) {
    return (
        <div className="transaction-container">
            <h1 className="transactionName">Transactions</h1>
            <TableContainer
                component={Paper}
                sx={{
                    backgroundColor: "#2D2F3200",
                }}
            >
                <Table
                    sx={{
                        backgroundColor: "#2D2F3200",
                        "td, th": { color: "#FFFFFF !important" },
                    }}
                    aria-label="simple table"
                >
                    <TableHead sx={{ th: { padding: "0px !important" } }}>
                        <TableRow>
                            <TableCell align="center">
                                <PersonIcon />
                            </TableCell>
                            <TableCell align="center">
                                <DateRangeIcon />
                            </TableCell>
                            <TableCell align="center">
                                <LocalGasStationIcon />
                            </TableCell>
                            <TableCell align="center">
                                <EuroIcon />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.transactions ? (
                            props.transactions.map((trans, i) => (
                                <TableRow
                                    key={i}
                                    sx={{
                                        "td, &:last-child th": { border: 0 },
                                        "td, th": { color: "#FFFFFF !important" },
                                    }}
                                >
                                    <TableCell align="center">
                                        <AvatarCustom name={trans.user.name} colour={trans.user.colour} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <div style={{ display: "flex" }}>
                                            <div style={{ fontFamily: "Inter-semibold" }}>
                                                {moment(trans.date).format("D").toUpperCase()}{" "}
                                            </div>
                                            &nbsp;
                                            <div style={{ fontFamily: "Inter-medium" }}>
                                                {moment(trans.date).format("MMM").toUpperCase()}{" "}
                                            </div>
                                            &nbsp;
                                            <div style={{ fontFamily: "Inter-regular" }}>
                                                {moment(trans.date).format("YYYY").toUpperCase()}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">{trans.liters}</TableCell>
                                    <TableCell align="right">€{trans.amount}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow
                                key={1}
                                sx={{
                                    "td, &:last-child th": { border: 0 },
                                    "td, th": { color: "#FFFFFF !important" },
                                }}
                            >
                                <TableCell align="center">-</TableCell>
                                <TableCell align="right">-</TableCell>
                                <TableCell align="right">-</TableCell>
                                <TableCell align="right">-</TableCell>
                            </TableRow>
                        )}
                        {}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
