import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
/**
 * custom container view
 */
const Container = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>{props.children}</View>
    </SafeAreaView>
  )
}
export default Container
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" }
})