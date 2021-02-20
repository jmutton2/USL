import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function calendar() {
  return (
    <View style={styles.container}>
      <Agenda

        // Callback that gets called when items for a certain month should be loaded (month became visible)
        loadItemsForMonth={(month) => {console.log('trigger items loading')}}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
        // Callback that gets called on day press
        onDayPress={(day)=>{console.log('day pressed')}}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={(day)=>{console.log('day changed')}}
        // Initially selected day
        //selected={'2012-05-16'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2012-05-30'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {return (<View />);}}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
        renderDay={(day, item) => {return (<View />);}}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {return (<View />);}}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData = {() => {return (<View />);}}
        // Specify your item comparison function for increased performance
        rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}

        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        // disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
        // onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        // refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
        // refreshControl={null}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    height: 500
  }
})


