import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import ExpenseEntryService from "../services/ExpenseEntryService";

export default function NewExpensePage() {
    const [title, setTitle] = useState<string | undefined>()
    const [category, setCategory] = useState<string | undefined>()
    const [price, setPrice] = useState<number | undefined>()

    const handleSubmit = async () => {
        if (category && title && price) {
            ExpenseEntryService.addExpense({
                category,
                title,
                price,
                createdAt: new Date()
            })
                .then(() => {
                    // TODO: toastService.successMessage("something")
                    alert("Success")
                    resetForm()
                })
                .catch((error: Error) => {
                    alert("error")
                    console.error()
                })
        }
    }

    const resetForm = () => {
        setTitle(undefined)
        setCategory(undefined)
        setPrice(undefined)
    }



    return (
        <Box>
            <h1>New Expense</h1>
            <form style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <TextField
                    fullWidth
                    label="Title"
                    name="Title"
                    value={title ?? ""}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    fullWidth
                    label="Category"
                    name="Category"
                    value={category ?? ""}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <TextField
                    fullWidth
                    label="Price"
                    name="Price"
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(+event.target.value)}
                />
                <Button onClick={() => handleSubmit()} type="button" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Box>
    )
}