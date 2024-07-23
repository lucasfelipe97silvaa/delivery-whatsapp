import { useState } from "react";
import { View, Text, FlatList, SectionList, } from "react-native";

import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";

import { CATEGORIES, MENU } from "@/utils/data/products";


export default function Home(){
    const [category, setCategory] = useState(CATEGORIES[0])
    function handleCategorySelect(selectedCategory: string){
        setCategory(selectedCategory)
        const sectionIndex = CATEGORIES.findIndex(category => category === selectedCategory)
        console.log(selectedCategory)
    }

    return(
        <View>
            <Header title="faça seu pedido" cartQuantityItems={0}/>
            <FlatList // Lista de dados 
                data={CATEGORIES} keyExtractor={(item) => item}
                renderItem={({item}) => <CategoryButton title={item} isSelected={item === category} onPress={()=> handleCategorySelect(item)}/> } horizontal className="max-h-14 mt-01"
                showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: 12, paddingHorizontal:20}}
            />
            <SectionList // Lista de dados categorizada, é o estilo do components basedo, no estilo de dado que possui
                sections={MENU}
                keyExtractor={(item) => item.id}
                stickySectionHeadersEnabled={false} // não fazer o efeito de esticar
                renderItem={({item}) => <Text className="text-white">{item.title}</Text>}
                    renderSectionHeader={({section: {title} }) => (<Text className="text-yellow-200">{title}</Text>)}
            />
        
        </View>
    )
}




{/* 1° versão do flatList modo manual 

 <View className="flex-row gap-8">
<CategoryButton title="Lanche do dia" isSelected/>
<CategoryButton title="Promoçoes"/>
<CategoryButton title="Sobremesas"/>
<CategoryButton title="Bebidas"/>
</View> */}