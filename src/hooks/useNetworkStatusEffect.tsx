import { useNetInfo } from "@react-native-community/netinfo";

export const useNetworkStatusEffect = (): { isNetworkConnected : boolean; } => {
    const nextInfo = useNetInfo()
    const isNetworkConnected = ( nextInfo.isConnected || nextInfo.isInternetReachable );
    return {isNetworkConnected: isNetworkConnected ?? false}
}