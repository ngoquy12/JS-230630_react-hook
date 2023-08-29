import React, { useContext } from "react";
import { ThemeContext } from "./UseContext";

export default function Comp_B() {
  // Bước 3
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p className={theme}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        quibusdam! Ut, quo ipsam, ea voluptatibus illo laborum adipisci cumque
        eos accusamus eveniet architecto et magnam veniam. Iusto excepturi
        adipisci asperiores.
      </p>
    </div>
  );
}
