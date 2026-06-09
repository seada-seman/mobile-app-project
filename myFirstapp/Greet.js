import { Text,View } from "react-native-web";

export default function Greet(props){
    return (
        <View> <Text style={{ color: "white", }}>Hello {props.name}!!</Text></View>
    );
}