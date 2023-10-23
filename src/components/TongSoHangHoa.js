import React from "react"
import { View, Dimensions, StyleSheet, StatusBar } from "react-native";
import { LineChart } from "react-native-chart-kit";

const TongSoHangHoa = () => {

    const chartConfig = {
        backgroundGradientFrom: "#000",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#000",
        backgroundGradientToOpacity: 0,
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
            {
                data: [10, 45, 28, 50, 70, 43, 80, 80, 60, 99, 43],
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Tổng số hàng hóa trong kho lạnh (m3)"] // optional
    };

    return (
        <View style={styles.container}>
            <LineChart
                data={data}
                width={screenWidth}
                height={300}
                chartConfig={chartConfig}
            />
            <LineChart
                data={data}
                width={screenWidth}
                height={300}
                chartConfig={chartConfig}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: -20,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default TongSoHangHoa;