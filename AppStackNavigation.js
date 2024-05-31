import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Contract from "./components/Contract";
import Search from "./components/Search";

const AppStackNavigation = createStackNavigator({

    Contract : {
        screen: Contract,
        navigationOptions: {
            title: 'Contract',
            headerStyle: { backgroundColor: '#ac0a07' },
            headerTitleStyle: { color: '#fff' },
        }
    },
    Search : {
        screen: Search,
        navigationOptions: {
            title: 'Search',
            headerStyle: { backgroundColor: '#ac0a07' },
            headerTitleStyle: { color: '#fff' },
        }
    }
});

export default createAppContainer(AppStackNavigation);