import { Slot, } from 'expo-router'; // vai funcionar como rotas por arquivo 
import { Loading } from '@/components/loading';
import { SafeAreaView } from 'react-native';


import {
    useFonts,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_700Bold
} from '@expo-google-fonts/inter'


export default function Layout(){
    const [fontsLoaded] = useFonts ({
        Inter_600SemiBold,
        Inter_500Medium,
        Inter_400Regular,
        Inter_700Bold
    })

if(!fontsLoaded){
    return(<Loading/>)
}

return(
    <SafeAreaView className='flex-1 bg-slate-900'>
    <Slot></Slot>
    </SafeAreaView>
)

}