import { Button } from "./Toggler.styles";

interface IToggleProps {}
//@ts-ignore
const Toggle: React.FC<IToggleProps> = ({ theme, toggleTheme }) => {
  console.log("toggle", theme);
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};
//

export default Toggle;
