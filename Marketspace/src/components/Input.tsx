import { Input as GluestackInput, InputField, FormControl, FormControlError, FormControlErrorText, Image, VStack } from "@gluestack-ui/themed"
import { ComponentProps } from "react";
import eye from "../assets/eye.png"
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { Eye, EyeSlash } from "phosphor-react-native";


type Props = ComponentProps<typeof InputField> & {
    isReadOnly?: boolean
    isInvalid?: boolean
    errorMessage?: string | null
    placeholder: string
    isPassword? : boolean
}


export function Input({isPassword = false, ...rest }: Props) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [value, setValue] = useState("");


    function handlePasswordVisibility() {
        setPasswordVisible(!isPasswordVisible);
    }

    
    return (
        <FormControl alignItems="center" width="100%" >
            <GluestackInput
                width={"95%"}
                alignItems="center"

                
            >
                <InputField
                    
                    secureTextEntry={isPassword && !isPasswordVisible}

                    value={value}
                    onChangeText={(text) => setValue(text)}
                    paddingHorizontal={16}
                    paddingVertical={14}    
                    {...rest} 
                    
                    
                    />

                    {isPassword && (
                <VStack position="absolute" top={0} right={40}>
                    <TouchableOpacity onPress={() => handlePasswordVisibility()}  style={{ position: 'absolute', right: 20, top: 15 }}>
                        {isPasswordVisible ? 
                            <EyeSlash size={20} color="#5F5B62" /> : 
                            <Eye size={20} color="#5F5B62" />
                        }
                    </TouchableOpacity>
                </VStack>
                
            )}
                    

                
            </GluestackInput>
 
            
            
            
            
        
                
            
        </FormControl>
    );
}