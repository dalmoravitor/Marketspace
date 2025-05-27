import { Center, VStack , Image, Text} from "@gluestack-ui/themed";
import logo from "../assets/logo.png";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
    const navigation = useNavigation<any>();

    function handleGoToSignUp() {
        navigation.navigate('SignUp')
    }

    return (
        <VStack backgroundColor="white" width={"100%"} height="100%" alignItems="center">
            <VStack  justifyContent="space-between" borderRadius={33} backgroundColor="#EDECEE" height={'70%'} width={'100%'} paddingTop={100}>
                <VStack alignItems="center">
                    <Image marginBottom={15} source={logo} alt="logo"/>
                    <Text fontSize={28} fontWeight={'bold'}>marketspace</Text>
                    <Text color="#5F5B62">Seu espaço de compra e venda</Text>
                </VStack>

                <VStack gap={14} width={"100%"} alignItems="center" marginTop={50} marginBottom={80}>
                    <Text color="#3E3A40" fontSize={17}>Acesse sua conta</Text>
                    <Input placeholder="E-mail"  width={'80%'} height={50} borderRadius={6} backgroundColor="#F5F5F7" />
                    <Input marginBottom={20}  isPassword placeholder="Senha"  width={'80%'} height={50} borderRadius={6} backgroundColor="#F5F5F7" />
                    <Button width={'80%'} title="Entrar"/>
                </VStack>
            </VStack>

            <VStack gap={17} width={"100%"} height="30%"  alignItems="center" justifyContent="center">
                <Text fontSize={17} color="#3E3A40">Ainda não tem acesso?</Text>
                <Button onPress={() => navigation.navigate('signUp')} variant="gray" title="Criar uma conta" />
            </VStack>
       
            
        </VStack>
    )
}

