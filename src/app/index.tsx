import { useState, useRef } from "react";
import { View, Text, FlatList, SectionList, } from "react-native";

import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";

import { CATEGORIES, MENU } from "@/utils/data/products";
import { Product } from "@/components/product";
import { Link } from "expo-router";


export default function Home(){
    const [category, setCategory] = useState(CATEGORIES[1])
    
    const sectionListRef = useRef<SectionList>(null) // usada para mostrar uma referencia



    function handleCategorySelect(selectedCategory: string){
        setCategory(selectedCategory)
        const sectionIndex = CATEGORIES.findIndex(category => category === selectedCategory)
        // console.log()

        if(sectionListRef.current){
            sectionListRef.current.scrollToLocation({
                animated: true, // animação
                sectionIndex, // usar o index que selecionamos 
                itemIndex:1 // e usar o 1 como ponto de partida, no caso como promoções          
            })
        }
    }

    return(
        <View>
            <Header title="faça seu pedido" cartQuantityItems={0}/>
            <FlatList // Lista de dados 
                data={CATEGORIES} keyExtractor={(item) => item}
                renderItem={({item}) => <CategoryButton title={item} isSelected={item === category} onPress={()=> handleCategorySelect(item)}/> } horizontal className="max-h-15 mt-1"
                showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: 12, paddingHorizontal:20} }

            />
            <SectionList // Lista de dados categorizada, é o estilo do components basedo, no estilo de dado que possui
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={(item) => item.id}
                stickySectionHeadersEnabled={false} // não fazer o efeito de esticar
                renderItem={({item}) =>
                 <Link href={`product/${item.id}`}asChild>
                 <Product data={item}/> 
                 </Link>
                 }
                renderSectionHeader={({section: {title} }) => (<Text className="text-xl text-white  font-heading mt-10">{title}</Text>)}
                contentContainerStyle={{paddingBottom: 220}}
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