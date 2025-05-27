import { ButtonSpinner, Button as GluestackButton, Text } from "@gluestack-ui/themed";
import { ComponentProps } from "react"

type Props = ComponentProps<typeof GluestackButton> & {
    title: string,
    variant?: "blue" | "black" | "gray"
    isLoading?: boolean
}

export function Button({title, variant = "blue", isLoading = false, ...rest}: Props) {
    return (
        <GluestackButton
        width={'75%'}
        height={50}
        backgroundColor={variant === "blue"  ? "#647AC7" : variant === "black" ? "#000000" : "#D9D8DA" }
        borderRadius={6}
        justifyContent="center"
        $active-backgroundColor={variant === "blue" ? "#6e85da" : variant === "black" ? "#3f3f3f" : "#bcbbbd" }
        >

        <Text fontWeight={"bold"} color={variant === "blue" ? "#F7F7F8" : variant === "black" ? "white" : "#3E3A40"} textAlign="center"  fontSize={16}>
            {title}
        </Text>

        </GluestackButton>
    )

}