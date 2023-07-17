import { Box, InputLabel, TextField } from "@mui/material";
import { useFormData } from "../../../context/form-context";

const UserInfo = () => {
  const { formData, setFormData } = useFormData();

  const labelStyle = {
    display: "flex",
    justifyContent: "start",
    fontWeight: 700,
    color: "#333",
  };
  return (
    <Box>
      <InputLabel sx={labelStyle}>First Name:</InputLabel>
      <TextField
        required
        margin="dense"
        fullWidth
        id="firstName"
        name="firstName"
        autoFocus
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <InputLabel sx={labelStyle}>Last Name:</InputLabel>
      <TextField
        margin="dense"
        fullWidth
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
    </Box>
  );
};

export default UserInfo;
