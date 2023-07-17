import { Box, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormData } from "../../../context/form-context";

const Credentials = () => {
  const { formData, setFormData } = useFormData();

  const labelStyle = {
    display: "flex",
    justifyContent: "start",
    fontWeight: 700,
    color: "#333",
  };
  return (
    <Box>
      <InputLabel sx={labelStyle}>Email</InputLabel>
      <TextField
        margin="dense"
        required
        fullWidth
        id="email"
        name="email"
        autoComplete="email"
        autoFocus
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <InputLabel required sx={labelStyle}>
        Password
      </InputLabel>
      <TextField
        margin="dense"
        required
        fullWidth
        name="password"
        type="password"
        id="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
    </Box>
  );
};

export default Credentials;
