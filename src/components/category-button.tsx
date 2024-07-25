import { Pressable, PressableProps, Text } from "react-native"; // Serve para o componente se tornar clicavel, além disso faz o scroll da tela
import clsx from "clsx"; // faz mais de um elemento no mesmo css, tmb faz algumas condições dentro do css 

type CategoryProps = PressableProps & {

    title: string
    isSelected?:boolean
}

export function CategoryButton({title, isSelected,...rest}: CategoryProps){
    return(
        <Pressable className={clsx("bg-slate-800 px-4 justify-center rounded-md h-10 mb-4", isSelected && 'border-2 border-lime-300')}  {...rest}>

            <Text className="text-slate-100  font-subtitle text-sm">{title}</Text>
        </Pressable>
    )
}