import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { colors } from '../../styles/colors';
import { useThemeColor } from "@/hooks/useThemeColor";

import ThemedButton from '@/components/ThemedButton';

const DropdownSelectedItemsView = ({
  placeholder,
  error,
  buttonLabel,
  labelsOfSelectedItems,
  openModal,
  isMultiple,
  selectedItem,
  selectedItems,
  dropdownIcon,
  dropdownStyle,
  dropdownIconStyle,
  selectedItemStyle,
  placeholderStyle,
  multipleSelectedItemStyle,
  dropdownErrorStyle,
  primaryColor,
  disabled,
  setIndexOfSelectedItem,
}: any) => {
  const openActions = (label: string) => {
    openModal();
    setIndexOfSelectedItem(label); // immediately scrolls to list item with the specified label when modal
  };
  const themedTextColor = useThemeColor({}, "text");

  
  return (
		<>
			<View>
				<View
					style={styles.selectedItemsContainer}
					onStartShouldSetResponder={() => true}
				>
					{isMultiple ? (
						labelsOfSelectedItems?.map((label: string, i: Number) => (
							<DropdownContent
								onPress={() => openActions(label)}
								key={`react-native-input-select-list-item-${Math.random()}-${i}`}
								style={[
									styles.selectedItems,
									{ backgroundColor: primaryColor },
									multipleSelectedItemStyle,
								]}
								label={label}
								disabled={disabled}
							/>
						))
					) : (
						<DropdownContent
							onPress={() => openActions(labelsOfSelectedItems)}
							style={[{ color: themedTextColor }, selectedItemStyle]}
							label={labelsOfSelectedItems}
							disabled={disabled}
						/>
					)}
					{selectedItem === "" && selectedItems?.length === 0 && (
						<DropdownContent
							onPress={() => openModal()}
							style={[{ color: themedTextColor }, placeholderStyle]}
							label={placeholder ?? "Select an option"}
							disabled={disabled}
						/>
					)}
				</View>
				<ThemedButton icon='add' onPress={() => openModal()}>
					{buttonLabel}
				</ThemedButton>
			</View>
			<View style={[styles.iconStyle, dropdownIconStyle]}>
				{dropdownIcon || (
					<Image source={require("../../asset/arrow-down.png")} />
				)}
			</View>
		</>
	);
};

const DropdownContent = ({ onPress, style, label, ...rest }: any) => {
  return (
    <TouchableOpacity onPress={() => onPress()} {...rest}>
      <Text style={style}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconStyle: { position: 'absolute', right: 25, top: 25 },
  selectedItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  selectedItems: {
    color: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.primary,
    overflow: 'hidden',
    margin: 5
  },
});

export default DropdownSelectedItemsView;
