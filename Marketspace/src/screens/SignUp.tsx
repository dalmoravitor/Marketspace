import { Center, VStack , Image, Text, HStack, ScrollView} from "@gluestack-ui/themed";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { TouchableOpacity } from "react-native";
import { PencilSimpleLine } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";


export function SignUp() {
    const navigation = useNavigation();
    function handleGoToSignIn() {
    }
    
    return (

        
        <ScrollView backgroundColor="#EDECEE" width={"100%"}   >
            <VStack  justifyContent="space-between"  borderRadius={33}  height={'80%'} width={'100%'} paddingTop={70}>
                <VStack alignItems="center">
                    <Image marginBottom={15} source={logo} alt="logo"/>
                    <Text marginBottom={7} fontSize={24} fontWeight={'bold'}>Boas vindas!</Text>
                    <Text width={"70%"} textAlign="center" color="#5F5B62">Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
                </VStack>

                <VStack gap={14} width={"100%"} alignItems="center" marginTop={50} marginBottom={50}>
                    <TouchableOpacity >
                        <Image     marginBottom={8}  borderColor="#6e85da" source={avatar} />
                        
                        <VStack height={40} top={50} left={50} position="absolute" justifyContent="center" borderRadius={'50%'} width={40} alignItems="center" backgroundColor="#6e85da">
                            <PencilSimpleLine size={20} color="white" />
                        </VStack>


                        
                    </TouchableOpacity>
                    <Input placeholder="Nome"  width={'80%'} height={50} borderRadius={6} backgroundColor="#F5F5F7" />
                    <Input placeholder="E-mail"  width={'80%'} height={50} borderRadius={6} backgroundColor="#F5F5F7" />
                    <Input placeholder="Telefone"  width={'80%'} height={50} borderRadius={6} backgroundColor="#F5F5F7" />
                    <Input  isPassword  placeholder="Senha"  width={'80%'} height={50} borderRadius={6} backgroundColor="#F5F5F7" />
                    <Input marginBottom={20}  isPassword placeholder="Senha"  width={'80%'} height={50} borderRadius={6} backgroundColor="#F5F5F7" />
                    <Button  variant={'black'} width={'80%'} title="Criar"/>
                </VStack>
            </VStack>

            <VStack  gap={17} width={"100%"} height="30%"  alignItems="center" justifyContent="center">
                <Text fontSize={17} color="#3E3A40">Já tem uma conta?</Text>
                <Button variant="gray" title="Ir para o login"  onPress={() => navigation.navigate('signIn')} /> 
            </VStack>
       
            
        </ScrollView>
    )
}

