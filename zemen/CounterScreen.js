
import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from './redux/CounterSlice';
import { Button,View,Text } from "react-native";

export default function CounterScreen(){
    const value = useSelector(state => state.counter.value);
    const dispatch = useDispatch();


return (
    <View>
    <Text>Value: {value}</Text>
    <Button title="increment" onPress={() => dispatch(increment())}/>
    <Button title="decrement" onPress={() => dispatch(decrement())}/>
    </View>
);
}