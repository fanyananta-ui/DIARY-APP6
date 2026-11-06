
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,

        tabBarActiveTintColor: '#8B5CF6',
        tabBarInactiveTintColor: '#A1A1AA',

        tabBarStyle: {
          height: 75,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#8B5CF6',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 3,
        },

        tabBarItemStyle: {
          borderRadius: 15,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Diary',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 23 }}>
              {focused ? '📖' : '📔'}
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorit',
          tabBarLabel: 'Favorit',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 23 }}>
              {focused ? '❤️' : '❤️'}
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: 'Buat Diary',
          tabBarLabel: 'Buat Diary',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 23 }}>
              {focused ? '📝' : '✏️'}
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Pengaturan',
          tabBarLabel: 'Pengaturan',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 23 }}>
              {focused ? '⚙️' : '🔧'}
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
