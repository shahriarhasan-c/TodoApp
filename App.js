import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList,TouchableOpacity, Alert, TouchableWithoutFeedback , Keyboard} from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/todoItem';
import AddTodo from './Components/addTodo';

export default function App() {
  // const [people, setPeople] = useState([
  //   { name: 'John', id: '1' },
  //   { name: 'Duke', id: '2' },
  //   { name: 'Wick', id: '3' },
  //   { name: 'Weed', id: '4' },
  //   { name: 'Cigar', id: '5' },
  //   { name: 'Sargio', id: '6' },
  //   { name: 'Crypto', id: '7' },
  //   { name: 'Cyprus', id: '8' },
  //   { name: 'Maxio', id: '9' },
  // ]);
  // const pressHandler = (id)=>{
  //   console.log(id);
  //   setPeople((prevPeople)=>{
  //     return prevPeople.filter(person=>person.id != id);
  //   })
  // }

 
  const[todos,setTodos]=useState([
    
  ])

  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todos=>todos.key != key);
    });
  }

  const submitHandler = (text)=>{
    if(text.length > 3){
    setTodos((prevTodos)=>{
      return[
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })}
    else{
      Alert.alert("OOPS!",'Todo must be over 3 characters',[{text: 'Understood'}])
    }

  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
     <Header/>
     <View style={styles.content}>
      <AddTodo submitHandler={submitHandler}/>
      <View style={styles.list}>
        <FlatList
        data={todos}
        renderItem={({item})=>(
          <TodoItem item={item} pressHandler={pressHandler}/>
        )}
        />
      </View>
     </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  textbox: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200,
    backgroundColor: 'white',

  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
  content:{
    padding: 40,
   
    flex: 1,
    
  },
  list: {
      flex: 1,
      marginTop: 20,
      
    },
});
