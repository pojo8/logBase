/**
 * A todo list style application 
 * 
 */

import React, {Component} from 'react';
import {  ImageBackground, StyleSheet, ScrollView, View } from 'react-native';
import Heading from './src/components/Heading'
import Input from './src/components/Input'
import SubmitButton from './src/components/SubmitButton'
import EntryList from './src/components/EntryList'
import TabBar from './src/components/TabBar'



let entryIndex = 0

class App extends Component {
  constructor() {
    super()

    this.state = {
      inputValue: '',
      entrys: [],
      type: 'All'
    }

    // binds methoid to the class- classes dont auto bind functions
    this.submitEntry = this.submitEntry.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteEntry = this.deleteEntry.bind(this)
    this.setType = this.setType.bind(this)
  }

  setType(type) {
    this.setState({ type })
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({ inputValue})
  }

  submitEntry(){
    if(this.state.inputValue.match(/^\s*$/)){
      return
    }
    const entry ={
      title: this.state.inputValue,
      entryIndex,
      complete: false
    }
    
    entryIndex++

    const entrys =[...this.state.entrys, entry]
    this.setState({entrys, inputValue:''}, () => {
      console.log('State: ', this.state)
    })
  }

  toggleComplete(entryIndex){
    let entrys = this.state.entrys
    entrys.forEach((entry) => {
      if (entry.entryIndex === entryIndex){
        entry.complete = !entry.complete
      }
    })
    this.setState({ entrys })
  }

  deleteEntry(entryIndex){
    let { entrys } = this.state
    entrys = entrys.filter((entry) => entry.entryIndex != entryIndex)
    this.setState({ entrys })
  }
  
  

  render() {
    const backgroundImage = require('./src/resources/bg_img.jpg');

    const { entrys, inputValue, type} = this.state
    return (
      <ImageBackground
      source={backgroundImage}
      style={styles.containerImg}
      imageStyle={{ opacity: 0.57 }}
    >
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
                      <Heading/>
                      <Input inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)} />                    
                        <EntryList
                          type={type}
                          toggleComplete={this.toggleComplete}
                          deleteEntry={this.deleteEntry}
                          entrys={entrys} />
                    <SubmitButton submitEntry={this.submitEntry} />
          </ScrollView>
          <TabBar type={type} setType={this.setType} />
        </View>
    </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImg: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#ECEFF1',
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;