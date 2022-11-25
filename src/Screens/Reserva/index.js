import React, { useState } from "react";
import { Button, View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from "./styles";
import SelectDropdown from 'react-native-select-dropdown'

import FontistoIcon from 'react-native-vector-icons/Fontisto';

const Example = () => {
  const [isDatePickerVisibleInicio, setDatePickerVisibilityInicio] = useState(false);

  const showDatePickerInicio = () => {
    setDatePickerVisibilityInicio(true);
  };

  const hideDatePickerInicio = () => {
    setDatePickerVisibilityInicio(false);
  };

  const handleConfirmInicio = (date) => {
    console.warn("A date has been picked: ", date);
    console.log(date)
    setInicio(date)
    hideDatePicker();
  };

  //Final
  const [isDatePickerVisibleFinal, setDatePickerVisibilityFinal] = useState(false);

  const showDatePickerFinal = () => {
    setDatePickerVisibilityFinal(true);
  };

  const hideDatePickerFinal = () => {
    setDatePickerVisibilityFinal(false);
  };

  const handleConfirmFinal = (date) => {
    console.warn("A date has been picked: ", date);
    setFinal(date)
    hideDatePicker();
  };

  const [inicio, setInicio] = useState()
  const [final, setFinal] = useState()

  var quantidades = [1, 2, 3]
  var quantidadesCamasSolteiro = [0, 1, 2, 3]
  const widthSelects = Dimensions.get("screen").width / 3.5

  return (
    <View style={{ flex: 1 }}>


      <DateTimePickerModal
        isVisible={isDatePickerVisibleInicio}
        mode="date"
        onConfirm={handleConfirmInicio}
        onCancel={hideDatePickerInicio}
        date={new Date()}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleFinal}
        mode="date"
        onConfirm={handleConfirmFinal}
        onCancel={hideDatePickerFinal}

      />
      <View style={styles.topContainer}>
        <Text>Reservas</Text>
      </View>
      <View style={styles.middleContainer}>
        <TouchableOpacity style={styles.pickerDateContainer} onPress={() => showDatePickerInicio()}>
          <FontistoIcon name="date" size={30} color="white" />
          <Text>Data de entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.pickerDateContainer, { backgroundColor: '#3382C9' }]} onPress={() => showDatePickerFinal()}>
          <FontistoIcon name="date" size={30} color="white" />
          <Text style={{ color: 'white' }}>Data de Saída</Text>
        </TouchableOpacity>
        <View>
          <Text>Quantidade de pessoas</Text>
          <SelectDropdown
            buttonStyle={styles.selectButton}
            data={quantidades}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}

            searchPlaceHolder="teste"
          />
        </View>
        <View style={styles.selectContainer}>
          <Text>Quantidade de camas</Text>
          <SelectDropdown
            buttonStyle={styles.selectButton}
            data={quantidadesCamasSolteiro}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            searchPlaceHolder="teste"
          />
        </View>

        <View style={styles.selectionQtdContainer}>


        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text>{inicio}</Text>
        <Text>{final}</Text>
      </View>
    </View>
  );
};

export default Example;