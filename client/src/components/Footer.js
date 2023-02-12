import React from 'react';

function Footer() {

    const date = new Date();
    const year = date.getFullYear()

    return (
        <div style={styles.containerStyles}>
            <span>
                {`Copyright \u00A9 ${year} `}
                <a style={styles.linkStyles} href="https://www.linkedin.com/in/kyranank/">Kyra Nankivell</a>
                . All rights reserved.
            </span>
        </div>
    )
}

const styles = {
    containerStyles: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: "#A88E35",
        fontSize: "12px"
    },
    linkStyles: {
        textDecoration: "none",
        color: "#A88E35",

    }
}
export default Footer;