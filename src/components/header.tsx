import { Feather } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity} from "react-native";
import colors from "tailwindcss/colors"


type HeaderProps = {
    title:string
    cartQuantityItems?: number
}

export function Header({title, cartQuantityItems= 0}: HeaderProps){
    return(
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5 my-10" >
            <View className="Flex-1" > 
                <Image source={require('@/assets/logo.png')} className="h-6 w-32 "/> 
                <Text className="text-white text-xl font-heading mt-2">{title}</Text>
            </View>
            {cartQuantityItems > 0 && (                                                     // if ternario sendo usado para mostrar a sacola quando tiver algum valor maior que 0 
                <TouchableOpacity className="relative" activeOpacity={0.7} >  
                    <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                        <Text className="text-slate-500 font-bold text-xs">{cartQuantityItems}</Text>
                    </View>
                    <Feather name="shopping-bag" className="" color={colors.white} size={24}/> 
                </TouchableOpacity>
            )}
        </View>
    )
}