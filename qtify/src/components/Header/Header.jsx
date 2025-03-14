import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

function Header () {
    return (
        <div>
            <Logo></Logo>
            <Search></Search>
            <Button></Button>
        </div>
    )
}

export default Header;