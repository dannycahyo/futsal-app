import { extendTheme, theme as base } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading: `Lato, ${base.fonts?.heading}`,
        body: `Montserrat, ${base.fonts.body}`
    },
    colors: {
        primary: "#00A3C4",
        secondary: "#195DF7",
        tertiary: "#26375E",
        quaternary: "#CC6333",
        quinary: "#F73F19"
    }
})

export default theme