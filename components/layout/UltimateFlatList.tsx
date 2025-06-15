import {FlatList, GestureResponderEvent, StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import {GestureEvent} from "react-native-gesture-handler";
import RecipeCard from "@/components/RecipeCard";

interface FlatListItemProps<T> {
    dataId: T,
    isSelected?: boolean;
    multiSelectMode: boolean;
    onSelected?: (id: T) => void;
    onMultiSelected?: (id: T) => void;
    children?: React.ReactNode;
}


function FlatListItem<T>({
                             isSelected,
                             onSelected,
                             multiSelectMode,
                             onMultiSelected,
                             dataId,
                             children
                         }: FlatListItemProps<T>) {
    function handlePress(e: GestureResponderEvent) {
        console.log("press FlatListItem")
        onSelected && onSelected(dataId);

    }

    function handleLongPress(e: GestureResponderEvent) {
        onMultiSelected && onMultiSelected(dataId);
    }


    return (
        <TouchableOpacity onPress={handlePress} onLongPress={handleLongPress}
        ><View pointerEvents={multiSelectMode ? "none" : undefined}>{children}</View></TouchableOpacity>
    );
}


export default function UltimateFlatList({data}) {

    const [multiselectMode, setMultiselectMode] = React.useState<boolean>(false);
    const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

    console.log("multiselectMode", multiselectMode);
    console.log("selectedIds", selectedIds);

    function handleItemSelected(id: number) {
        multiselectMode && setSelectedIds([...selectedIds, id])
    }

    function handleMultiSelected(id: number) {
        setMultiselectMode(true);
        setSelectedIds([...selectedIds, id]);
    }

    return (
        <FlatList
            data={data}
            renderItem={({item}) =>
                <FlatListItem
                    multiSelectMode={multiselectMode}
                    dataId={item.id}
                    onSelected={handleItemSelected}
                    onMultiSelected={handleMultiSelected}
                >
                    <RecipeCard recipe={item}/>
                </FlatListItem>}
            contentContainerStyle={{gap: 10, marginVertical: 10}}
            columnWrapperStyle={{justifyContent: "space-evenly"}}
            numColumns={2}
        />)
}

const styles = StyleSheet.create({
    mainContainer: {flex: 1},
    titleContainer: {
        flexDirection: "row",
        gap: 8,
        borderBottomWidth: 1,
        borderColor: "grey",
        padding: 20,
        paddingTop: 32,
    },
    bottomRightButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
});
