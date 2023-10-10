import { Button, Icon } from "./Toggler.styles";
import Moon from "./../../assets/icons/moon.png";

interface IToggleProps {}
//@ts-ignore
const Toggle: React.FC<IToggleProps> = ({ theme, toggleTheme }) => {
  console.log("toggle", theme);
  return <Button onClick={toggleTheme}></Button>;
};
//

export default Toggle;
