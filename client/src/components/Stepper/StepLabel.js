import { styled } from "@mui/material/styles";
import StepLabel from "@mui/material/StepLabel";
import { Icon } from "@mui/material";

const CustomizesStepIcon = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    color: "#eb3434",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    border: "3px solid",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#eb3434",
  }),
}));


const CustomizedStepLabel = (props) => {
    const { icons } = props;
    function StepIcon({icon,active, completed, className}) {
        return (
          <CustomizesStepIcon
            ownerState={{ completed, active }}
            className={className}
          >
            {completed ? (
              <Icon baseClassName="fas" className={`fa-check`} />
            ) : (
              //Default mui steppper "icon" prop increments from 1 to max labels
              <Icon baseClassName="fas" className={`fa-${icons[String(icon)]}`} />
              // <Icon>{icons[String(icon)]}</Icon>
            )}
          </CustomizesStepIcon>
        );
      }
  return <StepLabel StepIconComponent={StepIcon}>{props.label}</StepLabel>;
};
export default CustomizedStepLabel
