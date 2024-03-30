import {Box, Card, Paper} from "@mui/material";
import MockChart from "../components/MockChart";

export default function DashboardPage() {
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "stretch",
            alignItems: 'stretch',
            gap: '10px'
        }}>
            <Paper style={{width: '50%'}}>
                <Card style={{textAlign: 'center'}}>
                    <h3>Category VS Budget</h3>
                    GRAPH HERE
                </Card>
            </Paper>
            <Paper style={{width: '50%'}}>
                <Card style={{textAlign: 'center'}}>
                    <h3>Category VS Budget</h3>
                    <MockChart></MockChart>
                </Card>
            </Paper>
        </Box>
    )
}