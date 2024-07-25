import { useLocalSearchParams } from "expo-router";
import { View , Text} from "react-native";

export default function Product (){
    const { id } = useLocalSearchParams()
    return(
        <View className="flex-1">
            <Text className="text-yellow-300 font-heading text-5x1">{id}</Text>
        </View>
    )
}