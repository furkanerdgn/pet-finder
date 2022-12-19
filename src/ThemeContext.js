import { createContext } from "react";

// const [theme, setTheme] = useState("darkblue");

const ThemeContext = createContext(["green",()=>{}]); // set gedliğinde bir şey yapmaz taklit ediyoruz gibi düşün şuan.


export default ThemeContext;