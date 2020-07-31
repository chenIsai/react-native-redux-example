import React from "react";
import {View, Text, Button} from "react-native";
import {connect} from "react-redux";
import {changeCount} from "./Redux/actions/counts";


const Counter = (props) => {
  return (
    <View>
      <Button
        title="Increment"
        onPress={() => props.change(props.count + 1)}
        />
      <Text style={{alignSelf: "center", fontSize: 20}}>{props.count}</Text>
      <Button
        title="Decrement"
        onPress={() => props.change(props.count - 1)}
        />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (count) => dispatch(changeCount(count))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
